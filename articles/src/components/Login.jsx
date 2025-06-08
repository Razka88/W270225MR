import { useContext, useState } from "react"
import { MyContext } from "../App";

export default function Login() {
    const [form, setForm] = useState({
        userName: '',
        password: '',
    });

    const { snackbar, setIsLoader, setUser } = useContext(MyContext);

    const login = async ev => {
        ev.preventDefault();
        setIsLoader(true);

        const res = await fetch(`https://api.shipap.co.il/login`, {
            credentials: 'include',
            method: 'POST',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify(form),
        });

        if (res.ok) {
            const user = await res.json();
            snackbar(`${user.fullName} התחבר בהצלחה`);
            setUser(user);
        } else {
            const err = await res.text();
            snackbar(err);
        }

        setIsLoader(false);
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
