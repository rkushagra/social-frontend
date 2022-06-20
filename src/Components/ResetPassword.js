import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import { useDispatch, useSelector } from 'react-redux';
// import { register } from '../actions/auth';
// import { useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify'; //toast
import 'react-toastify/dist/ReactToastify.css';

function Copyright(props) {
  return (
    <Typography
      variant='body2'
      color='text.secondary'
      align='center'
      {...props}
    >
      {'Copyright © '}
      <Link color='inherit' href='https://mui.com/'>
        ConnectBook
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUpSide() {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();

  // const { loading, isSuccess, error } = useSelector((state) => state.auth);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('hiii');
    // const data = new FormData(event.currentTarget);
    // console.log({
    //   email: data.get('email'),
    //   password: data.get('password'),
    // });
    // const name = data.get('firstName') + ' ' + data.get('lastName');
    // dispatch(register(name, data.get('email'), data.get('password')));
  };

  // const CustomToastWithLink = () => (
  //   <div>
  //     Account created successfully
  //     <a href='/'>Sign In</a>
  //   </div>
  // );

  // useEffect(() => {
  //   if (isSuccess) {
  //     toast.info(CustomToastWithLink);
  //   }
  //   if (error) {
  //     toast.error(error);
  //   }
  // }, [isSuccess, error]);

  return (
    <ThemeProvider theme={theme}>
      <Container component='main' maxWidth='xs'>
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Reset Password
          </Typography>
          <Box
            component='form'
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <ToastContainer />

            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='oldPassword'
                label='Old Password'
                name='password'
                type='password'
                autoComplete='old-password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='New Password'
                type='password'
                id='newpassword'
                autoComplete='new-password'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                label='Repeat New Password'
                type='password'
                id='repeatpassword'
                autoComplete='repeat-password'
              />
            </Grid>
            {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value='allowExtraEmails' color='primary' />
                  }
                  label='I want to receive inspiration, marketing promotions and updates via email.'
                />
              </Grid> */}
            <Button
              type='submit'
              fullWidth
              variant='contained'
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
