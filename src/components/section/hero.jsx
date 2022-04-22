import styled from "styled-components";
import Button from "../Button"
import { Container }from "../../styles";
import { css } from "styled-components";

const Hero = ({imgURL, layout="small", content}) => {

  return(
    <StyledHero heroImage={imgURL}>
    {
      {
        'big': <BigHeroContent {...content} />,
        'small': <SmallHeroContent header={content.header} />
      }[layout]
    }
    </StyledHero>
  );
}

const BigHeroContent = ({header, intro, cta}) => {
  const containerStyle = css`
    flex-direction: column;
    align-items: flex-start;
  `;
  return(
    <Container flex={true} containerStyle={containerStyle}>
      <h1 className="header">{header}</h1>
      <p className="intro">{intro}</p>
      <Button {...cta} />
    </Container>
  );

}

const SmallHeroContent = ({header}) => {
  const containerStyle = css`
    align-items: center;
    justify-content: center;
  `;
  <Container flex={true} containerStyle={containerStyle}>
    <h1 className="header">{header}</h1>
  </Container>
}

const StyledHero = styled.section`
  ${ ({heroImage}) => heroImage && `
    background-image: url( ${heroImage} );
  `}
  ${ ({center}) => center && `
    display: flex;
    justify-content: center;
    align-items: center;
  `}
  background-size: cover;
  background-repeat: no-repeat;
  background-color: var(--blue);
  padding: 80px 0;
  
  .header {
    font-size: clamp(40px, 5vw, 100px);
    background-color: var(--blue);
    color: white;
    padding: 10px 20px 20px;
  }

  .intro {
    padding: 20px;
    background-color: white;
    color: var(--green);
    max-width: 50%;
    font-size: 20px;
  }
`;

export default Hero;