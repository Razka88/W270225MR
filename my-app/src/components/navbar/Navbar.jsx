import './Navbar.css'
import { Link, useLocation } from "react-router"

export default function Navbar() {
    const path = useLocation().pathname;

    const navbar = [
        { route: '/', title: 'בית' },
        { route: '/users/table', title: 'טבלת משתמשים' },
        { route: '/users/cards', title: 'כרטיסי משתמשים' },
    ];

    return (
        <nav>
            <ul>
                {navbar.map(x => 
                    <li key={x.route}>
                        <Link className={path == x.route && 'active'} to={x.route}>
                            {x.title}
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
    )
}
