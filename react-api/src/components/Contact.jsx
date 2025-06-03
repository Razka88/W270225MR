import { useEffect } from "react";
import { useState } from "react";

export default function Contact() {
    const [contacts, setContacts] = useState([]);
    
    // useEffect(() => {
    //     fetch(`https://api.shipap.co.il/contact`)
    //     .then(res => res.json())
    //     .then(data => {
    //         setContacts(data);
    //     });
    // }, []);

    const getTickets = async () => {
        const res = await fetch(`https://api.shipap.co.il/contact`);
        const data = await res.json();
        setContacts(data);
    };

    useEffect(() => {
        getTickets();
    }, []);

    return (
        <>
            <h1>Contact</h1>

            <ul>
                {contacts.map(x => <li style={{color: 'white'}}>{x.fullName}</li>)}
            </ul>
        </>
    )
}
