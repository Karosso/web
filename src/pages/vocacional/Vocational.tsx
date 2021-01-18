import { Button, Card, CardActionArea, CardMedia, Grid, Menu, MenuItem, Paper, TextField } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import React, { useState } from 'react'
import logo from '../../assets/icons/logo.png'
import { useApp } from '../../aplplication/context/appContext/AppContext'

import './Vocational.css'

interface IVocationalProps {
  handleToggleModal: any
}

export const Vocational: React.FC<IVocationalProps> = ({ handleToggleModal }) => {

  const { setIsLogged, isLogged } = useApp()

  const handleClick = () => {
    setIsLogged(!isLogged)
    handleToggleModal()
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
      <h1>Teste vocacional</h1>

    </Grid>
  )
}
