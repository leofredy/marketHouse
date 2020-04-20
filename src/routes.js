import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/home'
import Cadastro from './pages/Cadastro'
import Perfil from './pages/Perfil'
import Listagem from './pages/Listagem'
import Editar from './pages/Editar'
import Convidado from './pages/Convidados'
import Excluir from './pages/Excluir'

export default function Routes()
{
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ Home } />
                <Route path="/cadastrar" component={Cadastro} />
                <Route path="/empresas" component={Listagem}/>
                <Route path="/empresa" component={Convidado}/>
                <Route path="/perfil" component={Perfil}/>
                <Route path="/editar" component={Editar}/>
                <Route path="/delet" component={Excluir}/>
            </Switch>
        </BrowserRouter>
    )
}