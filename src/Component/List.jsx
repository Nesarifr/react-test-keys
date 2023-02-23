export const ListItem = (props) => {
    return (
        <li>
            {props.children}
        </li>
    )
}

export const List = (props) => {
    return (
        <ul>
            {props.children}
        </ul>
    )
}

export const Titulo =  (props)=>{
    return (
        <h2>
            {props.children}
        </h2>
    )
}

export const CardUsuarios = (props)=>{
    return(
        <div>
            <h4>{props.nombre}</h4>
            <div>
                <p>Cuenta: {props.account}</p>
                <p>Edad : {props.edad}</p>
                <p>Email : {props.email}</p>
            </div>
        </div>
    )
}