import {Routes, Route, } from 'react-router-dom';
import Main from './pages/main/Main';
import Layout from './components/layout/Layout';
import UserPage from './pages/userPage/UserPage'

import s from './app.module.css'
import PostInfo from './pages/PostInfo/PostInfo';

const App = () => {
  return (
    <div className={s.container}>
      <Routes>
        <Route path='/' element={<Layout/>}>
        <Route index element={<Main/>}/>
        <Route path='user/:id' element={<UserPage/>}/>
        <Route path='user/:userId/post/:id' element={<PostInfo/>}/>
        </Route>
      </Routes>
    </div>
  );
};

export default App;