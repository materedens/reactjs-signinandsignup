import React from 'react'
import {Grid, Paper, Avatar, Typography, TextField, Button, Link} from '@mui/material'
import { FormControlLabel } from '@mui/material';
import { Checkbox } from '@mui/material';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
const Signup = () => {
    const paperStyle={padding: '30px 20px', width: 500, margin: "40px auto", backgroundColor:'#f9f6f6'}
    const avatarStyle={backgroundColor: '#1bbd7e' }
    const headerStyle={margin: 0}
    const textfieldStyle={margin:'10px'}
    return (
        <Grid>
            <Paper elevation={20} style={paperStyle} >
                <Grid align='center'>
                    <Avatar style={avatarStyle}><AccountCircleOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant='caption' gutterBottom>Please fill this form to create an account !</Typography>
                    <Typography>Do you have an account ?
                        <Link href="#">
                       Sign In
                        </Link>
                    </Typography>
                </Grid>
                <form>
                <TextField label='FirstName' placeholder='Enter firstname' fullWidth required style={textfieldStyle}/>
                <TextField label='LastName' placeholder='Enter lastname' fullWidth required style={textfieldStyle}/>
                <TextField label='Email' placeholder='Enter Email' fullWidth required style={textfieldStyle}/>
                <TextField label='Password' placeholder='Enter password' type='password' fullWidth required style={textfieldStyle}/>
                <TextField label='Confirm Password' placeholder='Confirm password' type='password' fullWidth required style={textfieldStyle}/>
                <FormControlLabel
                    control={<Checkbox name="checkedA" />}
                    label="I accept the terms and conditions." fullWidth
                />
                <Button type='submit' variant='contained' color='primary' fullWidth>Sign Up</Button>
                </form>
            </Paper>
        </Grid>
    )
}

export default Signup
