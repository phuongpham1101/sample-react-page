import { css } from 'styled-components';

const main = css`
  header {
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      li {
        padding: 5px 20px;
      }
    }

    .logo {
      max-width: 200px;
      padding: 10px 0;
    }
  }
`;

export default main;