import React, { useState } from 'react'
import { Form } from 'semantic-ui-react'

function DeputyForm({handleNewDeputy}){
    const [first_name, setFirstName] = useState("")
    const [last_name, setLastName] = useState("")
    const [identification_number, setIdentificationNumber] = useState("")
    const [resign, setResign] = useState("")
    const [location, setLocation] = useState("")
//   handleChange = (e, { name, value }) => this.setState({ [name]: value })

const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e)

    let newDeputy = {
       first_name: first_name,
       last_name: last_name,
       identificaiton_number: identification_number,
       resign: resign,
       location: location
       }
       fetch("/deputies", {
        method: "POST",
        headers: {"Content-Type": "application/json"
      },
        body: JSON.stringify(newDeputy)
      })
        .then(resp => resp.json())
        .then(myDeputy => handleNewDeputy(myDeputy))
    
    }

//   render() {
//     const { name, email } = this.state

    return (
      <Form onSubmit={(e) => {{handleSubmit(e)}}}>
        <Form.Group>
          <Form.Input
            placeholder='First Name'
            name='First Name'
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Form.Input
            placeholder='Last Name'
            name='Last Name'
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />
            <Form.Input
            placeholder='Id Number'
            name='Id Number'
            value={identification_number}
            onChange={(e) => setIdentificationNumber(e.target.value)}
          />
            <Form.Input
            placeholder='Resign'
            name='Resign'
            value={resign}
            onChange={(e) => setResign(e.target.value)}
          />
            <Form.Input
            placeholder='Location'
            name='Location'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Form.Button content='Submit' />
        </Form.Group>
      </Form>
    )
  }

export default DeputyForm