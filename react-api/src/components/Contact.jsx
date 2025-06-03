import moment from 'moment';
import { useEffect, useState } from 'react';

export default function Contact() {
    const [contacts, setContacts] = useState([]);

    const getContacts = async () => {
        const res = await fetch("https://api.shipap.co.il/contact");
        const data = await res.json();

        setContacts(data);
    }

    useEffect(() => {
        getContacts();
    }, []);

    return (
        <>
            <h1>Contact</h1>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>תאריך</th>
                        <th>שם הפונה</th>
                        <th>טלפון</th>
                        <th>אימייל</th>
                        <th>תוכן</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map((item, i) =>
                            <tr key={item.id}>
                                <td>{i + 1}</td>
                                <td>{moment(item.createTime).format("DD/MM/YYYY")}</td>
                                <td>{item.fullName}</td>
                                <td>{item.phone}</td>
                                <td>{item.email}</td>
                                <td>{item.message}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </>
    )
}
