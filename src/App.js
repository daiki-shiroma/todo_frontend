import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import  Home  from "./Home";
import  Register  from "./Register";
import  Login from "./Login";
import NotFound from "./NotFound";
import './css/App.css';
import styled from 'styled-components'
// import AddTodo from './components/AddTodo'
// import TodoList from './components/TodoList'

// const Wrapper = styled.div`
//   width: 700px;
//   max-width: 85%;
//   margin: 20px auto;
// `



function App() {

  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path={`/*/`} element={<NotFound />} />
      </Routes>
    </BrowserRouter>

     {/* <Wrapper>
       <AddTodo /> 
       <TodoList /> 
    </Wrapper> */}
    </>
	)
}

export default App;