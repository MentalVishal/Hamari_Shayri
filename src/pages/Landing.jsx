import React from "react";
import styled from "styled-components";
import landing from "../Image/landing.jpg";
import logo from "../Image/Logo.png";
import shayri from "../Image/shayri.png";
import { Link } from "react-router-dom";

export const Landing = () => {
  return (
    <Div>
      <div id="nav">
        <div id="logo">
          <img src={logo} alt="logo" />
          <h2>शायरी की दुनिया</h2>
        </div>
        <div id="head">
          <h1>शायरी की दुनिया</h1>
        </div>
        <div id="btn">
          <div>
            <Link to={"/home"}>
              <button className="home">Home</button>
            </Link>
          </div>
          <div>
            <Link to={"/login"}>
              <button className="buttons">Login</button>
            </Link>
          </div>
          <div>
            <Link to={"/register"}>
              <button className="buttons">Sign Up</button>
            </Link>
          </div>
        </div>
      </div>

      <br />
      <br />
      <div id="body">
        <img src={shayri} alt="" />
      </div>
    </Div>
  );
};

const Div = styled.div`
  * {
    padding: 0%;
    margin: 0%;
  }
  background-image: url(${landing});
  background-size: cover;
  height: 100vh;

  #logo {
    width: 20%;
    text-align: center;
    /* border: 1px solid wheat; */
  }
  #logo img {
    width: 50%;
    height: 70%;
    border-radius: 50%;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
  #logo h2 {
    color: #fbfbfb;
  }
  #nav {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    gap: 5%;
    /* border: 1px solid red; */
  }
  #head {
    width: 60%;
    border: 2px solid wheat;
    text-align: center;
    margin: auto;
    font-size: 130%;
    font-weight: 900;
    color: #fbfbfb;
  }
  #head h1 {
    margin: 2%;
  }

  #btn {
    /* border: 2px solid white; */
    width: 30%;
    display: flex;
    margin: 1%;
    justify-content: center;
    flex-direction: row;
    gap: 2%;
  }

  /* CSS */
  .home {
    touch-action: manipulation;
    display: inline-block;
    outline: none;
    font-family: inherit;
    font-size: 1em;
    box-sizing: border-box;
    border: none;
    border-radius: 0.3em;
    height: 2.75em;
    line-height: 2.5em;
    text-transform: uppercase;
    padding: 0 1em;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(110, 80, 20, 0.4),
      inset 0 -2px 5px 1px rgba(139, 66, 8, 1),
      inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
    background-image: linear-gradient(
      160deg,
      #a54e07,
      #b47e11,
      #fef1a2,
      #bc881b,
      #a54e07
    );
    border: 1px solid #a55d07;
    color: rgb(120, 50, 5);
    text-shadow: 0 2px 2px rgba(250, 227, 133, 1);
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    background-size: 100% 100%;
    background-position: center;
  }
  .home:focus,
  .home:hover {
    background-size: 150% 150%;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23),
      inset 0 -2px 5px 1px #b17d10, inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
    border: 1px solid rgba(165, 93, 7, 0.6);
    color: rgba(120, 50, 5, 0.8);
  }
  .home:active {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(110, 80, 20, 0.4),
      inset 0 -2px 5px 1px #b17d10, inset 0 -1px 1px 3px rgba(250, 227, 133, 1);
  }

  /* CSS */
  .buttons {
    padding: 12px 26px;
    border: 0;
    font-size: 16px;
    transition: all 150ms ease-in-out;

    border-radius: 14px;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 1px 0px 0px inset,
      rgba(0, 0, 0, 0.07) 0 1px 1px, rgba(0, 0, 0, 0.07) 0 2px 2px,
      rgba(0, 0, 0, 0.07) 0 4px 4px;
    font-weight: 600;

    color: #fff;
    background-color: #010313;
    background-image: radial-gradient(
        50% 50% at 50% 100%,
        #371b7e 0%,
        transparent 100%
      ),
      radial-gradient(50% 50% at 50% 0%, #371b7e 0%, transparent 100%);
  }

  .buttons:hover {
    filter: brightness(1.5) saturate(1.3);
  }

  .buttons:active {
    transform: scale(0.95);
  }

  #body {
    width: 75%;
    margin: auto;
    border-radius: 5px;
    /* border: 1px solid black; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  #body img {
    width: 100%;
    border-radius: 5px;
  }
`;
