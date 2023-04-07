import { lazy, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Todo = lazy(() => import('./Component/Todo'))
const Sign = lazy(() => import('./Component/Sign'))


function App() {
  const [isLogin, setIsLogin] = useState(false);

  const signin = 'signin';
  const signup = 'signup';

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/todo" element={<Todo />} />
          <Route path={`/${signin}`} element={<Sign path={signin} />} />
          <Route path={`/${signup}`} element={<Sign path={signup} />} />

          {/* 테스트 코드 */}
          <Route path="*" element={<Todo />} />
        </Routes>
      </Router>

    </div>
  );
}

export default App;
