import { z } from 'zod'
import React from 'react'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { Buttons } from '@components/global/primitives/Buttons'
import Link from 'next/link'
import { FormMaster } from '@components/global/forms/FormMaster'
import { ImageInput } from '@components/global/forms/ImageInput'
import { defaultResponseProperties } from '@typed/global'
import { Logger } from '@utils/Logger'
import { useRouter } from 'next/router'
import { AuthenticationStore } from '@state/AuthState'
import RequestManager from '@utils/RequestManager'
import { reusableAsyncToast } from '@utils/ReusableAsyncToast'

const MAX_FILE_SIZE = 500000
const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const AddProfileImageForm = (): JSX.Element => {
  const router = useRouter()
  //state
  const [liu] = AuthenticationStore((state) => [state.liu])

  //functions
  const ProfileImageFormValidationSchema = z.object({
    image: z
      .any()
      .refine((files) => files?.length == 1, 'Image is required.')
      .refine((files) => files?.[0]?.file?.size <= MAX_FILE_SIZE, `Max file size is 5MB.`)
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.file?.type), '.jpg, .jpeg, .png and .webp files are accepted.')
  })

  const onSubmit = async (data: z.infer<typeof ProfileImageFormValidationSchema>) => {
    const formData = new FormData()

    // Update the formData object with image
    formData.append('photo', data.image[0].file, data.image[0].file.name)

    const addProfilePictureUrl = `/api/v1/users/${liu?.id || 0}/profile-picture`
    try {
      const request = RequestManager.makeRequest<defaultResponseProperties>(addProfilePictureUrl, 'patch', formData, {
        headerContentType: 'multipart/form-data'
      })

      //setup async toast
      await reusableAsyncToast(request)

      const response = await request

      if (response.code === 200) {
        await router.push('/login')
      }
    } catch (e) {
      Logger('error profile image form:', e)
    }
  }
  return (
    <FormMaster onSubmitHandler={onSubmit} validationSchema={ProfileImageFormValidationSchema} className={'items-center justify-center'}>
      <CardWrapper
        className={'grid w-[568px] grid-cols-1 grid-rows-[max-content_max-content_max-content] items-start gap-8 px-[140px] py-[40]'}>
        {/*header section*/}
        <div className={'flex w-full flex-col'}>
          <Typography.LargeTitle className={'text-center text-app-purple'}>Upload Profile Picture</Typography.LargeTitle>
        </div>

        {/*form inputs*/}
        <div className={'min-h-[15rem] w-full'}>
          <ImageInput name={'image'} />
        </div>

        {/*footer*/}
        <div className={'flex w-full flex-col space-y-3'}>
          <Buttons.PrimaryTextButton type={'submit'}>Continue</Buttons.PrimaryTextButton>

          <div className={'pt-3'}>
            <Link href='/'>
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
