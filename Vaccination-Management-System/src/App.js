import { BrowserRouter, Route,Link, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './Home';
import { GetAllUsers } from './GetAllUsers';
import { LoginYup } from './Login';
import {RegisterYup} from './Registration';
import {ForgetPassword} from './ForgetPassword';
import { AboutUs } from './About';
import { Dashboard } from './Dashboard';
import { Help } from './Help';
import { Resources } from './Resources';
import { AdminDashboard } from './AdminDashboard';
import { Profile } from './Profile';
import { UpdateProfile } from './UpdateProfile';
import { Certificate } from './DownloadCertificate';
import { AdminUpdateVaccination } from './AdminUpdateVaccination';
import { SlotBooking } from './SlotBooking';
import { UpdateSlotBooking } from './UpdateSlotBooking';
import NoMatch from './NoMatch';
import { AddUserByAdmin } from './AddUserByAdmin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='About' element={<AboutUs></AboutUs>}></Route>
        <Route path='Dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/adminDashboard' element={<AdminDashboard></AdminDashboard>}></Route>
        <Route path='Help' element={<Help></Help>}></Route>
        <Route path='/Resources' element={<Resources></Resources>}></Route>
        <Route path='getAllUsers' element={<GetAllUsers></GetAllUsers>}></Route>
        <Route path='Registration' element={<RegisterYup></RegisterYup>}></Route>
        <Route path='Login' element={<LoginYup/>}></Route>
        <Route path='/slotBooking'element={<SlotBooking></SlotBooking>}></Route>
        <Route path='/certificate' element={<Certificate></Certificate>}></Route>
        <Route path='/profile' element={<Profile></Profile>}></Route>
        <Route path='/updateProfile' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='/updateSlotBooking' element={<UpdateSlotBooking></UpdateSlotBooking>}></Route>
        <Route path='/adminUpdateVaccination' element={<AdminUpdateVaccination></AdminUpdateVaccination>}></Route>
        <Route path='/updateProfile/:id' element={<UpdateProfile></UpdateProfile>}></Route>
        <Route path='ForgetPassword' element={<ForgetPassword></ForgetPassword>}></Route>
        <Route path='getAllUsers' element={<GetAllUsers></GetAllUsers>}></Route>
        <Route path='addUserByAdmin' element={<AddUserByAdmin></AddUserByAdmin>}></Route>
        <Route path='*' element={<NoMatch></NoMatch>}></Route>
  </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;











