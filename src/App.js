import logo from './logo.svg';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Home from './Pages/Home';
import AllRoutes from './Routes/Routes';
import Navbar from './Pages/Navbar';
import PrivateRoutes from './Routes/PrivateRoutes';
import Logout from './Pages/Logout';

function App() {
  return (
    <div className="App">
      {/* <Login/>
      <Signup/> */}
      {/* <Home/> */}
      {/* <Logout/> */}
      <Navbar/>
      {/* <PrivateRoutes/> */}
      <AllRoutes/>
    </div>
  );
}

export default App;
