import { useForm, FormProvider, UseFormReturn } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z, ZodEffects, ZodObject } from 'zod'
import React from 'react'

type FormMasterProps = {
  defaultValues?: Record<any, any>
  children: React.ReactNode
  onSubmitHandler: (data: any) => void
  validationSchema: ZodObject<any> | ZodEffects<any>
} & JSX.IntrinsicElements['form']

export const FormMaster = ({ defaultValues, children, onSubmitHandler, validationSchema, className }: FormMasterProps): JSX.Element => {
  type formInputs = z.infer<typeof validationSchema>

  //state
  const methods = useForm<formInputs>({ defaultValues: defaultValues, resolver: zodResolver(validationSchema) })

  //functions
  const useResetFormAfterSubmitting = (methods: UseFormReturn) => {
    React.useEffect(() => {
      if (methods.formState.isSubmitSuccessful) {
        if (defaultValues) {
          methods.reset({ ...defaultValues })
        }
        methods.reset()
      }
    }, [methods, methods.formState.isSubmitSuccessful])
  }

  //logic/calls
  useResetFormAfterSubmitting(methods)

  return (
    <FormProvider {...methods}>
      <form className={`relative flex h-full w-full flex-col ${className}`} onSubmit={methods.handleSubmit(onSubmitHandler)} noValidate>
        {children}
      </form>
    </FormProvider>
  )
}
