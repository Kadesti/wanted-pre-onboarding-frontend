import { Suspense, lazy, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Todo = lazy(() => import('./Component/Page/Todo'))
const SignUp = lazy(() => import('./Component/Page/SignUp'))
const SignIn = lazy(() => import('./Component/Page/SignIn'))

function App() {
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('access_token');

  return (
    <div className="App">
      <Router>
        <Suspense>
          <Routes>
            <Route path='/signup'
              element={token ? <Navigate to="/todo" /> : <SignUp />} />
            <Route path='/signin'
              element={token ? <Navigate to="/todo" /> : <SignIn setIsLogin={setIsLogin} />} />
            <Route path='/todo'
              element={token ? <Todo /> : <Navigate to="/signin" />} />

            <Route path='*'
              element={token ? <Navigate to="/todo" /> : <Navigate to="/signin" />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
