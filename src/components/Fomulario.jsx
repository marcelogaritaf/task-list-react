import React, { useState } from 'react'
import Swal from 'sweetalert2'
import {v4 as uuidv4} from 'uuid'// generador de un id alazar 
import { useFormularios } from '../hooks/useFormularios'

const Fomulario = ({agregarTareas}) => {// esto evita que se tenga que estar poniendo props a cada rato
    const initialState ={
        TaskName:'',
        description:'',
        Estado:'Pendiente',
        check: false
    }
    //const [tarea, setTarea]=useState(initialState)// se podia poner el objeto adentro el hook
    const [inputs, handleChange, reset]=useFormularios(initialState)
    const {TaskName, description, Estado,check}= inputs// destructurar la variable tarea en varias variables 
    
    const ActionForm=e=>{
        e.preventDefault()
        if(!TaskName.trim() && !description.trim()){
            e.target[0].focus()// esto hace que cuando salga el error este el focus donde fallo 
            Swal.fire({// se hace le llamado del paquete para mostrarlo dependiendo de la validacion del if 
                title: 'Error!',
                text: 'Texto en blanco',
                icon: 'error',
                confirmButtonText: 'OK'
              })
              return
        }
        Swal.fire({ // lo mismo pero para la forma correcta 
            title: 'Success!',
            text: 'Agregada correctamente',
            icon: 'success',
            confirmButtonText: 'OK'
          })
           agregarTareas({
            TaskName:TaskName,
            description:description,
            Estado:Estado=== 'Pendiente'?false:true,
            check: check,
            id:uuidv4()
         })
         //setTarea(initialState)// hace que el formulario se reinicie 
         reset()
    }
   

  return (
    <div>
        <form onSubmit={ActionForm}>
            <input type="text" placeholder='Ingresa la tarea' name='TaskName' className='form-control mb-2'value={TaskName} onChange={handleChange} autoComplete='off'/>
            <textarea name="description" placeholder='Ingrese la descripcion' className='form-control mb-2' value={description}onChange={handleChange}/>
            <select name="Estado" className='form-control mb-2'value={Estado}onChange={handleChange}>
                <option value="Pendiente">Pendiente</option>
                <option value="Completada">Completada</option>
            </select>
            <div className="form-check mb-2">
                <input type="checkbox" className="form-check-input" name="check" id='flexCheckDefault'onChange={handleChange} checked={check}/>
                <label htmlFor="flexCheckDefault" className="form-check-label">Dar prioridad</label>
            </div>
            <button type='submit' className='btn btn-primary mb-2'>Agregar</button>
        </form>
    </div>
  )
}

export default Fomulario