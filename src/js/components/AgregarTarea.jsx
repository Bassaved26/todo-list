import { useState } from "react"


export const AgregarTareas = ({agregarTarea})=>{
    const [inpuValue, setInputValue] = useState('')
    
    const onInputValue = (e) => {
        setInputValue(e.target.value)
    }

    const onSubmit = (e)=>{
        e.preventDefault();
        if (inpuValue.trim() === "") return; 
        agregarTarea(tareas => [...tareas, { nombre: inpuValue }]);
        setInputValue('')
    }

    return(
        <form onSubmit={onSubmit} >
            <input 
                className="todo-input w-100"
                type="text" 
                value={inpuValue}
                onChange={onInputValue}
            />            
        </form>
    )

}


