import './App.css';
import { Route , Routes } from 'react-router-dom';
import EmployeeDetails from './EmployeeDetails'
import EmployeeExperiencedetails from './EmployeeExperiencedetails'
import Home from './Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/EmployeeDetails' element={<EmployeeDetails/>}></Route>
         <Route path='/EmployeeExperiencedetails' element={<EmployeeExperiencedetails/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
