import { Route, Routes } from 'react-router'
import UserTable from './components/users/user-table/UserTable'
import UserCards from './components/users/user-cards/UserCards'
import ErrorPage from './components/error-page/ErrorPage'
import Home from './components/home/Home'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users/table" element={<UserTable />} />
            <Route path="/users/cards" element={<UserCards />} />
            <Route path="*" element={<ErrorPage />} />
        </Routes>
    )
}
