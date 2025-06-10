import { useState } from "react";
import { Link } from "react-router";

export default function ArticleAdd() {
    const [form, setForm] = useState({
        headline: '',
        description: '',
        content: '',
        imgUrl: '',
        publishDate: '',
    });

    const add = async ev => {
        ev.preventDefault();

        console.log(form);
    }

    const change = ev => {
        const { id, value } = ev.target;

        setForm({
            ...form,
            [id]: value,
        });
    }
    
    return (
        <div className="Articles">
            <br />
            <Link to="/">
                <button className="add"><i className="fa fa-angle-right"></i> לניהול כתבות</button>
            </Link>

            <h1>כתבה חדשה</h1>

            <form onSubmit={add}>
                <label>
                    כותרת:
                    <input type="text" id="headline" value={form.headline} onChange={change} />
                </label>

                <label>
                    תיאור:
                    <textarea id="description" value={form.description} onChange={change} cols="30" rows="5"></textarea>
                </label>

                <label>
                    תוכן:
                    <textarea id="content" value={form.content} onChange={change} cols="30" rows="10"></textarea>
                </label>

                <label>
                    תאריך פרסום:
                    <input type="date" id="publishDate" value={form.publishDate} onChange={change} />
                </label>

                <label>
                    קישור לתמונה:
                    <input type="text" id="imgUrl" value={form.imgUrl} onChange={change} />
                </label>

                <button>שמור <i className="fa fa-save"></i></button>
            </form>
        </div>
    )
}
