import { z } from 'zod'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { TextInput } from '@components/global/forms/TextInput'
import { FormIcons } from '@components/global/icons/FormIcons'
import { Buttons } from '@components/global/primitives/Buttons'
import { FormMaster } from '@components/global/forms/FormMaster'
import { useRouter } from 'next/router'

export const NewPasswordForm = (): JSX.Element => {
  const router = useRouter()

  //functions
  const PasswordResetFormValidationSchema = z
    .object({
      newPassword: z.string().min(8),
      confirmPassword: z.string().min(8)
    })
    .superRefine(({ confirmPassword, newPassword }, ctx) => {
      if (confirmPassword !== newPassword) {
        ctx.addIssue({
          code: 'custom',
          path: ['confirmPassword'],
          message: 'The passwords did not match'
        })
      }
    })

  const onSubmit = (data: z.infer<typeof PasswordResetFormValidationSchema>) => {
    console.log('form submitted:', data)
    router.push('/login').then()
  }
  return (
    <FormMaster onSubmitHandler={onSubmit} validationSchema={PasswordResetFormValidationSchema} className={'items-center justify-center'}>
      <CardWrapper
        className={'grid w-[568px] grid-cols-1 grid-rows-[max-content_max-content_max-content] items-start gap-8 px-[140px] py-[40]'}>
        {/*header section*/}
        <div className={'flex w-full flex-col space-y-[4.3px]'}>
          <Typography.LargeTitle className={'text-app-purple'}>Reset Password</Typography.LargeTitle>
          <Typography.Subhead>Enter new password</Typography.Subhead>
        </div>

        {/*form inputs*/}
        <div className={'flex min-h-[17rem] w-full flex-col'}>
          <TextInput name={'newPassword'} label={'New Password'} Icon={FormIcons.Password} type={'password'} />
          <TextInput name={'confirmPassword'} label={'Confirm Password'} Icon={FormIcons.Password} type={'password'} />
        </div>

        {/*footer*/}
        <div className={'w-full space-y-3'}>
          <Buttons.PrimaryTextButton type={'submit'}>Continue</Buttons.PrimaryTextButton>
        </div>
      </CardWrapper>
    </FormMaster>
  )
}
