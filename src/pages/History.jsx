import React, { useEffect, useState } from "react";
import { Logo } from "../Routes/Logo";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import landing from "../Image/landing.jpg";
import axios from "axios";

export const History = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState([]);
  const backend = "https://backend-openai-project.onrender.com";
  const id = localStorage.getItem("Id");

  const getData = async () => {
    await axios.get(`${backend}/history/${id}`).then((res) => {
      // console.log(res);
      setResult(res.data);
    });
  };
  console.log(result);

  useEffect(() => {
    getData();
  }, []);

  return (
    <Div>
      <div id="logo" onClick={() => navigate("/")}>
        <Logo />
      </div>
      <div id="history">
        <h1>History</h1>
        <div id="data">
          {result.map((el) => (
            <li key={el._id}>
              <p>{el.body}</p>
              <p>`Date : {el.date}`</p>
            </li>
          ))}
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
  display: flex;
  gap: 5%;
  flex-direction: row;

  #logo {
    width: 25%;
    text-decoration: none;
    height: 3ch;
    /* border: 1px solid black; */ */
  }
  #history {
    width: 60%;
    text-align: center;
    margin-top: 2%;
    color: white;
    /* border: 1px solid black; */
  }
  #data {
    border: 1px solid wheat;
    margin: 3%;
    position: relative;
    overflow: scroll;
    height: 88vh;
    background-color: aliceblue;
    border-radius: 1%;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  #data li {
    margin: 1%;
    font-size: 1.2rem;
    color: blue;
  }
`;
