import { useState } from "react";

import { Link } from "react-router-dom";
import { css } from "styled-components";

import {Container} from "../../styles";
import logo from "../../images/good_things_logo.png";
import MenuIcon from "../MenuIcon";
import Dropdown from "../Dropdown";



const PrimaryMenu = ({menu}) => {
  const [isOpen, setOpen] = useState(false);

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

  const handleMenuClick = () => {
    setOpen(!isOpen);
  }
  return(
    <>
      <Container flex={true} containerStyle={flexContainerStyle}>
        <div className="logo">
          <img src={logo} alt="Good Things Logo" />
        </div>
        <nav class="primary-menu desktop-menu">
          <ul>
            {menuItems}
          </ul>
        </nav>
        <MenuIcon click={handleMenuClick} />
      </Container>
      <Dropdown open={isOpen}>
        <nav id="primary-mobile" class="mobile">
          <ul>{menuItems}</ul>
        </nav>
      </Dropdown>
    </>
  );
}

export default PrimaryMenu;