import { useState } from 'react';
import './UserCards.css';
import { users } from '../data';
import moment from 'moment'

export default function UserCards() {
    const [userCards, setUserCards] = useState(users);

    return (
        <div className='UserCards'>
            {userCards.map(x =>
                <div className='card'>
                    <header>{x.firstName} {x.lastName}</header>

                    <p>
                        {x.phone}
                        <a href={`tel:${x.phone}`}><i className='fa fa-phone'></i></a>
                        <a href={`https://wa.me/${x.phone}`}><i className='fa fa-whatsapp'></i></a>
                    </p>
                    <p>
                        {x.email}
                        <a href={`mailto:${x.email}`}><i className='fa fa-envelope'></i></a>
                    </p>
                    <p><b>תאריך לידה:</b> {moment(x.birthday).format('DD/MM/YYYY')}</p>
                </div>
            )}
        </div>
    )
}
