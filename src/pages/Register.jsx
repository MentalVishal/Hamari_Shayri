import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import landing from "../Image/landing.jpg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Logo } from "../Routes/Logo";

export const Register = () => {
  const backend = "https://backend-openai-project.onrender.com";
  const navigate = useNavigate();

  const notifyPass = () => {
    toast.error("Password Mismatch", {
      position: "top-right",
      theme: "colored",
    });
  };

  const notifyreq = () => {
    toast.error("Fill the Form", {
      position: "top-right",
      theme: "colored",
    });
  };

  const notifySucess = () => {
    toast.success("Register Sucessfully...!", {
      position: "top-right",
      theme: "colored",
    });
  };

  const notifyError = () => {
    toast.error("Something Went Wrong", {
      position: "top-right",
      theme: "colored",
    });
  };
  const notifyExist = () => {
    toast.error("Already Exist...! Try Login", {
      position: "top-right",
      theme: "colored",
    });
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
  });

  function handleInput(e) {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value });
  }

  const handelSubmit = async () => {
    if (
      form.name == "" ||
      form.password == "" ||
      form.email == "" ||
      form.confirmPassword == ""
    ) {
      notifyreq();
      return;
    }

    if (form.password !== form.confirmPassword) {
      notifyPass();
      return;
    }
    const payload = {
      email: form.email,
      password: form.password,
      name: form.name,
    };
    await axios
      .post(`${backend}/user/register`, payload)
      .then((res) => {
        console.log(res);
        if (res.data.msg === "user has been registered successfully") {
          notifySucess();
          setTimeout(() => {
            navigate("/login");
          }, 2500);
        } else if (res.data.msg === "User Already Exist, Please Login...!") {
          notifyExist();
        }
      })
      .catch((err) => {
        console.log(err);
        notifyError();
      });
  };

  return (
    <LogoDiv>
      <div id="logo" onClick={() => navigate("/")}>
        <Logo />
      </div>
      <div id="body">
        <center>
          <h1 style={{ color: "white" }}>New User Register Here...</h1>
        </center>
        <Div id="form">
          <input
            type="text"
            placeholder="Name"
            name="name"
            onChange={handleInput}
            value={form.name}
            required={true}
          />
          <br />
          <input
            type="email"
            placeholder="Email"
            onChange={handleInput}
            name="email"
            value={form.email}
          />

          <div>
            <input
              type="password"
              placeholder="Password"
              name="password"
              onChange={handleInput}
              value={form.password}
            />
          </div>

          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            onChange={handleInput}
            value={form.confirmPassword}
          />
          <button id="submit" onClick={handelSubmit}>
            SignUp
          </button>
          <br />
          <br />
          <p>
            <Link to={"/login"}>Already Register? Login</Link>
          </p>
        </Div>
      </div>
      <ToastContainer />
    </LogoDiv>
  );
};

const LogoDiv = styled.div`
  * {
    padding: 0%;
    margin: 0%;
  }
  background-image: url(${landing});
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: row;

  #logo {
    width: 25%;
    text-decoration: none;
    /* border: 1px solid black; */
  }
  #body {
    width: 60%;
    margin-top: 2%;
    /* border: 1px solid blue; */
  }
`;

const Div = styled.div`
  margin: auto;
  width: 65%;
  padding: 5% 2%;
  background-color: whitesmoke;
  border-radius: 5px;

  /* border: 1px solid blue; */
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  margin-top: 2%;
  input {
    width: 100%;
    font-size: 1.6rem;
    font-weight: 550;
    align-items: center;
    justify-content: center;
    text-align: center;
    height: 3rem;
    border-radius: 5px;

    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    margin: auto;
    margin-top: 3%;
    margin-bottom: 3%;
  }
  #submit {
    width: 100%;
    padding: 2%;
    margin-top: 5%;
    background-color: blue;
    color: white;
    font-size: 1.4rem;
    font-weight: 600;
    border-radius: 5px;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px;
  }
  #pass {
    box-shadow: rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,
      rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;
    margin: auto;
    margin-top: 3%;
    height: 3rem;
  }
  #icon {
    padding: 2%;
  }
  p {
    color: blue;
    text-decoration: none;
    font-size: 1.3rem;
  }
  Link {
    text-decoration: none;
  }
`;
