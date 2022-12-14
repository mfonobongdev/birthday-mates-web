import { z } from 'zod'
import React from 'react'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { Buttons } from '@components/global/primitives/Buttons'
import Link from 'next/link'
import { FormMaster } from '@components/global/forms/FormMaster'
import { DateInput } from '@components/global/forms/DateInput'
import validator from 'validator'
import { useRouter } from 'next/router'
import { defaultResponseProperties } from '@typed/global'
import { Logger } from '@utils/Logger'
import { AuthenticationStore } from '@state/AuthState'
import RequestManager from '@utils/RequestManager'
import { reusableAsyncToast } from '@utils/ReusableAsyncToast'
// import { DateTime, Interval } from 'luxon'

export const AddBirthdayForm = (): JSX.Element => {
  const router = useRouter()

  //state
  const [liu] = AuthenticationStore((state) => [state.liu])

  //functions
  // const validateAge = (date: string) => {
  //   const now = DateTime.now()
  //   const birthday = DateTime.fromISO(date)
  //   const i = Interval.fromDateTimes(birthday, now)
  //   const age = i.length('years')
  //   return age > 16
  // }
  const BirthdayFormValidationSchema = z.object({
    birthday: z.string().refine(async (val) => validator.isISO8601(val), {
      message: 'Not a valid ISO string date'
    })
    // .refine(async (val) => validateAge(val), {
    //   message: 'You must be over 16'
    // })
  })

  const onSubmit = async (data: z.infer<typeof BirthdayFormValidationSchema>) => {
    const body = {
      birthDate: data.birthday
    }

    const addBirthdayUrl = `/api/v1/users/${liu?.id || 0}/birthday`
    try {
      const request = RequestManager.makeRequest<defaultResponseProperties>(addBirthdayUrl, 'patch', body)

      //setup async toast
      await reusableAsyncToast(request)

      const response = await request

      if (response.code === 200) {
        await router.push('/registration/add-profile-image')
      }
    } catch (e) {
      Logger('error birthday form:', e)
    }
  }

  return (
    <FormMaster onSubmitHandler={onSubmit} validationSchema={BirthdayFormValidationSchema} className={'items-center justify-center'}>
      <CardWrapper
        className={'grid w-[568px] grid-cols-1 grid-rows-[max-content_max-content_max-content] items-start gap-8 px-[140px] py-[40]'}>
        {/*header section*/}
        <div className={'flex w-full flex-col'}>
          <Typography.LargeTitle className={'text-center text-app-purple'}>When is your birthday?</Typography.LargeTitle>
        </div>

        {/*form inputs*/}
        <div className={'min-h-[15rem] w-full'}>
          <DateInput name={'birthday'} />
        </div>

        {/*footer*/}
        <div className={'flex w-full flex-col space-y-3'}>
          <Buttons.PrimaryTextButton type={'submit'}>Continue</Buttons.PrimaryTextButton>

          <div className={'pt-3'}>
            <Link href='/login'>
              <a>
                <Typography.FootNote className={'text-center text-app-purple'}>Have an account already?</Typography.FootNote>
              </a>
            </Link>
          </div>
        </div>
      </CardWrapper>
    </FormMaster>
  )
}
