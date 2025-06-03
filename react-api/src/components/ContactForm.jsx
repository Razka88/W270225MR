export default function ContactForm() {
    return (
        <>
            <h1>ContactForm</h1>

            <form>
                <label>
                    שם הפונה:
                    <input type="text" id="fullName" />
                </label>

                <label>
                    טלפון:
                    <input type="tel" id="phone" />
                </label>

                <label>
                    אימייל:
                    <input type="email" id="email" />
                </label>

                <label>
                    תוכן הפנייה:
                    <textarea name="" id="message" cols="30" rows="5"></textarea>
                </label>

                <button>שלח</button>
            </form>
        </>
    )
}
