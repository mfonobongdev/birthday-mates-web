import { Controller, useFormContext } from 'react-hook-form'
import React from 'react'
import ImageUploading, { ImageListType } from 'react-images-uploading'
import Image from 'next/image'
import { FormIcons } from '@components/global/icons/FormIcons'
import cx from 'clsx'
import { Typography } from '@components/global/primitives/Typography'

type ImageInputProps = {
  name: string
  maxNumberOfImages?: number
} & JSX.IntrinsicElements['input']

export const ImageInput = ({ name, maxNumberOfImages = 1 }: ImageInputProps): JSX.Element => {
  const [images, setImages] = React.useState([])
  const maxNumber = maxNumberOfImages
  const { control, formState } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <ImageUploading
            value={images}
            onChange={(imageList: ImageListType, addUpdateIndex: number[] | undefined) => {
              // data for submit
              console.log(imageList, addUpdateIndex)
              setImages(imageList as never[])

              field.onChange(imageList)
            }}
            maxNumber={maxNumber}>
            {({ imageList, onImageUpload, onImageUpdate, isDragging, dragProps }) => (
              // write your building UI
              <div className={'grid place-items-center'}>
                <div className='relative h-[120px] w-[120px] rounded-full bg-[#c4c4c4]'>
                  <button
                    type={'button'}
                    className={'absolute right-0 bottom-0 z-20 rounded-full bg-black p-1'}
                    style={isDragging ? { color: 'teal' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}>
                    <FormIcons.UploadImage />
                  </button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div className={'absolute inset-0'} key={index}>
                      <div className={'relative h-full w-full rounded-full'}>
                        {image.dataURL && (
                          <Image
                            src={image.dataURL}
                            layout={'fill'}
                            className={'z-10 rounded-full border-2 border-gray-200 object-cover object-center shadow'}
                            alt={'profile'}
                          />
                        )}
                      </div>

                      <button
                        type={'button'}
                        className={'absolute right-0 bottom-0 z-30 rounded-full bg-black p-1'}
                        onClick={() => onImageUpdate(index)}>
                        <FormIcons.UploadImage />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ImageUploading>
          {/*form errors*/}
          <div
            className={cx('flex items-center justify-end pt-2 pb-1', {
              visible: formState.errors[`${name}`],
              invisible: !formState.errors[`${name}`]
            })}>
            <Typography.Caption className={'text-app-red'}>{`${formState.errors[`${name}`]?.message}`}</Typography.Caption>
          </div>
        </div>
      )}
    />
  )
}
