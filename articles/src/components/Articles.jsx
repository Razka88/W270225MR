import { useEffect, useState } from "react";
import moment from 'moment';
import { Link } from "react-router";

export default function Articles() {
    const [articles, setArticles] = useState([]);

    const getData = async () => {
        const res = await fetch(`https://api.shipap.co.il/articles`, {
            credentials: 'include',
        });

        if (res.ok) {
            const data = await res.json();
            setArticles(data);
        }
    }
    
    useEffect(() => {
        getData();
    }, []);

    // לאפשר למחוק כתבות
    // להציג גם ככרטיסים

    return (
        <div className="Articles">
            <Link to="/add">
                <button className="add"><i className="fa fa-plus"></i> כתבה חדשה</button>
            </Link>

            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>כותרת</th>
                        <th>תאריך יצירה</th>
                        <th>תאריך פרסום</th>
                        <th>צפיות</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        articles.map((art, i) => 
                            <tr key={art.id}>
                                <td>{i + 1}</td>
                                <td>{art.headline}</td>
                                <td>{moment(art.addedTime).format("DD/MM/YY")}</td>
                                <td>{moment(art.publishDate).format("DD/MM/YY")}</td>
                                <td>{art.views}</td>
                                <td>
                                    <button className="green"><i className="fa fa-edit"></i></button>
                                    <button className="red"><i className="fa fa-trash"></i></button>
                                </td>
                            </tr>    
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}
