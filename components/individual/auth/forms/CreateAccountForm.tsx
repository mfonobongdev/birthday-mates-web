import { z } from 'zod'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { TextInput } from '@components/global/forms/TextInput'
import { FormIcons } from '@components/global/icons/FormIcons'
import { SwitchInput } from '@components/global/forms/SwitchInput'
import { Divider } from '@components/global/primitives/Divider'
import { Buttons } from '@components/global/primitives/Buttons'
import Link from 'next/link'
import { FormMaster } from '@components/global/forms/FormMaster'
import { useRouter } from 'next/router'

export const CreateAccountForm = (): JSX.Element => {
  const router = useRouter()

  //functions
  const CreateAccountFormValidationSchema = z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8),
    isOrganization: z.boolean()
  })

  const onSubmit = (data: z.infer<typeof CreateAccountFormValidationSchema>) => {
    console.log('form submitted:', data)
    router.push('/registration/add-phone-number').then()
  }
  return (
    <FormMaster
      onSubmitHandler={onSubmit}
      validationSchema={CreateAccountFormValidationSchema}
      defaultValues={{ isOrganization: false }}
      className={'items-center justify-center'}>
      <CardWrapper
        className={'grid w-[568px] grid-cols-1 grid-rows-[max-content_max-content_max-content] items-start gap-8 px-[140px] py-[40]'}>
        {/*header section*/}
        <div className={'flex w-full flex-col space-y-[4.3px]'}>
          <Typography.LargeTitle className={'text-app-purple'}>Let&apos;s get started</Typography.LargeTitle>
          <Typography.Subhead>Create your account</Typography.Subhead>
        </div>

        {/*form inputs*/}
        <div className={'flex min-h-[15rem] w-full flex-col'}>
          <TextInput name={'name'} label={'Name'} Icon={FormIcons.Profile} />
          <TextInput name={'email'} label={'E - mail'} Icon={FormIcons.Email} type={'email'} />
          <TextInput name={'password'} label={'Password'} Icon={FormIcons.Password} type={'password'} />
          <div className={'flex flex-row items-center justify-between'}>
            <Typography.FootNote className={'text-app-purple'}>Are you an organization</Typography.FootNote>
            <SwitchInput name={'isOrganization'} />
          </div>
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
