import React, { useState } from 'react';
import {
    MDBContainer,
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBBtn,
    MDBInput,
}
    from 'mdb-react-ui-kit';
import axios from 'axios';


function SignIn() {



    const [justifyActive, setJustifyActive] = useState('tab1');
    const [justifyActive1, setJustifyActive1] = useState('tab5');

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const [formData, setFormData] = useState({
        nom: '',
        prenom: '',
        num: '',
        email: '',
        password: '',
    });

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };

    const handleJustifyClick1 = (value) => {
        if (value === justifyActive1) {
            return;
        }

        setJustifyActive1(value);
    };
    const endpoint = 'http://localhost:4000/api/user';
    const handleRegistration = async () => {
        try {
            const response = await axios.post(endpoint, formData);
            console.log('User created:', response.data);
            // Vous pouvez mettre à jour l'état ou afficher un message de succès ici
        } catch (error) {
            console.error('Error creating user:', error);
            // Afficher un message d'erreur ou gérer l'erreur ici
        }
    };



    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column "   >

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick1('tab5')} active={justifyActive1 === 'tab5'} style={{
                        backgroundColor: justifyActive1 === 'tab5' ? 'white' : 'transparent',
                        color: justifyActive1 === 'tab5' ? 'orange' : 'white',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        border: '1px solid white'

                    }}>
                        Insecription
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick1('tab4')} active={justifyActive1 === 'tab4'} style={{
                        backgroundColor: justifyActive1 === 'tab4' ? 'white' : 'transparent',
                        color: justifyActive1 === 'tab4' ? 'orange' : 'white',
                        fontSize: '16px',
                        fontWeight: 'bold',
                        border: '1px solid white'

                    }} >
                        Connexion
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>



            <MDBTabsContent>
                <MDBTabsPane show={justifyActive1 === 'tab5'}>
                    <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'} style={{
                                backgroundColor: justifyActive === 'tab1' ? 'white' : 'transparent',
                                color: justifyActive === 'tab1' ? 'orange' : 'white',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                border: '1px solid white'

                            }}>
                                Utilisateur
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'} style={{
                                backgroundColor: justifyActive === 'tab2' ? 'white' : 'transparent',
                                color: justifyActive === 'tab2' ? 'orange' : 'white',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                border: '1px solid white'

                            }}>
                                Dj
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'} style={{
                                backgroundColor: justifyActive === 'tab3' ? 'white' : 'transparent',
                                color: justifyActive === 'tab3' ? 'orange' : 'white',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                border: '1px solid white'

                            }}>
                                Idheballen
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                    <MDBTabsContent>
                        <MDBTabsPane show={justifyActive === 'tab1'}>
                            <form>
                                <MDBInput wrapperClass='mb-4' label='Nom' id='nom' type='text' name='nom' value={formData.nom} onChange={handleInputChange} required />
                                <MDBInput wrapperClass='mb-4' label='Prénom' id='prenom' type='text' name='prenom' value={formData.prenom} onChange={handleInputChange} required />
                                <MDBInput wrapperClass='mb-4' label='Num Tel' id='num' type='number' name='num' value={formData.num} onChange={handleInputChange} required />
                                <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' name='email' value={formData.email} onChange={handleInputChange} required />
                                <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' name='password' value={formData.password} onChange={handleInputChange} required />
                                <MDBBtn className="mb-4 w-100" style={{
                                    backgroundColor: 'white', color: 'orange', fontSize: '16px',
                                    fontWeight: 'bold'
                                }} type='submit' onClick={handleRegistration}>Insecription1</MDBBtn>
                            </form>
                        </MDBTabsPane>
                        <MDBTabsPane show={justifyActive === 'tab2'}>
                            <form>
                                <MDBInput wrapperClass='mb-4' label='Nom DJ' id='nomdj' type='text' />
                                <MDBInput wrapperClass='mb-4' label='Num Tel' id='numdj' type='number' />
                                <MDBInput wrapperClass='mb-4' label='Email' id='emaildj' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Password' id='passworddj' type='password' />
                                <MDBBtn className="mb-4 w-100" style={{
                                    backgroundColor: 'white', color: 'orange', fontSize: '16px',
                                    fontWeight: 'bold'
                                }}>Insecription</MDBBtn>
                            </form>
                        </MDBTabsPane>
                        <MDBTabsPane show={justifyActive === 'tab3'}>
                            <form>
                                <MDBInput wrapperClass='mb-4' label='Nom de groupe' id='nomIdh' type='text' />
                                <MDBInput wrapperClass='mb-4' label='Num Tel' id='numIdh' type='number' />
                                <MDBInput wrapperClass='mb-4' label='Email' id='emailIdh' type='email' />
                                <MDBInput wrapperClass='mb-4' label='Password' id='passwordIdh' type='password' />
                                <MDBBtn className="mb-4 w-100" style={{
                                    backgroundColor: 'white', color: 'orange', fontSize: '16px',
                                    fontWeight: 'bold'
                                }}>Insecription</MDBBtn>
                            </form>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBTabsPane>
            </MDBTabsContent>

            <MDBTabsContent>
                <MDBTabsPane show={justifyActive1 === 'tab4'}>
                    <form>
                        <MDBInput wrapperClass='mb-4' label='Email' id='emailCon' type='email' />
                        <MDBInput wrapperClass='mb-4' label='Password' id='passwordCon' type='password' />
                        <MDBBtn className="mb-4 w-100" style={{
                            backgroundColor: 'white', color: 'orange', fontSize: '16px',
                            fontWeight: 'bold'
                        }}>Connexion</MDBBtn>
                    </form>
                </MDBTabsPane>
            </MDBTabsContent>


        </MDBContainer>

    );
}

export default SignIn;