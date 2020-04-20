import React from 'react'
import {Link} from 'react-router-dom'
import { MdPerson, MdStore, MdSettingsPower } from 'react-icons/md'
import logoImg from '../../img/logo.svg'
import perfil from '../../img/perfil.png'
import logoIF from '../../img/ifLogo.png'
import '../css/estilos-gerais.css'
import '../css/painel/perfil.css'

export default function Excluir()
{
    return(
        <div>
            <header>
                <section className="market-topo">
                    <div className="row align-justify">
                        <div className="columns small-6 large-3">
                            <img src={logoImg} alt=""/>
                        </div>
                        <div className="columns small-3 flex-container align-middle align-justify">
                            <div className="">
                                <Link to="/empresas">
                                    <MdStore size={45} color="#FFF" style={{marginTop: 15}}/>
                                </Link>
                            </div>
                            <div className="">
                                <Link to="/perfil">
                                    <MdPerson size={45} color="#FFF" style={{marginTop: 15}}/>
                                </Link>
                            </div>
                            <div className="">
                                <Link to="/">
                                    <MdSettingsPower size={45} color="#FFF" style={{marginTop:15}}/>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
            </header>
            <main className="market">
                <section className="">
                    <div className="row align-center">
                        <div className="columns small-12 text-center">
                            <img src={perfil} alt=""/>
                        </div>
                        <div className="columns small-12 medium-5">
                            <div className="perfil-formulario">
                                <div className="perfil-excluir-box">

                                    <div className="formulario-box-item">
                                        <label for="">CNPJ</label>
                                        <input type="text" name=""/>
                                    </div>
                                    <div className="formulario-box-item">
                                        <label for="">Senha</label>
                                        <input type="password" name=""/>
                                    </div>

                                </div>
                            </div>
                            <div className="perfil-botoes">
                                <div className="perfil-botoes-box">
                                    <button type="button" name="button" className="perfil-botoes-cancelar">Cancelar</button>
                                    <button type="button" name="button" className="perfil-botoes-salvar">Excluir</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
            <footer>
                <div className="row">
                    <div className="columns small-12">
                        <div className="market-footer">
                            <p className="market-footer-p">Desenvolvido pela equipe Inova Tecno - com apoio do IFSP -INSTITUTO FEDERAL DE EDUCAÇÃO CIÊNCIA E TECNOLOGIA DE SÃO PAULO
                            </p>
                            <img src={logoIF} alt=""/>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}