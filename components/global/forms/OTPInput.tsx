/** @jsxImportSource @emotion/react */
import { Controller, FieldValues, FormState, useFormContext } from 'react-hook-form'
import cx from 'clsx'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import { Typography } from '@components/global/primitives/Typography'
import { css } from '@emotion/react'
import OtpInput from 'react-otp-input'

type DateInputProps = {
  name: string
} & JSX.IntrinsicElements['input']

//css
const otpInputStyles = css({
  backgroundColor: 'transparent',
  fontSize: 18,
  justifyItems: 'stretch',
  input: { borderRadius: 8, backgroundColor: '#EFEEF1', fontSize: 20, padding: 10, flexGrow: 1 }
})

export const OTPInput = ({ name }: DateInputProps): JSX.Element => {
  const { control, formState } = useFormContext()
  const [Otp, setOtp] = React.useState('')

  //functions
  const useResetInputAfterSubmitting = (formState: FormState<FieldValues>) => {
    React.useEffect(() => {
      if (formState.isSubmitSuccessful) {
        setOtp('')
      }
    }, [formState.isSubmitSuccessful])
  }

  //logic/calls
  useResetInputAfterSubmitting(formState)

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <div>
          <div className={'grid place-items-center'} css={{ div: { width: '100%', marginLeft: 4, marginRight: 4 } }}>
            <OtpInput
              {...field}
              css={otpInputStyles}
              value={Otp}
              onChange={(val: string) => {
                setOtp(val)
                field.onChange(val)
              }}
              numInputs={6}
              isInputNum
              shouldAutoFocus
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
    />
  )
}
