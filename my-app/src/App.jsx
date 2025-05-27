import './App.css'
import Counter from './components/counter/Counter'
import UserCards from './components/users/user-cards/UserCards'

export default function App() {
  return (
    <div>
      <h1>ברוכים הבאים ל-React!</h1>
      <Counter />
      {/* <Users /> */}
      <UserCards />
    </div>
  )
}
