import { z } from 'zod'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { Buttons } from '@components/global/primitives/Buttons'
import { FormMaster } from '@components/global/forms/FormMaster'
import { OTPInput } from '@components/global/forms/OTPInput'
import { useRouter } from 'next/router'
import RequestManager from '@utils/RequestManager'
import { defaultResponseProperties } from '@typed/global'
import { Logger } from '@utils/Logger'
import React from 'react'
import { AuthenticationStore } from '@state/AuthState'
import { reusableAsyncToast } from '@utils/ReusableAsyncToast'

export const PasswordResetVerifyCodeForm = (): JSX.Element => {
  const router = useRouter()

  //state
  const [liu] = AuthenticationStore((state) => [state.liu])

  //functions
  const PasswordResetVerifyCodeFormValidationSchema = z.object({
    code: z.string().min(6).max(6)
  })

  const onSubmit = async (data: z.infer<typeof PasswordResetVerifyCodeFormValidationSchema>) => {
    console.log('form submitted:', data)
    const body = {
      verificationCode: data.code,
      userId: liu?.id || 0
    }

    const verifyEmailUrl = `/api/v1/auth/verify-email`
    try {
      const request = RequestManager.makeRequest<defaultResponseProperties>(verifyEmailUrl, 'post', body, { unAuthenticated: true })

      //setup async toast
      await reusableAsyncToast(request, 'Checking...', 'Verification successful!')

      const response = await request

      if (response.code === 200) {
        await router.push('/password-reset/new-password')
      }
    } catch (e) {
      Logger('error verify code form:', e)
    }
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
