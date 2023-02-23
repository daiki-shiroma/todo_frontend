import styled from 'styled-components'
import AddTodo from './components/AddTodo'
import TodoList from './components/TodoList'
import HeaderMenu from './HeaderMenu'

const Wrapper = styled.div`
  width: 700px;
  max-width: 85%;
  margin: 20px auto;
`

function Home(){
  return (
    <>
    <HeaderMenu/>
    <Wrapper>
    {/* <HeaderMenu/> */}
       <AddTodo /> 
       <TodoList /> 
    </Wrapper>
    </>
  );
};

export default Home;