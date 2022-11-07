import toast, { Toast } from 'react-hot-toast'

export const AppToast = ({ t, message }: { t: Toast; message: string }): JSX.Element => {
  return (
    <span>
      {message}
      <button onClick={() => toast.dismiss(t.id)}>Dismiss</button>
    </span>
  )
}
