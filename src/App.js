import {Routes, Route, } from 'react-router-dom';
import Main from './pages/main/Main';
import Layout from './components/layout/Layout';
import UserPage from './pages/userPage/UserPage'

import s from './app.module.css'

const App = () => {
  return (
    <div className={s.container}>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='user-page/:id' element={<UserPage/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;