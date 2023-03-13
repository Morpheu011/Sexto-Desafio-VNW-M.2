import React, {Component} from 'react';
import styled from 'styled-components';
import X from "./imgs/button/X.jpg";
import send from "./imgs/button/send.png"

const Main = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100vh;
`
const ToDoStyle = styled.span`
border: solid black;
background-color: rgb(254, 255, 179);
min-width: 15rem; /* ou 18rem */ 
border-radius: 1em;
display: flex; 
flex-direction: column;
justify-content: center;
align-items: center;`

const SuperiorStyleDiv = styled.div`
border-bottom: solid black;
margin-bottom: 10px;
border-radius: 0.9em 0.9em 0em 0em;
display: flex;
justify-content: space-around;
align-items: center;
gap: 2.5rem;
background-color:orange;
width: 100%;`

const Argolas = styled.span`
position: relative;
bottom: 2rem;
border: solid black;
height:7.5vh;
width: 0.5vw;
background-color:white;
border-radius: 1rem;`

const Box = styled.div`
display:flex;`

const Input = styled.input`
display: block;
width: 100%;
padding: 10px;
font-size: 16px;
border: none;
border-bottom: 2px solid #ccc;
outline: none;
background-color: transparent;` 

const Button = styled.button`
border: 1px solid black;`

/* const Button = styled.button`
background-image: url(${send});
background-repeat: no-repeat;
background-size: cover;
width: 1.5rem;
height: 1.5rem;
mix-blend-mode: darken;
border: none;
cursor: pointer;` */

const Ul = styled.ul`
display: flex;
flex-direction: column;
gap:0.5rem;
padding:0;
overflow-y: auto;
max-height: 28.3rem;`

const Li = styled.li`
list-style: none;
border-left: solid #2196F3;
background-color: #ddffff;
max-width: 35vw;
word-break: break-all;
font-weight: bold;
display: flex;
justify-content: space-between;
align-items: center;
`

const ButtonLi = styled.button`
background-image: url(${X});
background-repeat: no-repeat;
background-size: cover;
width: 1.5rem;
height: 1.5rem;
mix-blend-mode: darken;
border: none;
cursor: pointer;
`


class App extends Component {
state = {
  tarefa: undefined,
  lista: []
}

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
render () {
  return (
<Main>
  <ToDoStyle>
     <SuperiorStyleDiv> 
<Argolas></Argolas>
<Argolas></Argolas>
<Argolas></Argolas>
<Argolas></Argolas>
    </SuperiorStyleDiv>
  <Box>
<form>
<Input value={this.state.tarefa} onChange={this.handleChange} onKeyDown={this.handleKeyDown} placeholder='Adicionar uma tarefa'/>
</form>
<Button onClick={this.buttonAdd}>➤</Button>
  </Box>
<Ul>
  {this.state.lista.map((item) => (
    <Li>{item.tarefa} <ButtonLi onClick={() => {this.buttonDel(item.id);}}/> </Li>
    ))}
</Ul>
</ToDoStyle>
</Main>
  )
}
}
export default App;
