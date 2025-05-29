import './Navbar.css'
import { Link, useLocation } from "react-router"

export default function Navbar() {
    const path = useLocation().pathname;

    const navbar = [
        { route: '/', title: 'בית' },
        { route: '/users/table', title: 'טבלת משתמשים' },
        { route: '/users/cards', title: 'כרטיסי משתמשים' },
        { route: '/tic-tac-toe', title: 'איקס עיגול' },
    ];

    return (
        <nav>
            <ul>
                {navbar.map(x => 
                    <li key={x.route}>
                        <Link to={x.route} className={path == x.route ? 'active' : ''}>
                            {x.title}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
