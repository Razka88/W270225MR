import { useContext, useState } from "react"
import { Link, useNavigate } from "react-router";
import { MyContext } from "../App";

export default function Signup() {
    const navigate = useNavigate();
    const { snackbar, setIsLoader } = useContext(MyContext);

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

    const send = async ev => {
        ev.preventDefault();
        setIsLoader(true);

        const res = await fetch(`https://api.shipap.co.il/signup`, {
            credentials: 'include',
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(form),
        });

        if (res.ok) {
            snackbar("המשתמש נוצר בהצלחה");
            navigate('/');
        } else {
            const err = await res.text();
            snackbar(err);
        }

        setIsLoader(false);
    }


    return (
        <>
            <h1>יצירת משתמש</h1>

            <form onSubmit={send}>
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