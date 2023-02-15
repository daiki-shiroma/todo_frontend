import './css/App.css';
import styled from 'styled-components'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'

const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`

function App() {

  return (
    <>
     <Wrapper>
       <AddTodo /> 
       <TodoList /> 
    </Wrapper>
    </>
	)
}

export default App;