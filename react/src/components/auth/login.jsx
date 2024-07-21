import { Container, Grid, TextField } from '@mui/material';
import { RiUserLine } from '@remixicon/react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login_form() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmits = () => {
        const user = { username, email, password };
        localStorage.setItem('user_auth', JSON.stringify(user));
        navigate('/'); 
        window.location.reload(); 
    };

    return (
        <Container sx={{ marginTop: '30vh' }}>
            <Grid container className="d-flex justify-content-center">
                <Grid item lg={4}>
                    <div className='p-4 card rounded border-0 shadow'>
                        <div className="d-flex justify-content-center">
                            <div className='p-3 login-icon shadow'>
                                <RiUserLine size={40} />
                            </div>
                        </div>
                        <div style={{ transform: 'translateY(-30px)' }}>
                            <div className='text-center h5'>
                                Sign Up
                            </div>
                            <TextField
                                label="Username"
                                fullWidth
                                onChange={e => setUsername(e.target.value)}
                            />
                            <TextField
                                label="Email"
                                fullWidth
                                className="my-3"
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                fullWidth
                                onChange={e => setPassword(e.target.value)}
                            />
                        </div>
                        <div className="d-flex justify-content-center">
                            <button className='btn' style={{
                                background: '#667BC6',
                                color: 'white',
                                paddingInline: '8.5em'
                            }}
                                onClick={handleSubmits}
                            >Sign Up</button>
                        </div>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Login_form;
