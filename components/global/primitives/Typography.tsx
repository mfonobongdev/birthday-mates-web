import React from 'react'

type TypographyProps = JSX.IntrinsicElements['h1'] & JSX.IntrinsicElements['h2'] & JSX.IntrinsicElements['p']

export const Typography = (): JSX.Element | null => {
  return null
}

const Custom = ({ children, className }: TypographyProps): JSX.Element => {
  return <h1 className={`${className}`}>{children}</h1>
}

const Logo = ({ children, className }: TypographyProps): JSX.Element => {
  return <h2 className={`font-main text-Logo font-semibold ${className}`}>{children}</h2>
}

const LargeTitle = ({ children, className }: TypographyProps): JSX.Element => {
  return <h2 className={`font-main text-LargeTitle font-semibold ${className}`}>{children}</h2>
}

const TitleOne = ({ children, className }: TypographyProps): JSX.Element => {
  return <h2 className={`font-main text-TitleOne font-semibold ${className}`}>{children}</h2>
}

const Subhead = ({ children, className }: TypographyProps): JSX.Element => {
  return <h3 className={`font-main text-Subhead font-medium ${className}`}>{children}</h3>
}

const FootNote = ({ children, className }: TypographyProps): JSX.Element => {
  return <h2 className={`font-main font-semibold ${className} text-FootNote`}>{children}</h2>
}

const Caption = ({ children, className }: TypographyProps): JSX.Element => {
  return <p className={`font-main text-Caption font-medium ${className}`}>{children}</p>
}

const Button = ({ children, className }: TypographyProps): JSX.Element => {
  return <h2 className={`font-main text-Button font-bold uppercase ${className}`}>{children}</h2>
}

const Input = ({ children, className }: TypographyProps): JSX.Element => {
  return <h2 className={`font-main text-Input font-normal opacity-60 ${className}`}>{children}</h2>
}

const Body = ({ children, className }: TypographyProps): JSX.Element => {
  return <p className={`font-main text-Body font-normal opacity-80 ${className}`}>{children}</p>
}

Typography.Custom = Custom
Typography.Logo = Logo
Typography.LargeTitle = LargeTitle
Typography.Logo = LargeTitle
Typography.TitleOne = TitleOne
Typography.Subhead = Subhead
Typography.FootNote = FootNote
Typography.Caption = Caption
Typography.Button = Button
Typography.Input = Input
Typography.Body = Body
