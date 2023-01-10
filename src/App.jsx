import React, { useState } from 'react';
import axios from "axios";
import reactLogo from './assets/react.svg'
import './App.css'
import { Squad } from './pages/Squad'
import { onepieceapi } from '../src/features/onepieceapi'
import { Routes, Route} from 'react-router-dom'
import { Nakama } from './pages/[id]'
 
export default function App() {
  const { data : api = []} = onepieceapi.useGetCrewsQuery();
  const [toggleState, setToggleState] = useState(false);
  const toggleFonction =  () =>{
   // console.log("heloworld")
   setToggleState(!toggleState)
  }
  return (
    <div className="App">
      <h1><a href="/">Marine-Repport</a></h1>       

      <Routes>
      <Route path='/' element={<Squad />}/>
      <Route path='/crews/:id' element={<Nakama/>}/>
      </Routes>

    </div>
  )
}




