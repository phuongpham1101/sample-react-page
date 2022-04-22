import styled, { css } from "styled-components";
import Button from "./Button";

const Card = ({title, intro, cta}) => {
  const buttonStyle = css`
    border: 2px solid black;
  `;
  return(
    <StyledCard>
      <h2>{title}</h2>
      <p>{intro}</p>
      <Button url={cta} label="Read more" buttonStyle={buttonStyle} />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  color: black;
`;

export default Card;