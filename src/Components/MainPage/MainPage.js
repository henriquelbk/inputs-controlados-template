import React, { useState } from 'react'
import { MainContainer, Form, Input } from './styles'

function MainPage() {

  const [nameInput, setNameInput] = useState("")
  const [ageInput, setAgeInput] = useState("")
  const [emailInput, setEmailInput] = useState("")
  const [senhaInput, setSenhaInput] = useState("")
  const [maritalStatus, setMaritalStatus] = useState("")

  const handleChange = (event, setState) => {
    setState(event.target.value)
  }

  // const handleChange2 = (event) => {
  //   setAgeInput(event.target.value)
  // }

  // const handleChange3 = (event) => {
  //   setMaritalStatus(event.target.value)
  // }

  // const printValues = (event) => {
  //   event.preventDefault()
  //   if (nameInput.length && ageInput.length && maritalStatus.length) {
  //   console.log(nameInput, ageInput, maritalStatus)
  // } else {
  //   alert('Preencha todos os campos')
  // }}

  const wipeValues = (event) => {
    event.preventDefault()
    
    setNameInput("")
    setAgeInput("")
    setEmailInput("")
    setSenhaInput("")
  }


  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form onSubmit={wipeValues}>

        <label>
          Nome:
          <Input onChange={(event) => handleChange(event, setNameInput)} value={nameInput} />
        </label>
        <label>
          Idade:
          <Input type={"number"} onChange={(event) => handleChange(event, setAgeInput)} value={ageInput} />
        </label>
        <label>
          E-mail:
          <Input type={"email"} onChange={(event) => handleChange(event, setEmailInput)} value={emailInput} />
        </label>
        <label>
          Senha:
          <Input type={"password"} onChange={(event) => handleChange(event, setSenhaInput)} value={senhaInput} />
        </label>

        <select onChange={(event) => handleChange(event, setMaritalStatus)}>
          <option disabled value="">Nenhum</option>
          <option>Casado</option>
          <option>Solteiro</option>
          <option>Viúvo</option>
          <option>Divorciado</option>
        </select>

        <button onClick={wipeValues}>Enviar dados</button>

      </Form>
    </MainContainer>
  )
}

export default MainPage
