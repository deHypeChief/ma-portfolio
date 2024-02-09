import './style.css'
export default function Button(props){
    return(
        <button className={props.alt? 'altButton' : ''}>
            {props.children}
        </button>
    )
} 