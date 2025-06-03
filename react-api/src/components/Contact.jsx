import { useEffect } from "react";
import { useState } from "react";

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

            {contacts.map(x => <p style={{ color: 'white' }}>{x.fullName}</p>)}
        </>
    )
}
