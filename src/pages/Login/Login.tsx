import { Button, Card, CardActionArea, CardMedia, Grid, Menu, MenuItem, Paper, TextField } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import React, { useState } from 'react'
import logo from '../../assets/icons/logo.png'
import { useApp } from '../../aplplication/context/appContext/AppContext'

import './Login.css'
import { toast } from 'react-toastify'

interface ILoginProps {
  handleToggleModal: any
}

export const Login: React.FC<ILoginProps> = ({ handleToggleModal }) => {

  const { setIsLogged, isLogged, setName } = useApp()

  const handleClick = () => {
    setIsLogged(!isLogged)
    handleToggleModal()
    setName('Oscar')
    toast.success('Ola Oscar!')
  }

  return (
    <Grid container className="login-container" style={{ width: 500, height: 500, borderRadius: 10 }}>
      <Grid style={{ position: 'absolute', top: 20, left: 20, display: 'flex' }}>
        <CardMedia
          component="img"
          alt="tô dentro logo"
          image={logo}
          title="Contemplative Reptile"
          style={{ width: 70, objectFit: 'contain' }}
        />
        <h1 style={{ color: 'white', marginLeft: 20 }}>TÔ DENTRO!</h1>
      </Grid>
      <TextField className="login-item" variant="outlined" label="CPF / CNPJ" />
      <TextField type="password" className="login-item" variant="outlined" label="SENHA" />
      <Button onClick={() => handleClick()} className="login-item" variant="outlined"> Entrar</Button>
    </Grid>
  )
}
