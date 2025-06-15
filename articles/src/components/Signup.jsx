import { useState } from "react"
import { Link } from "react-router";

export default function Signup() {
    const [form, setForm] = useState({
        fullName: '',
        email: '',
        userName: '',
        password: '',
    });




    return (
        <>
            <h1>יצירת משתמש</h1>

            <form>
                <label>
                    <i className="fa fa-user"></i> שם מלא:
                    <input type="text" id="fullName" value={form.fullName} />
                </label>

                <label>
                    <i className="fa fa-envelope"></i> אימייל:
                    <input type="text" id="email" value={form.email} />
                </label>

                <label>
                <i className="fa fa-address-card"></i> שם משתמש:
                    <input type="text" id="userName" value={form.userName} />
                </label>

                <label>
                    <i className="fa fa-asterisk"></i> סיסמה:
                    <input type="password" id="password" value={form.password} />
                </label>
                <button>הרשם</button>
            </form>
            
            <Link to="/">להתחברות לחץ כאן</Link>
        </>
    )
}