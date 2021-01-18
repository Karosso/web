import { Avatar, Backdrop, Button, Card, CardActionArea, CardMedia, createStyles, Grid, makeStyles, Menu, MenuItem, Modal, Paper, Theme } from '@material-ui/core'
import Icon from '@material-ui/core/Icon'
import React, { useEffect, useState } from 'react'
import { useApp } from '../../aplplication/context/appContext/AppContext'
import logo from '../../assets/icons/logo.png'
import Fade from '@material-ui/core/Fade';
import { Login } from '../Login/Login'

import './Home.css'
import { Oportunities } from '../oportunities/Oportunities'
import { Culture } from '../culture/Culture'
import { Vocational } from '../vocacional/Vocational'
import { Future } from '../future/Future'

export const Home = () => {

  const { isLogged, setIsLogged, name, setName } = useApp()

  const [toggleModal, setToggleModal] = useState(false)

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const [modalContent, setModalContent] = useState<'enter' | 'oportunities' | 'culture' | 'vocational' | 'future' | undefined>()

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleToggleModal = () => {
    setToggleModal(!toggleModal)
  }

  const handleEnter = () => {
    setAnchorEl(null); 
    setModalContent('enter')
    handleToggleModal()
  }

  const handleModalContent = (content: any) => {
    setModalContent(content)
    handleToggleModal()
  }

  const handleOut = () => {
    setIsLogged(!isLogged);
    setAnchorEl(null);
    setName('')
  }


  return (
    <Grid container className="container">

      <Grid style={{ position: 'absolute', top: 50, left: 50, display: 'flex' }}>
        <CardMedia
          component="img"
          alt="tô dentro logo"
          image={logo}
          title="Contemplative Reptile"
          style={{ width: 80, objectFit: 'contain' }}
        />
        <h1 style={{ color: 'white', marginLeft: 20 }}>TÔ DENTRO!</h1>
      </Grid>

      <Button style={{ position: 'absolute', top: 50, right: 50 }} onClick={handleClick}>
        <Grid>
          <Icon style={{ fontSize: 80, color: 'white' }}>person</Icon>
          <h3 style={{ color: 'white', marginTop: -15 }}>{name ? name : 'Convidado'}</h3>
        </Grid>
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        {
          isLogged ?
            <>
              <MenuItem onClick={() => setAnchorEl(null)}><Icon style={{ fontSize: 20, color: 'black', marginRight: 5 }}>work_outline</Icon>Currículo</MenuItem>
              <MenuItem onClick={() => handleOut()}><Icon style={{ fontSize: 20, color: 'black', marginRight: 5 }}>keyboard_return</Icon>Sair</MenuItem>
            </>
            :
            <>
              <MenuItem onClick={() => handleEnter()}><Icon style={{ fontSize: 20, color: 'black', marginRight: 5 }}>login</Icon>Entrar</MenuItem>
              <MenuItem onClick={() => setAnchorEl(null)}><Icon style={{ fontSize: 20, color: 'black', marginRight: 5 }}>group_add_outline</Icon>Cadastrar</MenuItem>
            </>
        }

      </Menu>


      <Grid item md={6} lg={6} >
        <Paper className="buttonsContainer">
          <Button className="button" onClick={() => handleModalContent('oportunities')}>
            <Grid>
              <Icon style={{ fontSize: 80, color: 'white' }}>work_outline</Icon>
              <h3 style={{ color: 'white' }}>vagas de emprego</h3>
            </Grid>
          </Button>
        </Paper>
      </Grid>
      <Grid item md={6} lg={6} >
        <Paper className="buttonsContainer">
          <Button className="button" onClick={() => handleModalContent('culture')}>
            <Grid>
              <Icon style={{ fontSize: 80, color: 'white' }}>movie_filter</Icon>
              <h3 style={{ color: 'white' }}>espaço cultural</h3>
            </Grid>
          </Button>
        </Paper>
      </Grid>
      <Grid item md={6} lg={6} >
        <Paper className="buttonsContainer">
          <Button className="button" onClick={() => handleModalContent('vocational')}>
            <Grid>
              <Icon style={{ fontSize: 80, color: 'white' }}>assignment</Icon>
              <h3 style={{ color: 'white' }}>teste vocacional</h3>
            </Grid>
          </Button>
        </Paper>
      </Grid>
      <Grid item md={6} lg={6} >
        <Paper className="buttonsContainer">
          <Button className="button" onClick={() => handleModalContent('future')}>
            <Grid>
              <Icon style={{ fontSize: 80, color: 'white' }}>school</Icon>
              <h3 style={{ color: 'white' }}>sobre o futuro</h3>
            </Grid>
          </Button>
        </Paper>
      </Grid>




      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
        open={toggleModal}
        onClose={handleToggleModal}
        closeAfterTransition
        BackdropComponent={Backdrop}

        BackdropProps={{
          timeout: 500,
        }}
      >


          <Paper style={{ borderRadius: 10, position: 'relative' }}>
            <Button style={{ position: 'absolute', top: 10, right: 10 }} onClick={handleToggleModal}>
              <Grid>
                <Icon style={{ fontSize: 40, color: 'white' }}>clear</Icon>
              </Grid>
            </Button>

            {
              modalContent === 'enter' ?
              <Login handleToggleModal={handleToggleModal} />
              : modalContent === 'oportunities' ?
              <Oportunities handleToggleModal={handleToggleModal} />
              : modalContent === 'culture' ?
              <Culture handleToggleModal={handleToggleModal} />
              : modalContent === 'vocational' ?
              <Vocational handleToggleModal={handleToggleModal} />
              : modalContent === 'future' ?
              <Future handleToggleModal={handleToggleModal} />
              :
              <></>
            }

          </Paper>
      </Modal>



    </Grid>
  )
}
