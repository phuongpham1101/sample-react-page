import { Link } from "react-router-dom";
import {Container} from "../../styles";
import logo from "../../images/good_things_logo.png";
import { css } from "styled-components";


const PrimaryMenu = ({menu}) => {
  const flexContainerStyle = css`
    justify-content: space-between;
    align-items: center;
  `;
  
  const menuItems = menu.map((item) => {
    return(
      <li key={item.id}>
        <Link to={item.link}>
          {item.name}
        </Link>
      </li>
    );
  });
  return(
    <Container flex={true} containerStyle={flexContainerStyle}>
      <div className="logo">
        <img src={logo} alt="Good Things Logo" />
      </div>
      <nav class="primary-menu">
        <ul>
          {menuItems}
        </ul>
      </nav>
    </Container>
  );
}

export default PrimaryMenu;