import { useState } from "react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });

    const dataChange = ev => {
        console.log(ev);
        const { id, value } = ev.target;

        setFormData({
            ...formData,
            [id]: value,
        });
    }

    const sendForm = async ev => {
        ev.preventDefault();

        const res = await fetch("https://api.shipap.co.il/contact", {
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(formData),
        });

        const data = await res.json();

        // לנקות את הטופס
        // להוסיף את הנתונים החדשים למערך הקיים
        // לעדכן את הלקוח שהנתונים נשלחו בהצלחה
        // בונוס: להסתיר את הטופס
        // בונוס: להציג חיווי בעת השליחה / קבלת הנתונים
    }

    return (
        <>
            <h1>ContactForm</h1>

            <form onSubmit={sendForm}>
                <label>
                    שם הפונה:
                    <input type="text" id="fullName" onChange={dataChange} />
                </label>

                <label>
                    טלפון:
                    <input type="tel" id="phone" value={formData.phone} onChange={dataChange} />
                </label>

                <label>
                    אימייל:
                    <input type="email" id="email" value={formData.email} onChange={dataChange} />
                </label>

                <label>
                    תוכן הפנייה:
                    <textarea name="" id="message" cols="30" rows="5" value={formData.message} onChange={dataChange}></textarea>
                </label>

                <button>שלח</button>
            </form>
        </>
    )
}
