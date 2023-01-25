import './Tarea.css'

const Tarea = (props) => {

    return (
        <div className="tarea-container">
            <li className="tarea-container">{props.status === true ?
                <s>{props.name}</s> // tachar
                :
                props.name}
                <input className='check-box' type="checkbox" checked={props.status} onChange={(e) => props.handleStatus(e.target.checked, props.index)} />
                <button className='btn-delete' onClick={(e) => props.handleDelete(props.index)} >Borrar</button>
            </li>
        </div>
    )
}

export default Tarea;