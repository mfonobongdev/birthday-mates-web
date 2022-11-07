import toast from 'react-hot-toast'
import { AxiosError } from 'axios'

export const reusableAsyncToast = async (request: Promise<unknown>, loadingMessage?: string, successMessage?: string) => {
  await toast.promise(request, {
    loading: loadingMessage ? <b>{loadingMessage}</b> : <b>Saving...</b>,
    success: successMessage ? <b>{successMessage}</b> : <b>Saved!</b>,
    error: (e) => {
      if (e instanceof AxiosError) {
        return <b>{e.response?.data['message']}</b>
      }
      return <b>Something went wrong!</b>
    }
  })
}
