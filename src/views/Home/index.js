import React from 'react';
import './style.css';

export default class Home extends React.Component {
    render() {
        return (
            <div className='search-banner'>
                <div className='container-fluid'>
                    <nav className='navbar navbar-expand-lg navbar-dark'>
                        <a className='navbar-brand' href='#'>
                            <i className="fas fa-paw fa-2x"></i>
                        </a>
                        <button className='navbar-toggler' type='button' data-toggler='collapse' data-target='#content-navbar'>
                            <span className='navbar-toggler-icon'></span>
                        </button>
                        <div className='collapse navbar-collapse' id='content-navbar'>
                            <ul className='navbar-nav ml-auto'>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>Ajuda</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>Cadastrar-se</a>
                                </li>
                                <li className='nav-item'>
                                    <a className='nav-link' href='#'>Entrar</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <div className='form-container'>
                        <h4 className='h4 text-center'>Fofinho ou bravinho, adote um bichinho By Keke Carneira</h4>
                        <form>
                            <div className='form-group'>
                                <label htmlFor='cidade'>Cidade</label>
                                <input id='cidade' className='form-control' />
                            </div>
                            <div className='form-group'>
                                    <label htmlFor='especie'>Espécie</label>
                                    <select id='especie' className='form-control'>
                                        <option>Gato</option>
                                        <option>Cachorro</option>
                                    </select>
                                </div>
                            <div className='form-group'>
                                <label htmlFor='tamanho'>Tamanho</label>
                                <select id='tamanho' className='form-control'>
                                    <option>Pequeno</option>
                                    <option>Médio</option>
                                    <option>Grande</option>
                                </select>
                            </div>
                            <div className='form-group'>
                                <label htmlFor='genero'>Genero</label>
                                <select id='genero' className='form-control'>
                                    <option>Macho</option>
                                    <option>Fêmea</option>
                                </select>
                            </div>
                        </form>
                        <button className='btn btn-primary float-right'>
                            <i className="fas fa-search"></i> Pesquisar
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}
