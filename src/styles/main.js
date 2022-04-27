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

  nav.mobile {
    background: #000;
    padding: 15px;
    text-align: center;

    ul {
      flex-direction: column;
    }

    a {
      color: #fff;
    }
  }

  @media screen and (max-width: 992px) {
    header {
      .menu-icon {
        display: inline-block;
      }
      nav.desktop-menu {
        display: none;
      }
    }
  }
`;

export default main;