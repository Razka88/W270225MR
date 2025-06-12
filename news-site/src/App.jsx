import { Route, Routes } from 'react-router';
import News from './News';
import NewsPage from './NewsPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/:id" element={<NewsPage />} />
      </Routes>
    </div>
  )
}
