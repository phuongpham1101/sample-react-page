import styled, { css } from "styled-components";

import { Container } from "../../styles";
import Button from "../Button";

const SearchPanel = ({person, action, cta}) => {

  const personSelect = person.map((identity, index) =>
    <option key={index}>{identity}</option>
  );

  const actionSelect = action.map((act, index) =>
    <option key={index}>{act}</option>
  );

  const buttonStyle = css`
    background-color: var(--red);
    border: 2px solid var(--red);
    color: white;
  `;

  return(
    <StyledSearchPanel>
      <Container>
        <h1>How can we help you?</h1>
        <p className="intro">Let us know who you are and what you're looking for, and we'll help get you to the right place</p>
        <div class="search">
          I am <select>{personSelect}</select> and I want <select>{actionSelect}</select>
          <Button {...cta} buttonStyle={buttonStyle} />
        </div>
      </Container>
    </StyledSearchPanel>
  );
}

const StyledSearchPanel = styled.section`
  background-color: var(--light-grey);
  padding: 50px 0;
  .intro {
    font-size: 20px;
  }
  .search{
    display: flex;
    justify-content: center;
    align-items: center;

    background-color: white;
    padding: 30px;
    font-size: 20px;
    select {
      border: 0;
      border-bottom: 2px solid var(--blue);
      color: var(--blue);
      margin: 0 10px;
      font-size: 20px;
      font-weight: bold;
    }
  }
`;

export default SearchPanel;