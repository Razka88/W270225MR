import { useState } from 'react';
import './Users.css'
import { users } from '../data';

export default function UserTable() {
  const [data, setData] = useState(users);

  const remove = id => {
    setData(data.filter(u => u.id != id));
  }

  return (
    <div>
      {/* <ul>
        {data.map(u => <li>{u.firstName} {u.lastName}</li>)}
      </ul> */}
      
      <div className='users-table'>
        <table>
          <thead>
            <tr>
              <th>מזהה</th>
              <th>שם פרטי</th>
              <th>שם משפחה</th>
              <th>אימייל</th>
              <th>טלפון</th>
              <th></th>
            </tr>
          </thead>
          
          <tbody>
            {data.map(u => 
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.firstName}</td>
                <td>{u.lastName}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td><button className='remove' onClick={() => remove(u.id)}>❌</button></td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}
