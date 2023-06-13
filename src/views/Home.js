<<<<<<< HEAD
import {React, useEffect, useState } from "react";

=======
import {React, useEffect, useState} from 'react';
>>>>>>> ee775c244079b70844945150c60a93469add37af

const Home = () => {

    const [user, setUser] = useState({})
<<<<<<< HEAD
    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem('user'));
        if(usuarioLogado){
            setUser(usuarioLogado)
        } 
    },[])

    return(
       <h1>Seja Bem Vindo {user.nome}</h1>
    )
}

export default Home

=======

    useEffect(() => {
        const usuarioLogado = JSON.parse(localStorage.getItem("user"));
        if(usuarioLogado){
            setUser(usuarioLogado)
        }
    }, [])


    return(
        <h1>Seja Bem vindo {user.nome}</h1>
    )
}

export default Home;
>>>>>>> ee775c244079b70844945150c60a93469add37af
