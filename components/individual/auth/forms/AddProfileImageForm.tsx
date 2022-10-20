import { z } from 'zod'
import React from 'react'
import { CardWrapper } from '@components/global/layouts/CardWrapper'
import { Typography } from '@components/global/primitives/Typography'
import { Buttons } from '@components/global/primitives/Buttons'
import Link from 'next/link'
import { FormMaster } from '@components/global/forms/FormMaster'
import { ImageInput } from '@components/global/forms/ImageInput'

const ACCEPTED_IMAGE_TYPES = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp']

export const AddProfileImageForm = (): JSX.Element => {
  //state

  //functions
  const ProfileImageFormValidationSchema = z.object({
    image: z
      .any()
      .refine((files) => files?.length == 1, 'Image is required.')
      .refine((files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.file?.type), '.jpg, .jpeg, .png and .webp files are accepted.')
  })

  const onSubmit = (data: z.infer<typeof ProfileImageFormValidationSchema>) => {
    console.log('form submitted:', data)
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
