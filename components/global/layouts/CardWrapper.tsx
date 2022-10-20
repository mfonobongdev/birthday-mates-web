type CardWrapperProps = JSX.IntrinsicElements['div']

export const CardWrapper = ({ children, className }: CardWrapperProps): JSX.Element => {
  return (
    <div
      className={`grid place-items-center rounded-[34.0923px] border-[0.85px] border-solid border-white bg-white/20 p-12 backdrop-blur-[51.1385px] ${className}`}>
      {children}
    </div>
  )
}
