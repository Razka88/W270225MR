import { useState } from "react"

export default function Login() {
    const [form, setForm] = useState({
        userName: '',
        password: '',
    });

    const login = async ev => {
        ev.preventDefault();

        const res = await fetch(`https://api.shipap.co.il/login`, {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(form),
        });

        if (res.ok) {
            const user = await res.json();

            console.log(user);
        } else {
            const err = await res.text();

            console.log(err);
        }

        // לשלוח את ההתחברות לשרת ✔️
        // לנקות את הטופס
        // לעדכן את הלקוח שהנתונים נשלחו בהצלחה
        // להציג את ה-Loader
        // לאחר שהלקוח התחבר, לכתוב את השם שלו בצירוף הודעת ברכה
    }

    return (
        <>
            <form>
                <label>
                    שם משתמש:
                    <input type="text" value={form.userName} onChange={ev => setForm({ ...form, userName: ev.target.value })} />
                </label>

                <label>
                    סיסמה:
                    <input type="password" value={form.password} onChange={ev => setForm({ ...form, password: ev.target.value })} />
                </label>

                <button onClick={login}>התחבר</button>
            </form>
        </>
    )
}
