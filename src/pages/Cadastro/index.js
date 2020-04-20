import React, { useState } from 'react'
import { Link, useHistory} from 'react-router-dom'
import './styles.css'
import '../home/global.css'
import logoImg from '../../img/logo.svg'
import bannerHome from '../../img/banner.png'
import ifLogo from '../../img/ifLogo.png'

import api from '../../services/api'

export default function Cadastro()
{
    const History = useHistory()

    const [name, setName] = useState('')
    const [cnpj, setCNPJ] = useState('')
    const [tipo_empresa, setTipo_empresa] = useState('')
    const [endereco, setEndereco] = useState('')
    const [city, setCity] = useState('')
    const [uf, setUf] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [horario, setHorario] = useState('')
    const [descricao, setDescricao] = useState('')
    const [senha, setSenha] = useState('')
    const bairro ='teste'
    const numero = 'teste'
    
    async function handleCadastro(e)
    {
        e.preventDefault();
       const data = 
            {
                cnpj,
                senha,
                name,
                tipo_empresa,
                endereco,
                city,
                uf,
                email,
                telefone,
                horario,
                descricao,
                bairro,
                numero
            }
        const response = await api.post('/create', data)

        if(response.data === 'Conta criada')
        {
            alert('Conta criada com sucesso')
            
            History.push('/')
        }
        else if(response.data === 'nome já existe')
        {
            alert('Erro ao cadastrar: nome já existe tente')
        }
        else if(response.data === 'cnpj já existe')
        {
            alert('Erro ao cadastrar: cnpj já existe')
        }
        else if (response.data.error === 'Preencha todos os campos')
        {
            alert('Erro ao cadastrar: preencha todos os campos')
        }
        else
        {
            alert('Erro ao cadastrar: nome e cnpj já existe')
            console.log(response.data)
        }
    }
    
    return(
        <div className="body">
        <header>
            <section className="market-topo">
            <div className="row align-justify">
                <div className="columns small-6 large-3">
                <img src={logoImg} alt="Market House"/>
                </div>
                <div className="columns small-6 large-3 flex-container align-middle">
                <div className="market-topo-entrar">
                    <Link to="/empresa" className="market-topo-entrar-link market-topo-entrar-link-page">Entrar como convidado</Link>
                </div>
                </div>
            </div>
            </section>
        </header>
        <main className="market">
            <section>
            <div className="row">
                <div className="columns small-12 large-6">
                <div className="market-left">
                    <img src={bannerHome} alt="Banner MarketHouse"/>
                    <p className="market-left-p">Faça seus negócio no conforto da sua casa </p>
                    <div className="market-topo-entrar hide-for-large market-topo-entrar-page">
                    
                    </div>
                </div>
                </div>
                <div className="columns small-12 large-6">
                <form className="market-form" onSubmit={handleCadastro}>
                    <div className="market-form-cadastro">
                    <div className="market-form-boxCadastro">
                        <label className="market-form-label">
                        <span>Nome da empresa</span>
                        <i className="material-icons">
                            storefront
                        </i>
                        </label>
                        <input type="text" placeholder="Digite seu CPJ ou CNPJ" className="market-form-input" value={name} onChange={ e => setName(e.target.value)} />
                    </div>
                    <div className="market-form-container">
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>CNPJ</span>
                            <i className="material-icons">
                            account_circle
                            </i>
                        </label>
                        <input type="text" placeholder="Digite seu o CPJ da empresa" className="market-form-input" value={cnpj} onChange={e => setCNPJ(e.target.value)} />
                        </div>
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>Tipo da empresa</span>
                            <i className="material-icons">
                            storefront
                            </i>
                        </label>
                        <input type="text" placeholder="açaiteria, hambuergueria, etc.." className="market-form-input" value={tipo_empresa} onChange={e =>setTipo_empresa(e.target.value)} />
                        </div>
                    </div>
                    <div className="market-form-container">
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>Endereço</span>
                            <i className="material-icons">
                            room
                            </i>
                        </label>
                        <input type="text" placeholder="Nº da casa, rua" className="market-form-input market-form-input-medio" value={endereco} onChange={e =>setEndereco(e.target.value)} />
                        </div>
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>Cidade</span>
                            <i className="material-icons">
                            room
                            </i>
                        </label>
                        <input type="text" placeholder="açaiteria, hambuergueria, etc.." className="market-form-input market-form-input-medio" value={city} onChange={e =>setCity(e.target.value)} />
                        </div>
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>Uf</span>
                            <i className="material-icons">
                            room
                            </i>
                        </label>
                        <select className="market-form-input market-form-inputMenor" value={uf} onChange={e =>setUf(e.target.value)}>
                            <option value="">UF</option>
                            <option value="SP">SP</option>
                            <option value="MG">MG</option>
                        </select>
                        </div>
                    </div>
                    <div className="market-form-container">
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>Email</span>
                            <i className="material-icons">
                            mail
                            </i>
                        </label>
                        <input type="email" placeholder="exemplo@exemplo.com" className="market-form-input" value={email} onChange={e =>setEmail(e.target.value)} />
                        </div>
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>Telefone</span>
                            <i className="material-icons">
                            local_phone
                            </i>
                        </label>
                        <input type="text" placeholder="(18) 99999-9999" className="market-form-input" value={telefone} onChange={e =>setTelefone(e.target.value)} />
                        </div>
                    </div>
                    <div className="market-form-container">
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>Horário de funcionamento:</span>
                        </label>
                        <textarea name="name" rows="2" cols="80" className="market-form-textArea" value={horario} onChange={e =>setHorario(e.target.value)} >Seg - Sex: 07:00 às 17:30 Sab - Dom: 08:00 às 16:30</textarea>
                        </div>
                    </div>
                    <div className="market-form-container">
                        <div className="market-form-box-cadastro">
                        <label className="market-form-label">
                            <span>Descrição curta: </span>
                        </label>
                        <textarea name="name" rows="2" cols="80" className="market-form-textArea" value={descricao} onChange={e =>setDescricao(e.target.value)} >Descreva em poucas palavras sua empresa</textarea>
                        </div>
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
                        <Link to="/"className="market-form-botoes-voltar">Voltar</Link>
                        <button className="market-form-botoes-cadastrar" type="submit" >Continuar</button>
                    </div>
                </form>
                
                <div className="market-mensagem">
                    <p className="market-mensagem1">Juntos contra o COVID-19</p>
                    <p className="market-mensagem2"><span>#</span>FiqueEmCasa</p>
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
                <img src={ifLogo} alt="Logo IFSP"/>
                </div>
            </div>
            </div>
        </footer>
        </div>
    )
}


