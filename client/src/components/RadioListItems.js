function RadioListItems({radio}){
// console.log(radio)
    const {serial_number, model} = radio

    return(
       <>
            <p>RadioListItems</p>
            <p>{serial_number}</p>
            <p>{model}</p>
       </>
    )
}


export default RadioListItems