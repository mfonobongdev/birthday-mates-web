import { z } from 'zod'
import { isValidPhoneNumber, isPossiblePhoneNumber } from 'react-phone-number-input'
import React from 'react'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { PhoneNumberInput } from '@components/global/forms/PhoneNumberInput'
import { TextInput } from '@components/global/forms/TextInput'
import { Buttons } from '@components/global/primitives/Buttons'
import Link from 'next/link'
import { FormMaster } from '@components/global/forms/FormMaster'
import { useRouter } from 'next/router'

export const AddPhoneNumberForm = (): JSX.Element => {
  const router = useRouter()

  //state
  const [countdown, setCountdown] = React.useState<boolean>(false)

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

  const onSubmit = (data: z.infer<typeof PhoneNumberFormValidationSchema>) => {
    console.log('form submitted:', data)
    router.push('/registration/add-birthday').then()
  }
  return (
    <FormMaster onSubmitHandler={onSubmit} validationSchema={PhoneNumberFormValidationSchema} className={'items-center justify-center'}>
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
            <Buttons.SecondaryTextButton className={'place-self-start'} disabled={countdown} onClick={() => setCountdown(true)}>
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
    </FormMaster>
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
