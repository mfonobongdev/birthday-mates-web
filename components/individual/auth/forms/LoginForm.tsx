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

export const LoginForm = (): JSX.Element => {
  const router = useRouter()

  //functions
  const LoginFormValidationSchema = z.object({
    email: z.string().email(),
    password: z.string().min(8)
  })

  const onSubmit = (data: z.infer<typeof LoginFormValidationSchema>) => {
    console.log('form submitted:', data)
    router.push('/registration').then()
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

          <div className={'pt-3'}>
            <Link href='/registration'>
              <a>
                <Typography.FootNote className={'text-center text-app-purple'}>Don&apos;t Have an account yet?</Typography.FootNote>
              </a>
            </Link>
          </div>
        </div>
      </CardWrapper>
    </FormMaster>
  )
}
