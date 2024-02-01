

export default function LayoutShow(props) {
    if (props.item  == undefined) {
        return null
    }
    return(
       <div>
            {props.item.map((valor, index) => {
                return(
                    <div key={index} style={{margin: '5px'}}>
                       {valor.id}- 
                        {valor.nome} 
                    </div>
                )
            })}
        </div>
    )
}