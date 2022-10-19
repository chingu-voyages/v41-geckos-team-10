import { Link } from 'react-router-dom';

const NavBar = ()=> {
 return (
    <div class="bg-lt-green">
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