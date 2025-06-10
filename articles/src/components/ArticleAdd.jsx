import { Link } from "react-router";

export default function ArticleAdd() {

    const add = async ev => {
        ev.preventDefault();


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
                    <input type="text" id="headline" />
                </label>

                <label>
                    תיאור:
                    <textarea id="description" cols="30" rows="5"></textarea>
                </label>

                <label>
                    תוכן:
                    <textarea id="content" cols="30" rows="10"></textarea>
                </label>

                <label>
                    תאריך פרסום:
                    <input type="date" id="publishDate" />
                </label>

                <label>
                    קישור לתמונה:
                    <input type="text" id="imgUrl" />
                </label>

                <button>שמור <i className="fa fa-save"></i></button>
            </form>
        </div>
    )
}
