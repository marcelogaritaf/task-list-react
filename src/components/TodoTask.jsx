import React, { useEffect, useState } from 'react'
import Fomulario from './Fomulario'
import ListaToDo from './ListaToDo'

const TodoTask = () => {
  const [toDos, setToDos]=useState([])
  // este use effect pinta los datos que previamente ya estan el localstorage
  useEffect(()=>{// basicamente puede funcionar como un local
    if(localStorage.getItem('toDos')){
      setToDos(JSON.parse(localStorage.getItem('toDos')))
    }
  },[])
  // este use effect pinta los datos que se esten modificando
  useEffect(()=>{
    localStorage.setItem('toDos', JSON.stringify(toDos))
  }, [toDos])//cada vez que se cambien los to dos

  const agregarTareas = tarea=>{
    console.log(tarea)
    setToDos((old)=>[...old, tarea])// hace la copia y la nueva tarea
  }

  const BtnEliminarTask=(id)=>{
    setToDos((old)=>old.filter(i=>i.id !== id))

  }
  const CambiarEstado=(id)=>{
    const editarTask = toDos.map(i=>(
      i.id=== id ? {...i, Estado: !i.Estado}:i
    ))
    setToDos(editarTask)
  }
  return (
    <>
        <Fomulario agregarTareas={agregarTareas}/>
        <ul className="list-group list-group-numbered">

        {//recorre el array de toDos para citarlos en el lista 
          toDos.map(i=>(
            <ListaToDo 
            key={i.id} 
            ListarTask={i} 
            BtnEliminarTask={BtnEliminarTask} 
            CambiarEstado={CambiarEstado}
            />
          ))
        }
        </ul>
    </>
  )
}

export default TodoTask
/**
 * es una forma de cargar los datos desde un componente hijo a uno padre 
 */