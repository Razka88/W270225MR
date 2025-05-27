import { useState } from 'react';
import './UserCards.css';
import { users } from '../users/data';

export default function UserCards() {
    const [userCards, setUserCards] = useState(users);

    console.log(userCards)

    return (
        <div className='UserCards'>
            {userCards.map(x =>
                <div className='card'>
                    <header>{x.firstName} {x.lastName}</header>

                    
                </div>
            )}
        </div>
    )
}
