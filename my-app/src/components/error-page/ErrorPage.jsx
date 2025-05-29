import './ErrorPage.css'

export default function ErrorPage() {
    return (
        <div className="notfound-body">
            <div className="error-container">
                <div className="emoji">🛸</div>
                <h1>404</h1>
                <p>אופס! הדף הזה נחטף על ידי חייזרים 🤯</p>
                <p>
                    אבל היי, תמיד אפשר לחזור <a href="/">הביתה</a>!
                </p>
            </div>
        </div>
    )
}
