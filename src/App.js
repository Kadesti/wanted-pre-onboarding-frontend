import { lazy, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

const Todo = lazy(() => import('./Component/Page/Todo'))
const Sign = lazy(() => import('./Component/Page/Sign'))

const path = (path, authnticated) => {
  // if (path === '/todo') console.log('가긴갔다1');
  console.log('path: ', path);
  // if (path === '/') return <Navigate to="/signin" />;

  // console.log('authnticated: ', authnticated);
  // console.log('authnticated !== null: ', authnticated !== null);
  // console.log("path === '/todo': ", path === '/todo');

  return (
    authnticated !== null && authnticated !== 'undefined'
      ? path === '/todo' ? <Todo /> : <Navigate to="/todo" />
      : path === '/todo' ? <Navigate to="/signin" /> : <Sign />
  )
}

// const selectRoute = (authnticated) => {

//   if (authnticated !== null && authnticated !== 'undefined') {
//     <Routes>
//       <Route path="/" element={path('/', authnticated)} />
//       <Route path="/todo" element={path('/todo', authnticated)} />
//       <Route path="/signin" element={path('/signin', authnticated)} />
//       <Route path="/signup" element={path('/signup', authnticated)} />
//     </Routes>
//   }
//   else {

//   }
// }

function App() {
  // const authnticated = useAuthnticated();
  const [isLogin, setIsLogin] = useState(false);
  const token = localStorage.getItem('access_token');

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/'
            element={token ? <Navigate to="/todo" /> : <Navigate to="/signup" />} />
          <Route path='/signup'
            element={token ? <Navigate to="/todo" /> : <Sign />} />
          <Route path='/signin'
            element={token ? <Navigate to="/todo" /> : <Sign setIsLogin={setIsLogin} />} />
          <Route path='/todo'
            element={token ? <Todo /> : <Navigate to="/signin" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
