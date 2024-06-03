import styled from "styled-components";

import { SearchCard } from "../Styled";

export const StyledShowCard = styled(SearchCard)`
  .btns {
    margin-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

    a {
      text-decoration-color: #000;
      color:#f1f1f1;
      
      &:hover {
        text-decoration-color: #D81F26;
        color: #D81F26;
      }
    }
    button {
      outline: none;
      border: 1px solid #8e8e8e;
      border-radius: 15px;
      padding: 5px 20px;
      background-color: #fff;
      display: flex;
      justify-content: center;
      align-items: center;
      

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
