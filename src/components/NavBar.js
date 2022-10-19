import { Link } from 'react-router-dom';

const NavBar = ()=> {
 return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to='/Dashboard'>Dashboard</Link>
                </li>
            </ul>
        </nav>
    </div>
 )   
};

export { NavBar };