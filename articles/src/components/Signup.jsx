import { useState } from "react"
import { Link } from "react-router";

export default function Signup() {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        userName: '',
        password: '',
    });

    const change = ev => {
        // const id = ev.target.id;
        // const value = ev.target.value;
        const { id, value } = ev.target;

        setForm({
            ...form,
            [id]: value,
        });
    }


    return (
        <>
            <h1>יצירת משתמש</h1>

            <form>
                <label>
                    <i className="fa fa-user"></i> שם מלא:
                    <input type="text" id="fullName" value={form.fullName} onChange={change} />
                </label>

                <label>
                    <i className="fa fa-envelope"></i> אימייל:
                    <input type="text" id="email" value={form.email} onChange={change} />
                </label>

                <label>
                <i className="fa fa-address-card"></i> שם משתמש:
                    <input type="text" id="userName" value={form.userName} onChange={change} />
                </label>

                <label>
                    <i className="fa fa-asterisk"></i> סיסמה:
                    <input type="password" id="password" value={form.password} onChange={change} />
                </label>
                <button>הרשם</button>
            </form>
            
            <Link to="/">להתחברות לחץ כאן</Link>
        </>
    )
}