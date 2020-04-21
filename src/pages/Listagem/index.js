import React, {useState, useEffect} from 'react'
import '../css/painel/listagem.css'
import '../css/estilos-gerais.css'
import { MdPerson, MdStore, MdSettingsPower } from 'react-icons/md'
import logoImg from '../../img/logo.svg'
import market from '../../img/market.svg'
import logoIF from '../../img/ifLogo.png'
import { Link, useHistory } from 'react-router-dom'

import api from '../../services/api'


export default function Perfil() {

    const History = useHistory()
    const [empresas, setEmpresas] = useState([])
    let next = 4

    async function loadEmpresas()
    {
        const response = await api.get('/empresas')
        setEmpresas(response.data)
        console.log(response.headers['totalempresas'])
    }
    async function loadPagina1()
    {
        const response = await api.get('/empresas?page=1')
        setEmpresas(response.data)
    }
    async function loadPagina2()
    {
        const response = await api.get('/empresas?page=2')
        setEmpresas(response.data)
    }
    async function loadPagina3()
    {
        const response = await api.get('/empresas?page=3')
        setEmpresas(response.data)
    }
    async function loadPaginaNext()
    {
        next +=1
        const response = await api.get(`/empresas?page=${next}`)
        setEmpresas(response.data)
    }
    async function loadPaginaVolta()
    {
        next -= 1
        const response = await api.get(`/empresas?page=${next}`)
        setEmpresas(response.data)
    }
    async function loadPaginaNext2()
    {
        next += 2
        const response = await api.get(`/empresas?page=${next}`)
        setEmpresas(response.data)
    }
    async function loadPaginaVolta2()
    {
        next -= 2
        const response = await api.get(`/empresas?page=${next}`)
        setEmpresas(response.data)
    }



    useEffect( () => {
        loadEmpresas()
    
    }, [])

    async function handleLogout()
    {
        localStorage.clear()
        History.push('/')
    }

    return (
        <div>
            <header>
                <section className="market-topo">
                    <div className="row align-justify">
                        <div className="columns small-6 large-3">
                            <Link to="/">
                                <img src={logoImg} alt=""/>
                            </Link>
                        </div>
                        <div className="columns small-3 flex-container align-middle align-justify">
                            <div className="">
                                <MdStore size={45} color="#FFF" style={{marginTop: 15}}/>
                            </div>
                            <div className="">
                                <Link to="/perfil">
                                    <MdPerson size={45} color="#FFF" style={{marginTop: 15}}/>
                                </Link>
                            </div>
                            <div className="">
                                <button onClick={handleLogout}>
                                    <MdSettingsPower size={45} color="#FFF" style={{marginTop: 15}}/>
                                </button>
                            </div> 
                        </div>
                    </div>
                </section>
            </header>
            <main className="market">
                <div className="row align-center">
                    <div className="columns small-10">

                        <div className="filtros">
                            <p className="filtro-text">
                                Filtros:
                            </p>
                            <ul className="filtros-container">
                                <li href="" className="filtros-container-item">
                                    <span>Estado</span>
                                
                                    <i className="material-icons">arrow_drop_down</i>
                                    <ul className="filtros-container-sub">
                                        <li className="filtros-container-sub-item">AC</li>
                                        <li className="filtros-container-sub-item">AL</li>
                                        <li className="filtros-container-sub-item">AP</li>
                                        <li className="filtros-container-sub-item">AM</li>
                                        <li className="filtros-container-sub-item">BA</li>
                                        <li className="filtros-container-sub-item">CE</li>
                                        <li className="filtros-container-sub-item">DF</li>
                                        <li className="filtros-container-sub-item">ES</li>
                                        <li className="filtros-container-sub-item">GO</li>
                                        <li className="filtros-container-sub-item">MA</li>
                                        <li className="filtros-container-sub-item">MT</li>
                                        <li className="filtros-container-sub-item">MS</li>
                                        <li className="filtros-container-sub-item">MG</li>
                                        <li className="filtros-container-sub-item">PA</li>
                                        <li className="filtros-container-sub-item">PB</li>
                                        <li className="filtros-container-sub-item">PR</li>
                                        <li className="filtros-container-sub-item">PE</li>
                                        <li className="filtros-container-sub-item">PI</li>
                                        <li className="filtros-container-sub-item">RJ</li>
                                        <li className="filtros-container-sub-item">RN</li>
                                        <li className="filtros-container-sub-item">RS</li>
                                        <li className="filtros-container-sub-item">RO</li>
                                        <li className="filtros-container-sub-item">RR</li>
                                        <li className="filtros-container-sub-item">SC</li>
                                        <li className="filtros-container-sub-item">SP</li>
                                        <li className="filtros-container-sub-item">SE</li>
                                        <li className="filtros-container-sub-item">TO</li>
                                    </ul>
                                </li>
                                <li href="/empresas" className="filtros-container-item">
                                    <span>Cidade</span>
                                    <i className="material-icons">arrow_drop_down</i>
                                </li>
                                <li href="/empresas" className="filtros-container-item">
                                    <span>Tipo</span>
                                    <i className="material-icons">arrow_drop_down</i>
                                    <ul className="filtros-container-sub">
                                        <li className="filtros-container-sub-item">Empresas</li>
                                        <li className="filtros-container-sub-item">Serviços</li>
                                    </ul>
                                </li>
                                <li href="/empresas" className="filtros-container-item">
                                    <span>Categoria</span>
                                    <i className="material-icons">arrow_drop_down</i>
                                    <ul className="filtros-container-sub">
                                        <li className="filtros-container-sub-item">Açaíteria</li>
                                        <li className="filtros-container-sub-item">Açougue</li>
                                        <li className="filtros-container-sub-item">Água</li>
                                        <li className="filtros-container-sub-item">Cosmético</li>
                                        <li className="filtros-container-sub-item">Eletrônicos</li>
                                        <li className="filtros-container-sub-item">Fármacia</li>
                                        <li className="filtros-container-sub-item">Informática</li>
                                        <li className="filtros-container-sub-item">Marmitaria</li>
                                        <li className="filtros-container-sub-item">Padaria</li>
                                        <li className="filtros-container-sub-item">Papelaria</li>
                                        <li className="filtros-container-sub-item">Restaurante</li>
                                        <li className="filtros-container-sub-item">Saúde</li>
                                        <li className="filtros-container-sub-item">Supermercado</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div className="filtros-selecionados">
                        </div>

                    </div>
                </div>
                <ul className="row">
                    {empresas.map(informacoes => (
                        <li key={informacoes.cnpj} className="columns small-6 large-4">
                        <div className="box-empresa">
                            <div className="text-center">
                                <img src={market} alt=""/>
                            </div>
                            <p className="text-center box-empresa-nome">{informacoes.name}</p>
                            <p className="box-empresa-cidade">{informacoes.city} - {informacoes.uf} </p>
                            <p className="box-empresa-endereco">{informacoes.endereco} </p>
                            <div className="box-empresa-categoria">
                                <div className="box-empresa-categoria-item">
                                    <span>{informacoes.tipo_empresa}</span>
                                </div>
            
                            </div>

                        </div>
                    </li>
                    ))}
                </ul>
                <div className="row align-right">
                    <div className="columns small-12 large-4">
                        <div className="box-paginacao">
                            <button onClick={loadPaginaVolta2} className="paginacao-item">
                                <i className="material-icons">
                                    skip_previous
                                </i>
                            </button>
                            <button onClick={loadPaginaVolta} className="paginacao-item">
                                <i className="material-icons">
                                    arrow_left
                                </i>
                            </button>
                            <button onClick={loadPagina1} className="paginacao-item">
                                <span>1</span>
                            </button>
                            <button onClick={loadPagina2} className="paginacao-item">
                                <span>2</span>
                            </button>
                            <button onClick={loadPagina3} className="paginacao-item">
                                <span>3</span>
                            </button>
                            <button onClick={loadPaginaNext} className="paginacao-item">
                                <i className="material-icons">
                                    arrow_right
                                </i>
                            </button>
                            <button onClick={loadPaginaNext2} className="paginacao-item">
                                <i className="material-icons">
                                    skip_next
                                </i>
                            </button>
                        </div>
                    </div>
                </div>

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