import React, { useState } from 'react'
import './styles.css'
import './global.css'
import './foundation.css'
import logoImg from '../../img/logo.svg'
import bannerHome from '../../img/banner.png'
import ifLogo from '../../img/ifLogo.png'
import {Link, useHistory } from 'react-router-dom'

import api from '../../services/api'

export default function Home()
{
    const [cnpj, setCNPJ] = useState('')
    const [senha, setSenha] = useState('')
    const History = useHistory()
    async function hadleLogin(e)
    {
        
        e.preventDefault()
        const response = await api.post('/', {
            cnpj,
            senha
        })
        
        if(response.data === 'Usuário ou senha inválida!!')
        {
            alert('Usuário ou senha inválida!!')
        }
        else
        {
            localStorage.setItem('nome', response.data.name)
            localStorage.setItem('email', response.data.email)
            localStorage.setItem('cidade', response.data.city)
            localStorage.setItem('estado', response.data.uf)
            localStorage.setItem('telefone', response.data.telefone)
            localStorage.setItem('tipo', response.data.tipo_empresa)
            localStorage.setItem('horario', response.data.horario)
            localStorage.setItem('descricao', response.data.descricao)
            History.push('/empresas')
        }
    }
    return (

        <div className="body">
            <header>
                <section className="market-topo">
                    <div className="row align-justify">
                        <div className="columns small-6 large-3">
                            <img src={logoImg} alt="Market House"/>
                        </div>
                        <div className="columns small-6 large-3 flex-container align-middle">
                            <div className="market-topo-entrar">
                                <Link to="/empresa" className="market-topo-entrar-link">Entrar como convidado</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <div className="market">
                <section>
                    <div className="row">
                        <div className="columns small-12 large-6">
                            <div className="market-left">
                                <img src={bannerHome} alt="Banner Home"></img>
                                <p className="market-left-p">Faça seus negócio no conforto da sua casa </p>
                            </div>
                        </div>
                        <div className="columns small-12 large-6">
                            <form className="market-form" onSubmit={hadleLogin}>
                                <div className="market-form-login">
                                    <div className="market-form-box-login">
                                        <label className="market-form-label">
                                            <span>CPF/CNPJ</span>
                                            <i className="material-icons">
                                                account_circle
                                            </i>
                                        </label>
                                        <input type="text" placeholder="Digite seu CPJ ou CNPJ" className="market-form-input" value={cnpj} onChange={ e => setCNPJ(e.target.value)} />
                                    </div>
                                    <div className="">
                                        <label className="market-form-label">
                                            <span>Senha</span>
                                            <i className="material-icons">
                                                lock
                                            </i>
                                        </label>
                                        <input type="password" placeholder="Digite sua senha" className="market-form-input" value={senha} onChange={e =>setSenha(e.target.value)} />
                                        
                                        
                                    </div>
                                </div>

                                <div className="market-form-botoes">
                                    <button type="submit" className="market-form-botoes-login" >Login</button>
                                    <Link to="/cadastrar" className="market-form-botoes-cadastrar">Cadastrar</Link>
                                </div>
                            </form>

                            <div className="market-mensagem">
                                <p className="market-mensagem1">Juntos contra o COVID-19</p>
                                <p className="market-mensagem2"><span>#</span>FiqueEmCasa</p>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <footer>
                <div className="row">
                    <div className="columns small-12">
                        <div className="market-footer">
                            <p className="market-footer-p">Desenvolvido pela equipe Inova Tecno - com apoio do IFSP -INSTITUTO FEDERAL DE EDUCAÇÃO CIÊNCIA E TECNOLOGIA DE SÃO PAULO
                            </p>
                            <img src={ifLogo} alt="Instituto Federal"/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
