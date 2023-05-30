import React from 'react'

const ListaToDo = ({ListarTask, BtnEliminarTask,CambiarEstado}) => {
    const{id,TaskName, description, Estado, check}=ListarTask
  return (

        <li className="list-group-item d-flex justify-content-between align-items-start">
        <div className="ms-2 me-auto">
        <div className="fw-bold">
            {TaskName} ({Estado?'Finalizada':'Pendiente'})
        </div>
        <p>{description}</p>
        <button className='btn btn-danger me-2' onClick={()=>BtnEliminarTask(id)}>Eliminar</button>
        <button className='btn btn-success' onClick={()=>CambiarEstado(id)}>Finalizar</button>
        </div>
        <span className="badge bg-primary rounded-pill">
            {check && "Prioritario"}
        </span>
        </li>
    
  )
}

export default ListaToDo
/**
 * cuando se va hacer uso de los props sin utilizar la palabra props 
 * el parametro debe ser igual al nombre de como esta el props en el componente padre
 * y deben de ir con los {...}
 */