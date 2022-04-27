import styled, { css } from "styled-components";
import Button from "./Button";

const Card = ({title, intro, cta, cardStyle}) => {
  const buttonStyle = css`
    border: 2px solid black;
    margin: 0 0 20px;

    @media screen and (max-width: 991px) {
      padding: 5px 15px;
    }
  `;
  return(
    <StyledCard cardStyle={cardStyle}>
      <h2>{title}</h2>
      <p>{intro}</p>
      <Button url={cta} label="Read more" buttonStyle={buttonStyle} />
    </StyledCard>
  );
}

const StyledCard = styled.div`
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  color: black;
  text-align: center;
  .cta {
    margin: auto 0 0;
  }

  ${ ({cardStyle}) => cardStyle && `
    ${cardStyle}
  `}
`;

export default Card;