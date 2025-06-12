import { useEffect } from "react";
import { useState } from "react"

export default function News() {
    const [news, setNews] = useState([]);

    const getNews = async () => {
        const res = await fetch("https://api.shipap.co.il/articles?token=62e49732-824e-11ee-beec-14dda9d4a5f0");
        const data = await res.json();
        setNews(data);
    }

    useEffect(() => {
        getNews();
    }, []);

    return (
        <div className="news">
            {
                news.map(x => 
                    <div className="card">
                        <h2>{x.headline}</h2>
                    </div>
                )
            }
        </div>
    )
}

// id
// publishDate
// headline
// description
// imgUrl