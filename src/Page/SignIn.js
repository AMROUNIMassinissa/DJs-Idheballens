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
    MDBRow,
    MDBCol,
}
    from 'mdb-react-ui-kit';
import logo2 from '../images/logo2.png'

function SignIn() {

    const [justifyActive, setJustifyActive] = useState('tab1');;

    const handleJustifyClick = (value) => {
        if (value === justifyActive) {
            return;
        }

        setJustifyActive(value);
    };
    const [justifyActive1, setJustifyActive1] = useState('tab5');;

    const handleJustifyClick1 = (value) => {
        if (value === justifyActive1) {
            return;
        }

        setJustifyActive1(value);
    };

    return (
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50" >

            <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick1('tab5')} active={justifyActive1 === 'tab5'}>
                        Insecription
                    </MDBTabsLink>
                </MDBTabsItem>
                <MDBTabsItem>
                    <MDBTabsLink onClick={() => handleJustifyClick1('tab4')} active={justifyActive1 === 'tab4'}>
                        Connexion
                    </MDBTabsLink>
                </MDBTabsItem>
            </MDBTabs>



            <MDBTabsContent>
                <MDBTabsPane show={justifyActive1 === 'tab5'}>
                    <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
                                Utilisateur
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
                                Dj
                            </MDBTabsLink>
                        </MDBTabsItem>
                        <MDBTabsItem>
                            <MDBTabsLink onClick={() => handleJustifyClick('tab3')} active={justifyActive === 'tab3'}>
                                Idheballen
                            </MDBTabsLink>
                        </MDBTabsItem>
                    </MDBTabs>
                    <MDBTabsContent>
                        <MDBTabsPane show={justifyActive === 'tab1'}>
                            <MDBInput wrapperClass='mb-4' label='Nom' id='nom' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Prénom' id='prenom' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Num Tel' id='num' type='number' />
                            <MDBInput wrapperClass='mb-4' label='Email' id='email' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' />
                            <MDBBtn className="mb-4 w-100">Insecription</MDBBtn>
                        </MDBTabsPane>
                        <MDBTabsPane show={justifyActive === 'tab2'}>
                            <MDBInput wrapperClass='mb-4' label='Nom DJ' id='nomdj' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Num Tel' id='numdj' type='number' />
                            <MDBInput wrapperClass='mb-4' label='Email' id='emaildj' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='passworddj' type='password' />
                            <MDBBtn className="mb-4 w-100">Insecription</MDBBtn>
                        </MDBTabsPane>
                        <MDBTabsPane show={justifyActive === 'tab3'}>
                            <MDBInput wrapperClass='mb-4' label='Nom de groupe' id='nomIdh' type='text' />
                            <MDBInput wrapperClass='mb-4' label='Num Tel' id='numIdh' type='number' />
                            <MDBInput wrapperClass='mb-4' label='Email' id='emailIdh' type='email' />
                            <MDBInput wrapperClass='mb-4' label='Password' id='passwordIdh' type='password' />
                            <MDBBtn className="mb-4 w-100">Insecription</MDBBtn>
                        </MDBTabsPane>
                    </MDBTabsContent>
                </MDBTabsPane>
            </MDBTabsContent>

            <MDBTabsContent>
                <MDBTabsPane show={justifyActive1 === 'tab4'}>
                    <MDBInput wrapperClass='mb-4' label='Email' id='emailCon' type='email' />
                    <MDBInput wrapperClass='mb-4' label='Password' id='passwordCon' type='password' />
                    <MDBBtn className="mb-4 w-100">Connexion</MDBBtn>
                </MDBTabsPane>
            </MDBTabsContent>


        </MDBContainer>

    );
}

export default SignIn;