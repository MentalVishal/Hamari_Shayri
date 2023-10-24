import React from "react";
import { Route, Routes } from "react-router-dom";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Home } from "../pages/Home";
import { Landing } from "../pages/Landing";
import { History } from "../pages/History";
import { PrivateRoute } from "./PrivateRoute";

export const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/" element={<Landing />} />
      <Route path="/history/:id" element={<History />} />
    </Routes>
  );
};
