import { useFormContext } from 'react-hook-form'
import { Typography } from '@components/global/primitives/Typography'
import cx from 'clsx'
import React from 'react'

type TextInputProps = {
  name: string
  label: string
  Icon?: ({ className }: JSX.IntrinsicElements['svg']) => JSX.Element
} & JSX.IntrinsicElements['input']

export const TextInput = ({ name, label, required, Icon, type = 'text' }: TextInputProps): JSX.Element => {
  const { register, formState } = useFormContext()
  return (
    <div>
      <div
        className={cx(
          'flex w-full items-center justify-start space-x-3 rounded-[25.5692px] bg-black/[0.05] py-2 px-5 focus-within:ring-1',
          {
            'ring-app-red': formState.errors[`${name}`],
            'ring-app-purple': !formState.errors[`${name}`]
          }
        )}>
        {/*icon*/}
        {Icon && (
          <Icon
            className={cx({
              'text-app-red': formState.errors[`${name}`],
              'text-app-purple': !formState.errors[`${name}`]
            })}
          />
        )}

        {/*input*/}
        <input
          className={
            'w-full bg-transparent text-[11px] placeholder:font-main placeholder:text-[11px] placeholder:font-light placeholder:text-black/60 focus:outline-none'
          }
          placeholder={label}
          required={required}
          type={type}
          {...register(name)}
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
  )
}
