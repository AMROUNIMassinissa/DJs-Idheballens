import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import logo from '../images/djLogo.jpg'
import SignIn from './SignIn';
import './Home1.css'
const Homa1 = () => {
    return (
        <Container fluid>
            <Row className='justify-content-center align-items-center home' style={{ height: '100vh' }}>
                <Col xs={12} sm={12} md={4}>
                    <Card style={{ backgroundColor: 'transparent' }}>
                        <Card.Img variant='top' src={logo} />
                        <Card.Body>
                            <Card.Text className='fst-italic'><span>DJs/Idheballen</span> est une plateforme qui permet de consulter la disponibilité des <span>DJs</span>
                                et des <span>Idheballen</span> pour des événements tels que des <span>mariages</span>, des fêtes et des concerts.
                                Cette plateforme <span>offre</span> aux organisateurs d'événements un moyen <span>facile</span> et <span>pratique</span> de trouver des DJs
                                et des groupes de musique disponibles dans leur région, en affichant des listes de DJs et d'idheballen avec
                                leurs dates de disponibilité. Les <span>utilisateurs</span> peuvent filtrer les résultats par genre musical, emplacement
                                et disponibilité pour trouver les options qui conviennent le mieux à leurs <span>besoins</span>.
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={12} md={8} fluid>
                    <SignIn />
                </Col>


            </Row>


        </Container>

    )
}
export default Homa1;
