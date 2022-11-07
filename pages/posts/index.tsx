import { NextPage } from 'next'
import { AuthCheck } from '@components/global/AuthCheck'
import { AuthenticationStore } from '@state/AuthState'
import { useRouter } from 'next/router'

const Posts: NextPage = () => {
  const router = useRouter()

  //state
  const [removeLiu, removeAuthToken, updateIsLoggedIn] = AuthenticationStore((state) => [
    state.removeLiu,
    state.removeAuthToken,
    state.updateIsLoggedIn
  ])

  const handleLogOut = async () => {
    removeLiu()
    removeAuthToken()
    updateIsLoggedIn(false)

    await router.push('/login')
  }
  return (
    <AuthCheck>
      <div>
        <div>Posts</div>
        <button onClick={handleLogOut}>log out</button>
      </div>
    </AuthCheck>
  )
}

export default Posts
