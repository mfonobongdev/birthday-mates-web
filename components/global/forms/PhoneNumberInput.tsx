/** @jsxImportSource @emotion/react */
import { Controller, useFormContext } from 'react-hook-form'
import 'react-phone-number-input/style.css'
import cx from 'clsx'
import React from 'react'
import PhoneInput from 'react-phone-number-input'
import { E164Number } from 'libphonenumber-js'
import { Typography } from '@components/global/primitives/Typography'
import { css } from '@emotion/react'

type PhoneNumberInputProps = {
  name: string
  label: string
} & JSX.IntrinsicElements['input']

//css
const phoneInputStyles = css({
  backgroundColor: 'transparent',
  fontSize: 11,
  width: '100%',
  'input.PhoneInputInput': { backgroundColor: 'transparent', width: '100%', '&:focus': { outline: 'none' } }
})

export const PhoneNumberInput = ({ name, label }: PhoneNumberInputProps): JSX.Element => {
  const { control, formState } = useFormContext()
  const [value, setValue] = React.useState<E164Number | undefined>(undefined)

  return (
    <Controller
      name={name}
      render={({ field }) => (
        <div>
          <div
            className={cx(
              'flex w-full items-center justify-start space-x-3 rounded-[25.5692px] bg-black/[0.05] py-2 px-5 focus-within:ring-1',
              {
                'ring-app-red': formState.errors[`${name}`],
                'ring-app-purple': !formState.errors[`${name}`]
              }
            )}>
            <PhoneInput
              {...field}
              css={phoneInputStyles}
              placeholder={label}
              value={value}
              onChange={(val) => {
                field.onChange(val)
                setValue(val)
              }}
            />
          </div>

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
      control={control}
    />
  )
}
