import { useState } from 'react'
import './Users.css'
import UserTable from './user-table/UserTable';
import UserCards from './user-cards/UserCards';

export default function Users() {
    const [active, setActive] = useState('');

    return (
        <div>
            <button onClick={() => setActive('table')}>טבלה</button>
            <button onClick={() => setActive('cards')}>כרטיסים</button>

            {active == 'table' ? <UserTable /> : ''}
            {active == 'cards' ? <UserCards /> : ''}
        </div>
    )
}
