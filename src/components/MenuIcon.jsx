import { useState } from "react";
import styled from "styled-components";

const MenuIcon = ({click}) => {
  const [isOpen, setOpen] = useState(false);
  const toggleClass = (event) => {
    event.preventDefault();
    setOpen(!isOpen);
    click();
  }

  const opened = isOpen ? "open" : "";

  return(
    <StyledMenuIcon className={`menu-icon ${opened}`} onClick={toggleClass}>
      <span></span><span></span><span></span><span></span>
    </StyledMenuIcon>
  );
}

const StyledMenuIcon = styled.span`
  display: none;
	width: 40px;
	height: 35px;
	position: relative;
	transform: rotate(0deg);
	transition: .5s ease-in-out;
	cursor: pointer;
  margin-right: 20px;

	span {
		display: block;
		position: absolute;
    left: 0;
		height: 5px;
		width: 100%;
		background: #000;
		border-radius: 9px;
		opacity: 1;
		transform: rotate(0deg);
		transition: .25s ease-in-out;

		&:nth-child(1) {
			top: 0px;
		}

		&:nth-child(2),
		&:nth-child(3) {
			top: 15px;
		}

		&:nth-child(4) {
			top: 30px;
		}
	}

	&.open span {
		&:nth-child(1) {
			top: 15px;
  		width: 0%;
  		left: 50%;
		}

		&:nth-child(2) {
			transform: rotate(45deg);
		}

		&:nth-child(3) {
			transform: rotate(-45deg);
		}

		&:nth-child(4) {
			top: 18px;
			width: 0%;
			left: 50%;
		}
	}
`;

export default MenuIcon;