import { Fragment, useState, useEffect } from "react";
import Axios from 'axios';
import { Avatar, Card, CardHeader, Grid, IconButton, CardMedia, Container, CardContent, Typography, TextField } from "@mui/material";
import { RiDeleteBin3Line } from '@remixicon/react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Player } from '@lottiefiles/react-lottie-player';

function Home() {
  const [employees, setEmployees] = useState([]);
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const res = await Axios.get('http://localhost:5000/employees');
        setEmployees(res.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchEmployees();
  }, []);

  const deleteEmployee = async (id) => {
    try {
      await axios.delete('http://localhost:5000/employees/' + id);
      setEmployees(employees.filter(employee => employee.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  const filteredEmployees = employees.filter(employee =>
    employee.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Container>
      {employees.length === 0 ? (
        <div>
          <p>No data yet</p>
          <Player
            autoplay
            loop
            src="https://lottie.host/bd2e5c27-e31d-441f-8f15-b6e890a6a895/cItwLqB3E7.json"
            style={{ marginTop: '30vh', height: '300px', objectFit: 'cover' }}
          />
        </div>
      ) : (
        <Fragment>
          <div style={{ transform: 'translateY(10vh)' }}>
            <TextField
              label={'Search...'}
              value={query}
              onChange={handleSearch}
        
            />
          </div>
          <Grid container sx={{ marginTop: '150px' }} spacing={3}>
            {filteredEmployees.map(employee => (
              <Grid item lg={4} key={employee.id}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar sx={{ background: 'red' }}>
                        {employee.name[0].toUpperCase()}
                      </Avatar>
                    }
                    title={employee.name}
                    subheader="Employee Details"
                    action={
                      <IconButton onClick={() => deleteEmployee(employee.id)}>
                        <RiDeleteBin3Line />
                      </IconButton>
                    }
                  />
                  <CardMedia
                    component="img"
                    height="194"
                    image={employee.photo}
                    alt={employee.name}
                  />
                  <CardContent style={{ color: '#a39e9e' }}>
                    <Typography>{employee.email}</Typography>
                    <Typography>{employee.phoneNumber}</Typography>
                    <Typography>{employee.position}</Typography>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                      <button
                        onClick={() => navigate(`/${employee.id}/update`)}
                        className="add-btn"
                        style={{ paddingInline: '12em' }}
                      >
                        Edit
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Fragment>
      )}
    </Container>
  );
}

export default Home;
