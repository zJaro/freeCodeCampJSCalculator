export default function Key({id, text, aditionalClass, onClick }){
    return(
        <div id={id} className={`key ${aditionalClass}`}  onClick={onClick}>
             {text}   
        </div>
    )
}