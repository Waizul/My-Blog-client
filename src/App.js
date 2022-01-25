import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar.jsx';
import AuthProvider from './context/AuthProvider.js';
import { GlobalStyles } from './globalStyles.js';
import useAuth from './hooks/useAuth'
import useFirebase from './hooks/useFirebase.js';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import SinglePostPage from './pages/singlePostPage/SinglePostPage.jsx';
import Write from './pages/write/Write.jsx';
import {Button, Thing, Title, Wrapper} from './styles.js'
function App() {
  const {user}= useAuth()
  
  return (
    <BrowserRouter>
    <GlobalStyles/> 
     <Topbar/>
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/posts' element={<Home/>}/>
 <Route path='/post/:id' element={<SinglePostPage/>} />

  <Route path='/write' element={user?.email?<Write/>:<Navigate to='/'/>}/>
 <Route path='/profile' element={user?.email?<Profile/>:<Navigate to='/'/>}/> 
 

  
   
   <Route path='/register' element={user?.email?<Navigate to='/' />:<Register/>}/>
 <Route path='/login' element={user?.email?<Navigate to='/' />:<Login/>}/> 
   
   
  
   </Routes>
    </BrowserRouter>
  );
}

export default App;
