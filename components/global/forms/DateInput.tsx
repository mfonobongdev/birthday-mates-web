/** @jsxImportSource @emotion/react */
import { Controller, useFormContext } from 'react-hook-form'
import cx from 'clsx'
import React from 'react'
import 'react-date-picker/dist/DatePicker.css'
import 'react-calendar/dist/Calendar.css'
import DatePicker from 'react-date-picker/dist/entry.nostyle'
import { Typography } from '@components/global/primitives/Typography'
import { FormIcons } from '@components/global/icons/FormIcons'
import { css } from '@emotion/react'

type DateInputProps = {
  name: string
} & JSX.IntrinsicElements['input']

//css
const dateInputStyles = css({
  backgroundColor: 'transparent',
  fontSize: 11,
  width: '100%',
  'div.react-date-picker__wrapper': {
    border: 0,
    'div.react-date-picker__inputGroup': {
      'input.react-date-picker__inputGroup__day': { '&:focus': { outline: 'none' } },
      'input.react-date-picker__inputGroup__month': { '&:focus': { outline: 'none' } },
      'input.react-date-picker__inputGroup__year': { '&:focus': { outline: 'none' } }
    }
  }
})

export const DateInput = ({ name }: DateInputProps): JSX.Element => {
  const [value, onChange] = React.useState(new Date())
  const { control, formState } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
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
            <FormIcons.Calender
              className={cx({
                'text-app-red': formState.errors[`${name}`],
                'text-app-purple': !formState.errors[`${name}`]
              })}
            />

            <DatePicker
              css={dateInputStyles}
              format={'dd/MM/y'}
              onChange={(val: Date) => {
                onChange(val)

                if (val) {
                  field.onChange(val.toISOString())
                }
              }}
              value={value}
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
