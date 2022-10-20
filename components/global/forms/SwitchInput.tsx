import { Controller, useFormContext } from 'react-hook-form'
import * as Switch from '@radix-ui/react-switch'
import cx from 'clsx'
import React from 'react'

type SwitchInputProps = {
  name: string
} & JSX.IntrinsicElements['input']

export const SwitchInput = ({ name }: SwitchInputProps): JSX.Element => {
  const [checked, setChecked] = React.useState<boolean>(false)
  const { control } = useFormContext()

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Switch.Root
          {...field}
          className={cx('relative flex w-[50px] rounded-full p-1 transition-all duration-500', {
            'justify-end bg-app-purple': checked,
            'justify-start bg-gray-200': !checked
          })}
          checked={checked}
          onCheckedChange={(checked: boolean) => {
            setChecked(checked)
            field.onChange(checked)
          }}>
          <Switch.Thumb
            className={cx('block h-[18px] w-[18px] rounded-full bg-white transition-transform duration-200 will-change-transform')}
          />
        </Switch.Root>
      )}
    />
  )
}
