import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const res = await fetch("http://localhost:3000/users");

        if (res.ok) {
            const data = await res.json();
            setUsers(data);
        } else {
            console.log(res.status);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div>
            <h1>Users</h1>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>שם פרטי</th>
                        <th>שם משפחה</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) =>
                            <tr key={u._id}>
                                <td>{i + 1}</td>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
