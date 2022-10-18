import { Link } from 'react-router-dom';
import { useUser } from '../lib/hooks'

const Header = () => {
  const user = useUser()

  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          {user ? (
            <>
              <li>
                <Link to="/profile">
                  Profile
                </Link>
              </li>
              <li>
                <Link to="/api/logout">Logout</Link>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login">
                Login
              </Link>
            </li>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header