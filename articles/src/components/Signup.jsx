import { useState } from "react"

export default function Signup() {
    const [form, setForm] = useState({
        userName: '',
        password: '',
        email: '',
        fullName: '',
    });




    return (
        <>
            <h1>יצירת משתמש</h1>

            <form>
                <label>
                    שם מלא:
                    <input type="text" id="fullName" value={form.fullName} />
                </label>

            </form>
            
        </>
    )
}