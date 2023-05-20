import React from "react";

import { MDBCard, MDBCardImage, MDBCardBody, MDBCardText } from "mdb-react-ui-kit";
import logo from '../images/djLogo.jpg'



const Logo = () => {
    return (
        <MDBCard style={{ backgroundColor: 'transparent' }}>
            <MDBCardImage src={logo}></MDBCardImage>
            <MDBCardBody style={{ color: 'orangered', backgroundColor: 'white' }}>
                <MDBCardText className='fst-italic'>
                    <span>DJs/Idheballen</span> est une plateforme qui permet de consulter la disponibilité des <span>DJs</span> et des <span>Idheballen</span> pour des événements
                    tels que des <span>mariages</span>,
                    des fêtes et des concerts.
                    Cette plateforme <span>offre</span> aux organisateurs d'événements un moyen <span>facile</span> et <span>pratique</span> de trouver des DJs
                    et des groupes de musique disponibles dans leur région, en affichant des listes de DJs et d'idheballen avec
                    leurs dates de disponibilité. Les <span>utilisateurs</span> peuvent filtrer les résultats par genre musical, emplacement
                    et disponibilité pour trouver les options qui conviennent le mieux à leurs <span>besoins</span>.
                </MDBCardText>
            </MDBCardBody>

        </MDBCard>
    )
}
export default Logo;