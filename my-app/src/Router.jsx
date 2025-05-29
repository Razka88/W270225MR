import { Route, Routes } from 'react-router'
import UserTable from './components/users/user-table/UserTable'
import UserCards from './components/users/user-cards/UserCards'
import ErrorPage from './components/error-page/ErrorPage'
import Home from './components/home/Home'
import TicTacToe from './components/tic-tac-toe/TicTacToe'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/table" element={<UserTable />} />
            <Route path="/users/cards" element={<UserCards />} />
            <Route path="/tic-tac-toe" element={<TicTacToe />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
