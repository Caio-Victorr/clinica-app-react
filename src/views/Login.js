import React, { useState } from "react";
import axios from "axios";
import Card from "./Card";
import NavBar from "./NavBar";
import { useNavigate } from "react-router-dom";
import {messageErro } from "../utils/Toastr";

export default function Login() {

  const [login, setValues] = useState({})
  let navigate = useNavigate()

  function onChange(ev) {
    const { name, value } = ev.target;
    setValues({ ...login, [name]: value })
  }

  function onSubmit() {
    console.log("Valores ", login)

    axios.post('http://localhost:8080/librarian/login', login)
      .then(response => {
        console.log(JSON.stringify(response.data))
        localStorage.setItem("email", JSON.stringify(response.data))
        navigate("/Home")
      })
      .catch(erro => messageErro("Usuario ou Senha Invalida"))
  }
  return (
    <div>
      <NavBar />
      <div className="container my-5">
        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-6">
            <Card titulo="Login">
              <form className="container">
                <div className="form-group mt-3">
                  <label for="username">Email:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    onChange={onChange}
                    aria-describedby="text"
                    placeholder="Digite seu email email"
                  />
                </div>
                <div className="form-group mt-3">
                  <label for="password">Senha:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    name="password"
                    onChange={onChange}
                    placeholder="Senha"
                  />
                </div>
                <div className="mt-3">
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      onClick={onSubmit}
                      className="btn btn-success btn-sm"
                    >
                      Entrar
                    </button>
                    <button
                      type="reset"
                      className="btn btn-secondary btn-sm active"
                    >
                      Limpar
                    </button>
                  </div>
                  <p />
                  <div className="bg-green">
                    <h3 className="btn btn-warning btn-sm btn-block" role="button">
                      Quero me Cadastrar
                    </h3>
                  </div>
                </div>
              </form>
            </Card>
            <div className="col-sm-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}