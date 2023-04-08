import { lazy } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthnticated } from './Component/util/api';

const Todo = lazy(() => import('./Component/Todo'))
const Sign = lazy(() => import('./Component/Sign'))



const path = (path, authnticated) => {
  return (
    authnticated
      ? path === '/todo' ? <Todo /> : <Navigate to="/todo" />
      : path === '/todo' ? <Navigate to="/signin" /> : <Sign />
  )
}

function App() {
  const authnticated = useAuthnticated();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={path('/', authnticated)} />
          <Route path="/todo" element={path('/todo', authnticated)} />
          <Route path="/signin" element={path('/signin', authnticated)} />
          <Route path="/signup" element={path('/signup', authnticated)} />

          {/* 테스트 코드 */}
          <Route path="*" element={<Todo />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
