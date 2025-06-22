import { useEffect, useState } from "react";

export default function Users() {
    const [users, setUsers] = useState([]);
    const [isModal, setIsModal] = useState(false);

    const getUsers = async () => {
        const res = await fetch("http://localhost:3000/users");

        if (res.ok) {
            const data = await res.json();
            data.reverse();
            setUsers(data);
        } else {
            console.log(res.status);
        }
    }

    useEffect(() => {
        getUsers();
    }, []);

    const addUser = async ev => {
        ev.preventDefault();
        const { firstName, lastName } = ev.target.elements;

        const res = await fetch(`http://localhost:3000/users`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify({
                firstName: firstName.value,
                lastName: lastName.value,
            }),
        });

        if (res.ok) {
            const item = await res.json();
            setUsers([item, ...users]);
            setIsModal(false);

            firstName.value = "";
            lastName.value = "";
        }
    }

    const remove = async id => {
        if (!confirm("האם למחוק את היוזר?")) {
            return;
        }

        const res = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
        });

        if (res.ok) {
            setUsers(users.filter(x => x._id != id));
        }
    }

    return (
        <div>
            <br />
            {!isModal && <button className="add" onClick={() => setIsModal(true)}>משתמש חדש</button>}

            <h1>משתמשים</h1>
            {
                isModal &&
                <div className="modal">
                    <button className="close" onClick={() => setIsModal(false)}>X</button>

                    <form onSubmit={addUser}>
                        <label>
                            שם פרטי
                            <input type="text" id="firstName" />
                        </label>
                        <label>
                            שם משפחה
                            <input type="text" id="lastName" />
                        </label>
                        <button>הוסף</button>
                    </form>
                </div>
            }

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>שם פרטי</th>
                        <th>שם משפחה</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) =>
                            <tr key={u._id}>
                                <td>{i + 1}</td>
                                <td>{u.firstName}</td>
                                <td>{u.lastName}</td>
                                <td><button className="red" onClick={() => remove(u._id)}>x</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
