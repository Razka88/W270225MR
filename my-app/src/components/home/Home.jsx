import Counter from "../counter/Counter";
import Square from "../square/Square";

export default function Home() {
  return (
    <div>
        <h1>ברוכים הבאים ל-React!</h1>

        <Counter />

        <Square bg="yellow" height={250} width={600} content="טקסט לניסיון" />
        <br />
        <Square bg="red" height={400} width={700} content="טקסט לכישלון" />
        <br />
        <Square bg="purple" height={200} width={60} content="טקסט חדש" />
    </div>
  )
}
