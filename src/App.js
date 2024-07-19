import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Page/Home';
import Classes from './Page/Classes'
import Community from './Page/Community';
import Account from './Page/Account';
import Practice from './Page/Practice';
import Note from './Page/Note';
import Material from './Page/material';
import Microsoft from './Companies/Microsoft';
import Fullstack from './roadmaps/Fullstack';
import AboutUs from './Page/AboutUs';
import Android from './roadmaps/Android';
import Chat from './Page/Chat';

function App() {

  const [activeBar, setActiveBar] = useState(true);

  return (
    <div className='w-screen bimg' >
      < Navbar activeBar={activeBar} setActiveBar={setActiveBar} />
      {/* <img src={} className='absolute left-0 w-[100px] h-[100px]' /> */}
      <Routes>
        <Route path='/' element={< Home />} />
        <Route path='/classes' element={< Classes />} />
        <Route path='/community' element={< Community />} />
        <Route path='/account' element={< Account />} />
        <Route path='/practice' element={< Practice />} />
        <Route path='/note' element={< Note />} />
        <Route path='/material' element={< Material />} />
        <Route path='/aboutus' element={< AboutUs />} />
        <Route path='/android' element={<Android />} />
        <Route path='/microsoft' element={<Microsoft />} />
        <Route path='/fullstack' element={<Fullstack />} />
        <Route path='/chat' element={<Chat />}></Route>
      </Routes>
    </div >
  );
}

export default App;
