import React, { useState } from "react";
import { AgregarTareas } from "./AgregarTarea";

//create your first component
export const ListadoTareas = () => {

	let listado = 
		{
			nombre: ""
		}

	const [tarea, setTarea] = useState([])

	const borrarTarea = (indiceABorrar) => {
    	setTarea(tarea.filter((_, index) => index !== indiceABorrar));
	};

	return (
		<div className="container mt-5">
			<h1 className="text-center">TODOS</h1>
			<div className="todo-container mx-auto">
				<AgregarTareas agregarTarea ={setTarea}/>
				<ul>
					{tarea.map((t, index) => <Items key={index} nombre={t.nombre} onBorrar={() => borrarTarea(index)} />)}
				</ul>
				<div className="p-2 text-muted small border-top text-start ps-3">
					{tarea.length} {tarea.length === 1 ? "item" : "items"} left
				</div>
			</div> 
			<div className="sheet-1 mx-auto"></div>
            <div className="sheet-2 mx-auto"></div>
		</div>
	);
};

const Items = ({nombre,onBorrar})=>{
	return(
		<li className="todo-item">
			{nombre}
			<button className="delete-btn" onClick={onBorrar}>
                X
            </button>
		</li>
	)
}