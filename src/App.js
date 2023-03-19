import React, {Component} from 'react';
import styled from 'styled-components';
import checked from "./imgs/button/checked.svg"
import X from "./imgs/button/X.png";
import send from "./imgs/button/send.png"
/* INICIO ESTILIZAÇÃO */
const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
width: 100vw;
`
const ToDoStyle = styled.span`
border: solid black;
background-color: rgb(254, 255, 179);
min-width: 20rem;  
max-width: 30rem;
max-height: 32rem;
border-radius: 1em;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;`

const SuperiorStyleDiv = styled.div`
max-height: 4rem;  
border-bottom: solid black;
border-radius: 0.9em 0.9em 0em 0em;
background-color:orange;
width: 100%;` 

const BoxArgolas = styled.div`
display: flex;
justify-content: space-around;
height: 0;`

const H1 = styled.h1`
font-size: 3rem;
height: 3rem;
margin: 11px 0px 5px 0px;
font-family: 'Zeyada', cursive;
display:flex;
justify-content:center;`

const Argolas = styled.span`
position: relative;
bottom: 1.5rem;
border: solid black;
height:2.5rem;
width: 0.5rem;
background-color:white;
border-radius: 1rem;`

const Box = styled.div`
width: 100%;
border-bottom: solid red 2px;
display: flex;
justify-content: center;`

const Form = styled.form`
height:0;`

const Input = styled.input`
height: 2.5rem;
font-size: 1rem;
border: none;
outline: none;
background-color: transparent;
::placeholder{
  text-align: center;
  position: relative;
  top: 0.5rem;
  left: 0.5rem;
}`

const Button = styled.button`
background-image: url(${send});
background-repeat: no-repeat;
background-size: cover;
background-color: transparent;
position: relative;
top: 0.063rem;
width: 2.5rem;
height: 2.5rem;
border: none;
cursor: pointer;`

const Ul = styled.ul`
background: red;
display: flex;
flex-direction: column;
gap:0.125rem;
margin-top:0;
margin-bottom:0.5rem;
border-bottom: solid red 0.125rem;
padding:0;
width: 100%;
overflow-y: auto;
max-height: 28.3rem;`

const Li = styled.li`
font-family: 'Raleway', sans-serif;
list-style: none;
border-left: solid #2196F3;
border-radius: 0.1rem;
background-color: #ddffff;
max-width: 30rem;
word-break: break-all;
font-weight: 600;
display: flex;
justify-content: space-between;
align-items: center;`

const BoxButtons = styled.div`
margin-left: 0.5rem;`

const ButtonLiCheck = styled.button`
background-image: url(${checked});
background-repeat: no-repeat;
background-size: cover;
background-color: transparent;
width: 1.5rem;
height: 1.5rem;
border: none;
cursor: pointer;`

const ButtonLiDel = styled.button`
background-image: url(${X});
background-repeat: no-repeat;
background-size: cover;
background-color: transparent;
width: 1.5rem;
height: 1.5rem;
border: none;
cursor: pointer;`
/* TERMINO ESTILIZAÇÃO */

class App extends Component {
state = {
  tarefa: undefined,
  lista: []
}
/* INICIO FUNÇÕES */
handleChange = (e) => {
  this.setState({
  tarefa: e.target.value
})}

buttonAdd = () => {
  if (this.state.tarefa === ""){return;}
  this.setState({
lista: this.state.lista.concat({
  tarefa: this.state.tarefa,
  id: Math.random()
}),
tarefa: "" 
})};
   handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      this.buttonAdd();
    }
  }; 

buttonDel = (id) => {
this.setState({
  lista: this.state.lista.filter((item) => {return item.id !== id;})
})}

buttonChecked = (id) => {
  this.setState({
  lista: this.state.lista.map((item) => {
  if (item.id === id) 
  {return {...item, checked: !item.checked};}
  else 
  {return item;}
  })})}
/* TERMINO FUNÇÕES */
render () {
  return (
<Main>
  <ToDoStyle>
     <SuperiorStyleDiv>
      <BoxArgolas>
<Argolas></Argolas>
<Argolas></Argolas>
<Argolas></Argolas>
<Argolas></Argolas>
<Argolas></Argolas>
      </BoxArgolas>
      <H1>To Do VNW</H1>
    </SuperiorStyleDiv>
  <Box>
<Form>
<Input value={this.state.tarefa} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder='Adicionar uma tarefa'/>
</Form>
<Button onClick={this.buttonAdd}/>
  </Box>
<Ul>
{this.state.lista.map((item) => {
return (
<Li key={item.id} style={{ textDecoration: item.checked ? "line-through red 2px" : "none", color: item.checked ? "gray" : "black" }}>
<span>{item.tarefa}</span>
<BoxButtons>
<ButtonLiCheck onClick={() => this.buttonChecked(item.id)}></ButtonLiCheck>
<ButtonLiDel onClick={() => this.buttonDel(item.id)}></ButtonLiDel>
</BoxButtons>
</Li>
);
})}
</Ul>
</ToDoStyle>
</Main>
  )
}
}
export default App;