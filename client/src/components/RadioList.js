import RadioListItems from "./RadioListItems"

function RadioList({radios}){


const radioListed = radios?.map((radio) => {
   return <RadioListItems
    key = {radio.id}
    radio = {radio}
    />
   
})

return (
    <ul>{radioListed}</ul>
)
}

export default RadioList