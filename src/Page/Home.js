
import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import logo from '../images/djLogo.jpg'
import insc from '../images/insc.png'
import logo2 from '../images/logo2.png'
import './Home.css';





const StyledButton = styled(Button)({
    marginTop: '1rem',
});

const Home = () => {
    const [formValues, setFormValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormValues((prevValues) => ({
            ...prevValues,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Faites quelque chose avec les données du formulaire
    };

    return (

        <Grid container spacing={1} className='home' >
            <Grid item xs={12} sm={12} md={4}>
                <img src={logo} alt="" className='logo' />

                <Typography variant="body1" style={{ color: '#000000' }} className='desc'>
                    <span>DJs/Idheballen</span> est une plateforme qui permet de consulter la disponibilité des <span>DJs</span>
                    et des <span>Idheballen</span> pour des événements tels que des <span>mariages</span>, des fêtes et des concerts.
                    Cette plateforme <span>offre</span> aux organisateurs d'événements un moyen <span>facile</span> et <span>pratique</span> de trouver des DJs
                    et des groupes de musique disponibles dans leur région, en affichant des listes de DJs et d'idheballen avec
                    leurs dates de disponibilité. Les <span>utilisateurs</span> peuvent filtrer les résultats par genre musical, emplacement
                    et disponibilité pour trouver les options qui conviennent le mieux à leurs <span>besoins</span>.


                </Typography>


            </Grid>
            <Grid item xs={12} sm={12} md={3}>
                <img src={insc} alt="" className='' />

                <form onSubmit={handleSubmit}>
                    <TextField
                        fullWidth
                        required
                        name="firstName"
                        label="Prénom"
                        value={formValues.firstName}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        required
                        name="lastName"
                        label="Nom de famille"
                        value={formValues.lastName}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        required
                        name="email"
                        type="email"
                        label="Adresse email"
                        value={formValues.email}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        required
                        name="password"
                        type="password"
                        label="Mot de passe"
                        value={formValues.password}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <Box textAlign="center">
                        <StyledButton type="submit" variant="contained" color="primary">
                            S'inscrire
                        </StyledButton>
                    </Box>
                </form>
            </Grid>
            <Grid item xs={12} sm={12} md={2}><img src={logo2} alt="" className='logo2' /></Grid>

            <Grid item xs={12} sm={12} md={3} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                <form action="">
                    <TextField
                        fullWidth
                        required
                        name="email"
                        type="email"
                        label="Adresse email"
                        value={formValues.email}
                        onChange={handleChange}
                        margin="normal"
                    />
                    <TextField
                        fullWidth
                        required
                        name="password"
                        type="password"
                        label="Mot de passe"
                        value={formValues.password}
                        onChange={handleChange}
                        margin="normal"
                    />
                </form>
            </Grid>

        </Grid>


    );
};

export default Home;