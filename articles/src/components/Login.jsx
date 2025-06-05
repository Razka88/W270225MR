import { useState } from "react"

export default function Login() {
    const [form, setForm] = useState({
        userName: '',
        password: '',
    });

    const login = ev => {
        ev.preventDefault();

        console.log(form);
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
