import styled from "styled-components";

const Button = ({url, label, buttonStyle}) => {
  return(
    <a href={url}>
      <StyledButton buttonStyle={buttonStyle}>{label}</StyledButton>
    </a>
  );
}

const StyledButton = styled.button`
  appearance: none;
  -webkit-appearance: none;
  color: var(--red);
  background-color: white;
  border: 2px solid white;
  border-radius: 30px;
  padding: 10px 25px;
  font-size: 16px;
  font-weight: bold;

  ${ ({ buttonStyle }) => buttonStyle && `
    ${buttonStyle}
  `}
`;

export default Button;