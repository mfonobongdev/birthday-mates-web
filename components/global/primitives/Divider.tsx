import { Typography } from '@components/global/primitives/Typography'
import React from 'react'

type DividerProps = { children: React.ReactNode }

export const Divider = (): JSX.Element | null => {
  return null
}

const Text = ({ children }: DividerProps): JSX.Element => {
  return (
    <div className={'flex w-full flex-row items-baseline space-x-2'}>
      <div className={'h-0.5 grow bg-gradient-to-l from-[#C4C4C4] to-[#C4C4C4]/0'} />
      <div>
        <Typography.FootNote>{children}</Typography.FootNote>
      </div>
      <div className={'h-0.5 grow bg-gradient-to-r from-[#C4C4C4] to-[#C4C4C4]/0'} />
    </div>
  )
}

Divider.Text = Text
