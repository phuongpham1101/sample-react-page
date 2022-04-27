import styled from 'styled-components';

const Container = styled.div`
  padding: 0 8px;
  margin: auto;

  ${ ({flex = false, containerStyle = {}}) => flex && `
    display: flex;
    ${containerStyle}
  `}

  @media (min-width: 576px) {
    max-width: 540px;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1140px;
  }

  @media (min-width: 1400px) {
    max-width: 1320px;
  }
`;

export default Container;