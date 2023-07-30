import '../App.css'
export default function SideBar(){

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
            <li>Prueba de Lista 1</li>
            <li>Prueba de Lista 2</li>
        </ul>

        <p>Shared</p>
        <p>Private</p>
        </div>
    )
};