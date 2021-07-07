import styled from "styled-components";

export const NavListStyled = styled.nav`
  background-color: burlywood;
  border-bottom: 3px solid red;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 15px;
  margin-bottom: 10px;

  ul {
    display: flex;
  }

  .classNeActiv {
    color: #000280;
  }

  .classActive {
    color: red;
  }
`;
