import './App.css';
import ReactDOM from "react-dom/client";
import Registration from './Registration';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Form from './layout';
import Signup from './signup';
import Login from './login';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Form/>}>
      <Route path="/" element={<Registration/>}/>
      <Route path="login" element={<Login/>}/>
      <Route path="signup" element={<Signup/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


export default App;
