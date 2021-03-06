import styled, { css } from "styled-components";

import Button from "../Button";

const TextImagePanel = ({img, content}) => {
  const buttonStyle = css`
    border: 2px solid white;
    color: white;
    background: transparent;
  `;
  return(
    <StyledTextImagePanel>
      <div className="img">
        <img src={img.url} alt={img.alt} />
      </div>
      <div className="content">
        <h1 className="header">{content.header}</h1>
        <p className="intro">{content.intro}</p>
        <Button {...content.cta} buttonStyle={buttonStyle} />
      </div>
    </StyledTextImagePanel>
  );
}

const StyledTextImagePanel = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1;
  .img {
    width: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .content {
    height: auto;
    min-height: 100%;

    padding: 30px;
    background-color: var(--green);
    color: white;

    display: flex;
    flex-direction: column;
    justify-content: center;
    flex: 1;

    .header {
      font-size: 40px;
    }

    .intro {
      font-size: 20px;
    }
  }

  @media screen and (min-width: 1024px) {
    flex-direction: row;
    .img {
      width: 50%;
    }
    .content {
      width: 50%;
    }
  }
`;

export default TextImagePanel;