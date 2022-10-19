import { useUser } from '../lib/hooks'

const Profile = () => {
  const user = useUser({ redirectTo: '/login' })

  return (
    <div className="profile">
      <h1>Profile</h1>
      {user && (
        <>
          <p>Your session:</p>
          <pre>{JSON.stringify(user, null, 2)}</pre>
        </>
      )}
    </div>
  )
}

export default Profile