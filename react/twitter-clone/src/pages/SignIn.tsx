import {Button, FormControl, FormGroup, makeStyles, TextField, Typography} from "@material-ui/core";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import React, {useState} from "react";
import {ModalBlock} from "../components/ModalBlock";

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    backgroundColor: '#71c9f8',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
    position: 'relative',
    overflow: 'hidden',
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '50%',
    width: '350%',
    height: '350%',
    transform: 'translate(-50%, -50%)',
  },
  blueSideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
    width: 380,
    '& h6': {
      display: 'flex',
      alignItems: 'start',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    }
  },
  blueSideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  blueSideListInfoItem: {
    marginBottom: 40,
  },
  loginSide: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flex: '0 0 50%',
  },
  loginSideTwitterIcon: {
    fontSize: 48,
    color: '#1da1f2',
  },
  loginSideWrapper: {
    width: 380
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18
  },
  registerField: {
    marginBottom: theme.spacing(2)
  },
  loginFormControl: {
    marginBottom: theme.spacing(2)
  }
}))

export const SignIn: React.FC = ():React.ReactElement => {
  const classes = useStylesSignIn()
  const [visibleModal, setVisibleModal] = useState<'signIn' | 'signUp'>()

  const handleClickOpenSignIn = (): void => {
    setVisibleModal('signIn')
  }

  const handleClickOpenSignUp = (): void => {
    setVisibleModal('signUp')
  }

  const handleCloseModal = (): void => {
    setVisibleModal(undefined)
  }


  return (
    <div className={classes.wrapper}>
      <section className={classes.blueSide}>
        <TwitterIcon color="primary" className={classes.blueSideBigIcon} />
        <ul className={classes.blueSideListInfo}>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blueSideListInfoIcon} /> Lorem ipsum dolor sit amet, consectetur.
            </Typography>
          </li>
          <li className={classes.blueSideListInfoItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blueSideListInfoIcon} /> Lorem ipsum dolor sit amet, consectetur adipisicing.
            </Typography>
          </li>
          <li>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon className={classes.blueSideListInfoIcon} /> Lorem ipsum dolor sit.
            </Typography>
          </li>
        </ul>
      </section>
      <section className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon color="primary" className={classes.loginSideTwitterIcon} />
          <Typography variant="h4" className={classes.loginSideTitle}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</Typography>
          <Typography><strong>Lorem ipsum dolor sit amet</strong></Typography>
          <br />
          <Button onClick={handleClickOpenSignUp} style={{marginBottom: 20}} variant="contained" color="primary" fullWidth>Register</Button>
          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>Login</Button>

          <ModalBlock visible={visibleModal === 'signIn'} onClose={handleCloseModal} classes={classes} title={"Login to"}>
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  margin="normal"
                  id="email"
                  label="Email Address"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="email"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  margin="normal"
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="password"
                  variant="filled"
                  fullWidth
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                  Enter
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>

          <ModalBlock visible={visibleModal === 'signUp'} onClose={handleCloseModal} classes={classes} title={"Create account"}>
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  margin="normal"
                  id="name"
                  label="Name"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="name"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  margin="normal"
                  id="email"
                  label="Email"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="email"
                  variant="filled"
                  fullWidth
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  margin="normal"
                  id="password"
                  label="Password"
                  InputLabelProps={{
                    shrink: true
                  }}
                  type="password"
                  variant="filled"
                  fullWidth
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                  Next
                </Button>
              </FormGroup>
            </FormControl>
          </ModalBlock>
        </div>
      </section>
    </div>
  )
}
