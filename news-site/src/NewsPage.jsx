import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

export default function NewsPage() {
    const [article, setArticle] = useState();
    const { id } = useParams();

    const getArticle = async () => {
        const res = await fetch(`https://api.shipap.co.il/articles/${id}?token=62e49732-824e-11ee-beec-14dda9d4a5f0`);
        const data = await res.json();
        setArticle(data);
    }

    useEffect(() => {
        getArticle();
    }, [id]);

    return (
        <div>
            {
                article &&
                <Card sx={{ display: 'flex', flexDirection: 'column', maxWidth: 800, margin: 'auto' }}>
                    <CardMedia
                        component="img"
                        height="600"
                        image={article.imgUrl}
                        alt={article.headline}
                    />

                    <CardContent>
                        <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
                            {article.headline}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                            {article.description}
                        </Typography>
                    </CardContent>
                </Card>
            }
        </div>
    )
}
