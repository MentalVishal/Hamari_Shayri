import React from "react";
import logo from "../Image/Logo.png";
import styled from "styled-components";

export const Logo = () => {
  return (
    <Div>
      <div id="logos">
        <img src={logo} alt="logo" />
        <h2>शायरी की दुनिया</h2>
      </div>
    </Div>
  );
};

const Div = styled.div`
  #logos {
    width: 100%;
    text-align: center;
    /* border: 1px solid wheat; */
  }
  #logos img {
    width: 50%;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  #logos h2 {
    color: #fbfbfb;
  }
`;
