import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
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
                    <Paper className='paper-form' elevation={3}>
                        <h4 className='h4 text-center'>Fofinho ou bravinho, adote um bichinho By Keke Carneira</h4>
                        <form className='search-form'>
                            <div className=''>
                                <TextField label='Cidade' className='full-width'/>
                            </div>  
                            <div className='mt-4'>
                                <FormControl className='full-width'>
                                    <InputLabel>Espécie</InputLabel>
                                    <Select>
                                        <MenuItem value='gato'>Gato</MenuItem>
                                        <MenuItem value='cachorro'>Cachorro</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='mt-4'>
                                <FormControl className='full-width'>
                                    <InputLabel>Porte</InputLabel>
                                    <Select>
                                        <MenuItem value='pequeno'>Pequeno</MenuItem>
                                        <MenuItem value='medio'>Médio</MenuItem>
                                        <MenuItem value='grande'>Grande</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                            <div className='mt-4'>
                                <FormControl className='full-width'>
                                    <InputLabel>Gênero</InputLabel>
                                    <Select>
                                        <MenuItem value='macho'>Macho</MenuItem>
                                        <MenuItem value='femea'>Fêmea</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </form>
                        <Button variant='contained' color='primary' className='mt-4'>
                            Pesquisar
                        </Button>
                    </Paper>
                </div>
            </div>
        );
    }
}
