import React, { useState } from "react";
import styled from "styled-components";
import landing from "../Image/landing.jpg";
import logo from "../Image/Logo.png";
import home from "../Image/home.jpg";
import { Link, useNavigate } from "react-router-dom";
import { ColorRing } from "react-loader-spinner";
import axios from "axios";

export const Home = () => {
  const navigate = useNavigate();

  const [topic, setTopic] = useState("");
  const [language, setLanguage] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const backend = "https://backend-openai-project.onrender.com";

  const token = localStorage.getItem("Token");
  const id = localStorage.getItem("Id");

  const sharyriGen = async () => {
    setLoading(true);
    const data = {
      content: "shayri",
      language: language || "english",
      input: topic || "anything random",
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(`${backend}/generate`, data, config)
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const storyGen = async () => {
    setLoading(true);
    const data = {
      content: "story",
      language: language || "english",
      input: topic || "anything random",
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(`${backend}/generate`, data, config)
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const quotesGen = async () => {
    setLoading(true);
    const data = {
      content: "quotes",
      language: language || "english",
      input: topic || "anything random",
    };
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    await axios
      .post(`${backend}/generate`, data, config)
      .then((response) => {
        setResult(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Div>
      <div id="nav">
        <div id="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="logo" />
          <h2>शायरी की दुनिया</h2>
        </div>
        <div id="head">
          <h1>शायरी की दुनिया</h1>
        </div>
        <div id="btn">
          <div>
            <Link to={`/history/${id}`}>
              <button className="home">History</button>
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
      <div id="inputs">
        <label>Topic : </label>
        <input type="text" onChange={(e) => setTopic(e.target.value)} />

        <label>Language : </label>
        <select onChange={(e) => setLanguage(e.target.value)}>
          <option value="">Select Language</option>
          <option value="english">English</option>
          <option value="hindi">Hindi</option>
          <option value="bhojpuri">Bhojpuri</option>
          <option value="telgu">Telgu</option>
          <option value="tamil">Tamil</option>
        </select>
        <button id="shayri" onClick={sharyriGen}>
          Shayri
        </button>
        <button id="shayri" onClick={quotesGen}>
          Quotes
        </button>
        <button id="shayri" onClick={storyGen}>
          Story
        </button>
      </div>
      <div id="body">
        <div>
          {loading == true ? (
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
            />
          ) : (
            <div id="scon">
              <p>{result}</p>
            </div>
          )}
        </div>
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

  #inputs {
    color: white;
    /* border: 1px solid wheat; */
    text-align: center;
    width: 80%;
    font-size: 1.3rem;
    font-weight: 600;
    margin: auto;
  }
  #inputs input {
    margin: 1%;
    font-size: 1.2rem;
    width: 15%;
    text-align: center;
  }
  #inputs select {
    width: 15%;
    font-size: 1.2rem;
    margin: 1%;
    text-align: center;
  }
  #inputs button {
    margin: 1%;
  }

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

  #scon {
    margin: 10%;
    font-size: 2rem;
    font-weight: 750;
    color: white;
    position: relative;
    overflow: scroll;
    height: 50vh;
    text-align: center;
    justify-content: center;
    /* border: 2px solid black; */
  }

  #body {
    width: 75%;
    margin: auto;
    background-image: url(${home});
    background-size: cover;
    height: 72vh;
    border: 1px solid white;
    border-radius: 5px;

    /* border: 1px solid black; */
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, shayri) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  #body div {
    /* border: 2px solid black; */
    text-align: center;
  }

  /* CSS */
  #shayri {
    touch-action: manipulation;
    border: 0;
    border-radius: 6px;
    padding: 8px 16px;
    background-color: #b80b0bb9;
    background-image: url("https://csspro.com/css-3d-buttons/buttons-img/terrazzo-blue.png");
    background-size: 60px;
    background-position: -2px;
    box-shadow: inset 0 2px 2px rgba(255, 255, 255, 0.4),
      inset 0 -2px 1px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.2),
      0 2px 4px rgba(0, 0, 0, 0.1);
    text-align: center;
    font-weight: 500;
    color: #f5f8f9;
    text-shadow: 0 1px rgba(0, 0, 0, 0.2);
    transition-property: transform;
    transition-duration: 0.2s;
    font-size: 1.2rem;
  }

  #shayri:active {
    transform: scale(0.96);
  }

  #body img {
    width: 100%;
  }
`;
