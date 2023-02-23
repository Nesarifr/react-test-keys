import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { usuarios, twitterAccounts, productos } from './utils/data.jsx'
import { CardUsuarios, List, ListItem, Titulo } from './Component/List.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Titulo>
        Usuarios
      </Titulo>
        {usuarios.map(((item, index)=>{
          return (
            <CardUsuarios key={item.email}
            account={twitterAccounts[index]}
            nombre={item.nombre}
            edad={item.edad}
            email={item.email}  >
            </CardUsuarios>
          )
        }))}

      <Titulo>
        Productos
      </Titulo>
      {productos.map(((item)=>{
          return (
            <ListItem key={item.id}>
              {item.name}
            </ListItem>
          )
      }))}
    </>
  )
}

export default App
