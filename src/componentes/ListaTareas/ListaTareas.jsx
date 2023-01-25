import { useState } from "react"
import Tarea from "../Tarea/Tarea";
import './ListaTareas.css'



const ListaTareas = () => {

    const [chores, setChores] = useState([]);
    const [newChore, setNewChore] = useState("");

    const handleNewChore = (e) => {
        e.preventDefault();
        let aux = [...chores]; // hacer una copia de chores y guardar en la variable aux
        aux.push({ name: newChore, status: false }) // agregar una nueva tarea al final de la lista aux basado en el nombre de la nueva tarea (false)
        setChores([...aux]); // actualizamos la lista de tareas con la lista de aux
        console.log("Chores: ", aux);
        setNewChore(""); // reiniciando la entrada para que quede vacia el input
    }

    const handleStatusChange = (value, idx) => { //funcion para que quede rayado
        let aux = [...chores]; // hacer una copia de chores y guardar en la variable aux 
        aux[idx].status = value; //modificamos el estado de un indice en particular
        setChores([...aux]);
    }

    const handleDeleteChore = (idx) => {
        let aux = [...chores];
        let filtered = aux.filter((value, index, array) => index !== idx)
        setChores([...filtered]);
    }

    return (
        <div className="container-formulario">
            <form onSubmit={handleNewChore}>
                <input type="text" value={newChore} onChange={(e) => setNewChore(e.target.value)} />
                <div className="btn-container">
                    <button>Add</button>
                </div>
            </form>



            <ul>
                {chores.map((item, idx, list) => { //map
                    return (
                        <Tarea
                            key={"tarea" + item + idx} {...item} //key algo que sea unico. Una forma de pasar componentes, pasar todas las propiedades del item, nombre y status.
                            handleStatus={handleStatusChange} 
                            index={idx} // para saber que indice tiene el elemnto a modificar,
                            handleDelete={handleDeleteChore}
                        />
                    )
                })}
            </ul>
        </div>
    )
}

export default ListaTareas