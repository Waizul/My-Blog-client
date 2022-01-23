import Topbar from './components/topbar/Topbar.jsx';
import { GlobalStyles } from './globalStyles.js';
import Home from './pages/home/Home.jsx';
import {Button, Thing, Title, Wrapper} from './styles.js'
function App() {
  return (
    <>
    <GlobalStyles/> 
   <div>
     <Topbar/>
     <Home/>
   </div>
    </>
  );
}

export default App;
