import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/SideBar'
const API_URL = 'http://localhost:8080/listas'
function App() {
  const [list, setLists] = useState(null)
  useEffect(()=>{
    fetch(API_URL)
    .then((Response) => Response.json())
    .then((data) => setLists(data))
  }, []);
  return (
    <>
   <SideBar>
    
   </SideBar>
   <ul>
       {list?.map((list) => (<li key = {list.id} >{list.listName}</li>))}
    </ul>
    </>
  )
}


export default App
