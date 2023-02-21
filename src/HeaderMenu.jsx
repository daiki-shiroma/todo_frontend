import { Link } from "react-router-dom";
import styled from 'styled-components'

const HeaderMenu_ul=styled.ul`
// width: 700px;
display:flex;
`

const HeaderMenu_li  =styled.li`
font-size:20px;
list-style:none;
`;

const HeaderMenu_li_user  =styled.li`
font-size:15px;
list-style:none;
padding-right:30px;
`;

const HeaderMenu_title  =styled.div`
`;

const HeaderMenu_user  =styled.div`
display:flex;
margin:0 0 0 auto;
`;



const HeaderMenu = () => {
  return (
    <>
        <HeaderMenu_ul>

          <HeaderMenu_li>
            <HeaderMenu_title>
              <Link to="/">Home</Link>
            </HeaderMenu_title>  
          </HeaderMenu_li>  

        <HeaderMenu_user>
          <HeaderMenu_li_user>
           <Link to="/Register">Register</Link>
          </HeaderMenu_li_user>  

          <HeaderMenu_li_user>
           <Link to="/Login">Login</Link>
          </HeaderMenu_li_user>  
         </HeaderMenu_user>
         
        </HeaderMenu_ul> 
    </>
  );
};

export default HeaderMenu;