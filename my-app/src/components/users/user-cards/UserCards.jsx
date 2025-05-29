import './UserCards.css';
import { users } from '../data';
import moment from 'moment'

function Card({ user }) {
    return (
        <div className='card'>
            <header>{user.firstName} {user.lastName}</header>

            <p>
                {user.phone}
                <a href={`tel:${user.phone}`}><i className='fa fa-phone'></i></a>
                <a href={`https://wa.me/${user.phone}`}><i className='fa fa-whatsapp'></i></a>
            </p>
            <p>
                {user.email}
                <a href={`mailto:${user.email}`}><i className='fa fa-envelope'></i></a>
            </p>
            <p><b>תאריך לידה:</b> {moment(user.birthday).format('DD/MM/YYYY')}</p>
        </div>
    )
}

export default function UserCards() {
    return (
        <div className='UserCards'>
            {users.map(x =>
                <Card user={x} key={x.id} />
            )}
        </div>
    )
}
