import { z } from 'zod'
import { isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'
import React from 'react'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { PhoneNumberInput } from '@components/global/forms/PhoneNumberInput'
import { TextInput } from '@components/global/forms/TextInput'
import { Buttons } from '@components/global/primitives/Buttons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FormProvider, useForm, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { defaultResponseProperties } from '@typed/global'
import { AuthenticationStore } from '@state/AuthState'
import toast from 'react-hot-toast'
import { Logger } from '@utils/Logger'
import { AxiosError } from 'axios'
import RequestManager from '@utils/RequestManager'
import { reusableAsyncToast } from '@utils/ReusableAsyncToast'

export const AddPhoneNumberForm = (): JSX.Element => {
  const router = useRouter()

  //state
  const [countdown, setCountdown] = React.useState<boolean>(false)
  const [liu] = AuthenticationStore((state) => [state.liu])

  //functions
  const PhoneNumberFormValidationSchema = z.object({
    phone: z
      .string()
      .refine(async (val) => isValidPhoneNumber(val), {
        message: 'Phone number is not valid'
      })
      .refine(async (val) => isPossiblePhoneNumber(val), {
        message: 'Phone number is not valid'
      }),
    code: z.string().min(6).max(6)
  })

  const onSubmit = async (data: z.infer<typeof PhoneNumberFormValidationSchema>) => {
    const body = {
      verificationCode: Number(data.code),
      userId: liu?.id || 0
    }

    const verifyPhoneUrl = `/api/v1/auth/verify-phone`
    try {
      const request = RequestManager.makeRequest<defaultResponseProperties>(verifyPhoneUrl, 'post', body, { unAuthenticated: true })

      //setup async toast
      await toast.promise(request, {
        loading: 'Saving...',
        success: <b>Saved!</b>,
        error: (e) => {
          console.log('from toast', e)
          if (e instanceof AxiosError) {
            return <b>{e.response?.data['message']}</b>
          }
          return <b>Something went wrong!</b>
        }
      })

      const response = await request

      if (response.code === 200) {
        await router.push('/registration/add-birthday')
      }
    } catch (e) {
      Logger('error phone number form:', e)
    }
  }

  const handlePhoneUpdate = async (methods: UseFormReturn<formInputs>, userId: number) => {
    //validate phone number field
    const result = await methods.trigger('phone')
    if (!result) return

    //make API call
    const updatePhoneUrl = `/api/v1/users/${userId}/phone`
    const body = { phone: methods.getValues('phone') }

    try {
      const request = RequestManager.makeRequest<defaultResponseProperties>(updatePhoneUrl, 'patch', body)

      //setup async toast
      await reusableAsyncToast(request, 'Sending...', 'Verification code sent!')

      const response = await request

      //check status code for success
      //note: the above request also sends a verification code to the inputted phone number
      if (response.code === 200) {
        //start countdown
        setCountdown(true)
      }
    } catch (e) {
      Logger('error from verification code button:', e)
    }
  }

  const methods = useForm<formInputs>({ resolver: zodResolver(PhoneNumberFormValidationSchema) })

  const useResetFormAfterSubmitting = (methods: UseFormReturn<formInputs>) => {
    React.useEffect(() => {
      if (methods.formState.isSubmitSuccessful) {
        methods.reset()
      }
    }, [methods, methods.formState.isSubmitSuccessful])
  }

  type formInputs = z.infer<typeof PhoneNumberFormValidationSchema>

  //logic/calls
  useResetFormAfterSubmitting(methods)

  return (
    <FormProvider {...methods}>
      <form
        className={`relative flex h-full w-full flex-col items-center justify-center`}
        onSubmit={methods.handleSubmit(onSubmit)}
        noValidate>
        <CardWrapper
          className={'grid w-[568px] grid-cols-1 grid-rows-[max-content_max-content_max-content] items-start gap-8 px-[140px] py-[40]'}>
          {/*header section*/}
          <div className={'flex w-full flex-col'}>
            <Typography.LargeTitle className={'text-app-purple'}>We need some more</Typography.LargeTitle>
            <Typography.LargeTitle className={'text-app-purple'}>information</Typography.LargeTitle>
          </div>

          {/*form inputs*/}
          <div className={'min-h-[17rem] w-full'}>
            <PhoneNumberInput name={'phone'} label={'Phone number'} />
            <div className={'grid grid-cols-2 grid-rows-1 gap-1'}>
              <TextInput name={'code'} label={'Verification code'} />
              <Buttons.SecondaryTextButton
                className={'place-self-start'}
                disabled={countdown}
                onClick={() => handlePhoneUpdate(methods, liu?.id || 0)}>
                Request Code {countdown && <Countdown setCountdown={setCountdown} />}
              </Buttons.SecondaryTextButton>
            </div>
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
      </form>
    </FormProvider>
  )
}

const Countdown = ({ setCountdown }: { setCountdown: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element => {
  const [counter, setCounter] = React.useState(60)

  // start countdown
  React.useEffect(() => {
    counter > 0 && setTimeout(() => setCounter(counter - 1), 1000)

    if (counter === 0) setCountdown(false)
  }, [counter, setCountdown])

  return <span>..{counter}</span>
}
