import { Fragment, useEffect, useState } from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
import { useNavigate, useParams } from 'react-router-dom';
import Axios from "axios";

function Update_Form() {
    const [name, setEmployeeName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [position, setPosition] = useState('');
    const [photo, setPhoto] = useState('');
    const navigate = useNavigate();
    const { id } = useParams();

    const getUser = async () => {
        try {
            const res = await Axios.get(`http://localhost:5000/employees/${id}`);
            const data = await res.data;
            setEmployeeName(data.name);
            setEmail(data.email);
            setPhoneNumber(data.phoneNumber);
            setPosition(data.position);
            setPhoto(data.photo);
        } catch (error) {
            console.error(error);
        }
    };

    const handle_submits = async () => {
        try {
            const employee = {
                name,
                email,
                phoneNumber,
                position,
                photo,
                date: new Date().toString()
            };
            await Axios.patch(`http://localhost:5000/employees/${id}`, employee);
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getUser();
    }, []);

    return (
        <Fragment>
            <div style={{ marginTop: "150px" }}>
                <Container>
                    <Grid container sx={{ display: "flex", justifyContent: "center" }}>
                        <Grid item lg={4} sx={{ padding: '25px', borderRadius: '6px', boxShadow: "-5px 0px 16px 0px rgba(0,0,0,0.1)" }}>
                            <TextField 
                                label={name}
                                fullWidth
                                multiline
                                required
                                onChange={e => setEmployeeName(e.target.value)}
                            />
                            <TextField 
                                value={email}
                                fullWidth
                                multiline
                                required
                                sx={{ marginBlock: '15px' }}
                                onChange={e => setEmail(e.target.value)}
                            />
                            <TextField 
                                label={phoneNumber}
                                fullWidth
                                multiline
                                required
                                onChange={e => setPhoneNumber(e.target.value)}
                            />
                            <TextField 
                                label={position}
                                fullWidth
                                multiline
                                required
                                sx={{ marginBlock: '15px' }}
                                onChange={e => setPosition(e.target.value)}
                            />
                            <input type="file" style={{ marginBlock: '10px' }} onChange={e => {
                                let filee = e.target.files[0];
                                let reader = new FileReader();
                                reader.onloadend = () => {
                                    setPhoto(reader.result);
                                    sessionStorage.setItem('photo', reader.result);
                                };
                                reader.readAsDataURL(filee);
                            }} className="fileZone" />
                            <div className="submit-btn">
                                <Button variant="contained" color="primary" disableElevation sx={{ paddingInline: '10em' }} onClick={handle_submits}> Update </Button>
                            </div>
                        </Grid>
                    </Grid>
                </Container>
            </div>
        </Fragment>
    );
}

export default Update_Form;
