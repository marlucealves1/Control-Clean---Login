
import React from "react"

function Form(){
function cadastrarUsuario(event){
    event.preventDefault()

    console.log(`Usuario ${name} foi cadastrado com a senha: ${password}`)
}

const [name, setName] = React.useState('...')
const [password, setPasswod] = React.useState('')



return(
    <div>
    <h1>Login:</h1>
       <form onSubmit={cadastrarUsuario}>
        <div>
            <label htmlFor="name">Nome:</label>
            <Input type="text"
            id='name' 
            name='name'
           placeholder='digite seu nome ' 
           value={name}
           onChange={(event)=>setName(event.target.value)}
           />
        </div>
       </form>

    </div>
)
}

export default Form;