import { useState } from "react"

export default function ContactForm() {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
    });

    const dataChange = ev => {
        const { id, value } = ev.target;

        setFormData({
            ...formData,
            [id]: value,
        });
    }

    return (
        <>
            <h1>ContactForm</h1>

            <form>
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
