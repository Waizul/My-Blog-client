import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Topbar from './components/topbar/Topbar.jsx';
import { GlobalStyles } from './globalStyles.js';
import Home from './pages/home/Home.jsx';
import Login from './pages/login/Login.jsx';
import Profile from './pages/profile/Profile.jsx';
import Register from './pages/register/Register.jsx';
import SinglePostPage from './pages/singlePostPage/SinglePostPage.jsx';
import Write from './pages/write/Write.jsx';
import {Button, Thing, Title, Wrapper} from './styles.js'
function App() {
  return (
    <BrowserRouter>
    <GlobalStyles/> 
     <Topbar/>
    <Routes>
 <Route path='/' element={<Home/>}/>
 <Route path='/posts' element={<Home/>}/>
 <Route path='/post/:id' element={<SinglePostPage/>} />
 <Route path='/write' element={<Write/>}/>
 <Route path='/register' element={<Register/>}/>
 <Route path='/login' element={<Login/>}/> 
 <Route path='/profile' element={<Profile/>}/> 
   
   </Routes>
    </BrowserRouter>
  );
}

export default App;
