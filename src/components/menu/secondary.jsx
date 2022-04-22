import styled, {css} from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Container } from '../../styles';

const SecondaryMenu = ({menu}) => {
  const menuItems = menu.map((item, index) => 
    <li key={index}>{item}</li>
  );

  const flexContainerStyle = css`
    justify-content: space-between;
    align-items: center;
  `;

  return(
    <StyledSecondaryMenu>
      <Container flex={true} containerStyle={flexContainerStyle}>
        <div className='search'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
          <span> Search</span>
        </div>
        <div className='secondary-menu'>
          <ul>{menuItems}</ul>
        </div>
      </Container>
    </StyledSecondaryMenu>
  );
}

const StyledSecondaryMenu = styled.div`
  border-bottom: 1px solid var(--light-grey);
  .search {
    border-left: 1px solid var(--light-grey);
    border-right: 1px solid var(--light-grey);
    padding: 5px 20px;
  }
  .secondary-menu li{
    text-align: center;
    
    &:first-of-type {
      border-left: 1px solid var(--light-grey);
      border-right: 1px solid var(--light-grey);
      border-bottom: 3px solid var(--green);
    }
    &:last-of-type {
      background-color: var(--red);
      color: white;
    }
  }
`;

export default SecondaryMenu;