export const Logger = (name: string, message: any) => {
  if (process.env.NODE_ENV === 'development') {
    return console.log(name, message)
  }
}
