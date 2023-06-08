import React, { useState } from "react";
import axios from "axios";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { mensagemSucesso, mensagemErro } from "../utils/Toastr";
//import { mensagemSucesso, mensagemErro } from "./utils/toastr";

export default function Login() {

    const [login, setValues] = useState({})
    let navigate = useNavigate()

    function onChange(ev) {
        const { name, value } = ev.target;
        setValues({ ...login, [name]: value })
    }

    function onSubmit() {
        console.log("Valores ", login)

        axios.post('http://localhost:8080/login', login)
            .then(response => {
                console.log(JSON.stringify(response.data))
                localStorage.setItem("user", JSON.stringify(response.data))
                navigate("/home")
            })
            .catch(erro => mensagemErro("Login o Senha Invalida"))
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <h2 className="navbar-brand">Navbar</h2>
                </div>
            </nav>
            <div className="container my-5" >
                <div className="row">
                    <div className="col-sm-3"></div>
                    <div className="col-sm-6">
                        <Card>
                            <h3 className="text-center">Login</h3>
                            <form className="container">
                                <div className="form-group">
                                    <label for="username">Usuário:</label>
                                    <input type="text"
                                        className="form-control"
                                        id="username"
                                        name="usuario"
                                        onChange={onChange}
                                        placeholder="Digite seu usuário ou Email" />
                                </div>
                                <div className="form-group">
                                    <label for="password">Senha:</label>
                                    <input type="password"
                                        className="form-control"
                                        id="password"
                                        name="senha"
                                        onChange={onChange}
                                        placeholder="Digite sua senha" />
                                </div>
                                <button type="button"
                                    onClick={onSubmit}
                                    className="btn btn-secondary btn-sm">Entrar</button>
                                <button type="reset" className="btn btn-secondary btn-sm">Limpar</button>
                                <p />
                                <div>
                                    <h3 className="btn btn-primary btn-sm btn-block" role="button">Quero me Cadastrar</h3>
                                </div>
                            </form>
                        </Card>
                        <div className="col-sm-3"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}