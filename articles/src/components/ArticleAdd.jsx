export default function ArticleAdd() {
    return (
        <>
            <h1>כתבה חדשה</h1>

            <form>
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
            </form>
        </>
    )
}
