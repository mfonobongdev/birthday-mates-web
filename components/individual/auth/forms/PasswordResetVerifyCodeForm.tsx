import { z } from 'zod'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { Buttons } from '@components/global/primitives/Buttons'
import { FormMaster } from '@components/global/forms/FormMaster'
import { OTPInput } from '@components/global/forms/OTPInput'
import { useRouter } from 'next/router'

export const PasswordResetVerifyCodeForm = (): JSX.Element => {
  const router = useRouter()

  //functions
  const PasswordResetVerifyCodeFormValidationSchema = z.object({
    code: z.string().min(6).max(6)
  })

  const onSubmit = (data: z.infer<typeof PasswordResetVerifyCodeFormValidationSchema>) => {
    console.log('form submitted:', data)
    router.push('/password-reset/new-password').then()
  }
  return (
    <FormMaster
      onSubmitHandler={onSubmit}
      validationSchema={PasswordResetVerifyCodeFormValidationSchema}
      defaultValues={{ code: '' }}
      className={'items-center justify-center'}>
      <CardWrapper
        className={'grid w-[568px] grid-cols-1 grid-rows-[max-content_max-content_max-content] items-start gap-8 px-[140px] py-[40]'}>
        {/*header section*/}
        <div className={'flex w-full flex-col space-y-[4.3px]'}>
          <Typography.LargeTitle className={'text-app-purple'}>Reset Password</Typography.LargeTitle>
          <Typography.Subhead>Enter the code sent to your email address</Typography.Subhead>
        </div>

        {/*form inputs*/}
        <div className={'flex min-h-[17rem] w-full flex-col'}>
          <OTPInput name={'code'} />
        </div>

        {/*footer*/}
        <div className={'w-full space-y-3'}>
          <Buttons.PrimaryTextButton type={'submit'}>Continue</Buttons.PrimaryTextButton>
        </div>
      </CardWrapper>
    </FormMaster>
  )
}
