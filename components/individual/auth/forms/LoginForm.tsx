import { z } from 'zod'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { TextInput } from '@components/global/forms/TextInput'
import { FormIcons } from '@components/global/icons/FormIcons'
import { Divider } from '@components/global/primitives/Divider'
import { Buttons } from '@components/global/primitives/Buttons'
import Link from 'next/link'
import { FormMaster } from '@components/global/forms/FormMaster'
import { useRouter } from 'next/router'
import { defaultResponseProperties } from '@typed/global'
import { Logger } from '@utils/Logger'
import { AuthenticationStore } from '@state/AuthState'
import RequestManager from '@utils/RequestManager'
import { reusableAsyncToast } from '@utils/ReusableAsyncToast'

//response types
type loginResponse = {
  data: {
    id: number
    fullName: string
    email: string
    phone: string
    photo: string
    coverPhoto: string
    location: string
    summary: string
    isEmailVerified: boolean
    isAnOrganization: boolean
    isPhoneVerified: boolean
  }
  meta: {
    accessToken: string
  }
} & defaultResponseProperties

export const LoginForm = (): JSX.Element => {
  const router = useRouter()

  //state
  const [updateLiu, updateAuthToken, updateIsLoggedIn] = AuthenticationStore((state) => [
    state.updateLiu,
    state.updateAuthToken,
    state.updateIsLoggedIn
  ])

  //functions
  const LoginFormValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })

  const onSubmit = async (data: z.infer<typeof LoginFormValidationSchema>) => {
    const loginUrl = '/api/v1/auth/login'

    const body = { email: data.email, password: data.password }

    try {
      const request = RequestManager.makeRequest<loginResponse>(loginUrl, 'post', body, { unAuthenticated: true })

      //setup async toast
      await reusableAsyncToast(request, 'Logging in...', 'Welcome!')

      const response = await request

      //set user in state
      updateLiu({ ...response.data })

      //set token in state
      updateAuthToken(response.meta.accessToken)

      //update logged in state
      updateIsLoggedIn(true)

      //push to posts page
      await router.push('/posts')
    } catch (e) {
      Logger('error login form:', e)
    }
  }

  return (
    <FormMaster onSubmitHandler={onSubmit} validationSchema={LoginFormValidationSchema} className={'items-center justify-center'}>
      <CardWrapper
        className={'grid w-[568px] grid-cols-1 grid-rows-[max-content_max-content_max-content] items-start gap-8 px-[140px] py-[40]'}>
        {/*header section*/}
        <div className={'flex w-full flex-col space-y-[4.3px]'}>
          <Typography.LargeTitle className={'text-app-purple'}>Welcome Back,</Typography.LargeTitle>
          <Typography.Subhead>Log in to your account</Typography.Subhead>
        </div>

        {/*form inputs*/}
        <div className={'flex min-h-[15rem] w-full flex-col'}>
          <TextInput name={'email'} label={'E - mail'} Icon={FormIcons.Email} type={'email'} />
          <TextInput name={'password'} label={'Password'} Icon={FormIcons.Password} type={'password'} />
        </div>

        {/*footer*/}
        <div className={'flex w-full flex-col space-y-3'}>
          <Divider.Text>OR</Divider.Text>

          <div className={'flex space-x-2'}>
            <Buttons.FacebookButton />
            <Buttons.GoogleButton />
          </div>

          <Buttons.PrimaryTextButton type={'submit'}>Continue</Buttons.PrimaryTextButton>

          <div className={'flex flex-col space-y-2 pt-3'}>
            <Link href='/registration'>
              <a>
                <Typography.FootNote className={'text-center text-app-purple'}>Don&apos;t Have an account yet?</Typography.FootNote>
              </a>
            </Link>
            <Link href='/password-reset'>
              <a>
                <Typography.Custom className={'text-center text-[9px] font-bold text-app-purple'}>Forgot password?</Typography.Custom>
              </a>
            </Link>
          </div>
        </div>
      </CardWrapper>
    </FormMaster>
  )
}
