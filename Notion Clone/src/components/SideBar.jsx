import '../App.css'
import { useState, useEffect } from 'react'
const API_URL = 'http://localhost:8080/listas'
export default function SideBar(){
    const [list, setLists] = useState(null)
    useEffect(()=>{
      fetch(API_URL)
      .then((Response) => Response.json())
      .then((data) => setLists(data))
    }, []);
    return(
        <div className='SideBar'>
          <div className="Info">
            <ul style={{listStyle:'none'}}>
            <li>Usuario</li>
            <li>Correo@gmail.com</li>
            </ul>
          </div>

        <div className="WorkSpace">Workspace</div>
        <ul style={{listStyle:'none'}}>
        
       {list?.map((list) => (<li key = {list.id} >{list.listName}</li>))}
        
        </ul>

        <p>Shared</p>
        <p>Private</p>
        </div>
    )
};