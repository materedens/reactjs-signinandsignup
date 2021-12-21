import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const Signin = () => {
    const paperStyle={padding:50,height:'40vh',width:400,margin:"80px auto",backgroundColor:'#619bfb42'}
    const avatarStyle={backgroundColor:'#1bbd7e'}
    const btnStyle={margin:'8px 0'}
    const textfieldStyle={margin:'10px'}
    return (
        <Grid>
             <Paper elevation={10} style={paperStyle} >

                 <Grid align='center'>
                 <Avatar style={avatarStyle}><LockOutlinedIcon/></Avatar>
                    <h2>Sign In</h2>
                 </Grid>
                 <TextField label='Username' placeholder='Enter Username' fullWidth required style={textfieldStyle}/>
                 <TextField label='Password' placeholder='Enter Password' type='password' style={textfieldStyle} fullWidth required/>
                 <FormControlLabel
                    control={
                    <Checkbox
                        name="checkedB"
                        color="primary"
                    />
                    }
                    label="Remember me"
                 />
                 <Button type='submit' color='primary' variant='contained' style={btnStyle} fullWidth>Sign In</Button>
                 <Typography>
                 <Link href="#">
                       Forgot Password ?
                 </Link>
                 </Typography>
                 <Typography> Do you have an account ?
                 <Link href="#">
                       Sign In
                 </Link>
                 </Typography>
             </Paper>
        </Grid>
    )
}

export default Signin
