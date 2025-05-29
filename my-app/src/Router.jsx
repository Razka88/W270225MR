import { Route, Routes } from 'react-router'
import Counter from './components/counter/Counter'
import UserTable from './components/users/user-table/UserTable'
import UserCards from './components/users/user-cards/UserCards'

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/users/table" element={<UserTable />} />
            <Route path="/users/cards" element={<UserCards />} />
        </Routes>
    )
}
