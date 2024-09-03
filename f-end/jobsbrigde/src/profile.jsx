import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Nav from './nav';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';
import FormPropsTextFields from './input';
import Footer from './footer';
import { jwtDecode } from 'jwt-decode';


const Profile = () => {
    const [profile, setProfile] = useState(null);
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [school, setSchool] = useState("");
    const [university, setUniversity] = useState("");
    const [age, setAge] = useState("");
    const [resumePath, setResumePath] = useState("");
    const [skill1, setSkill1] = useState("");
    const [skill2, setSkill2] = useState("");
    const [skill3, setSkill3] = useState("");
    const [skill4, setSkill4] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);







    const fetchProfile = async () => {
        const token = localStorage.getItem('authToken');
        
        if (!token) {
            console.error('No token found, please log in');
            setError('No token found, please log in');
            setLoading(false);
            return;
        }

        const decoded = jwtDecode(token);
        const userEmail = decoded.email;

        // alert(userEmail);

        try {
            const response = await axios.get('http://localhost:3000/' + userEmail, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = response.data;

            setProfile(data);
            setFname(data.fname);
            setLname(data.lname);
            setEmail(data.email);
            setAddress(data.address || "");
            setSchool(data.school || "");
            setUniversity(data.university || "");
            setAge(data.age || "");
            setResumePath(data.resumePath || "");
            setSkill1(data.skills[0] || "");
            setSkill2(data.skills[1] || "");
            setSkill3(data.skills[2] || "");
            setSkill4(data.skills[3] || "");
        } catch (err) {
            console.error('Failed to fetch profile:', err);
            setError('Failed to fetch profile');
        } finally {
            setLoading(false);
        }
    };





    useEffect(() => {
        fetchProfile();
    }, []);

    const handleUpdate = async () => {
      

        alert("Profile updated successfully!");
        
    };


    return (
        <div className='col-12'>
            <div className="row" style={{ margin: 0 }}>
                <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12 text-center">
                    {/* {profile && ( */}
                        <div>
                            <div className="vh-100" style={{ backgroundColor: '#eee' }}>
                                <MDBContainer className="container py-5 h-100">
                                    <MDBRow className="justify-content-center align-items-center h-100">
                                        <MDBCol md="12" className='col-12'>
                                            <MDBCard style={{ borderRadius: '15px' }} className='col-12'>
                                                <MDBCardBody className="text-center">
                                                    <div className="mt-3 mb-4">
                                                        <MDBCardImage
                                                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                                            className="rounded-circle"
                                                            fluid
                                                            style={{ width: '100px' }}
                                                        />
                                                    </div>
                                                    {/* <MDBTypography tag="h4">{fname + " " + lname}</MDBTypography> */}
                                                    <MDBTypography tag="h4">Full Name</MDBTypography>
                                                    <MDBCardText className="text-muted mb-4">
                                                        Looking for a Good Opportunity
                                                    </MDBCardText>
                                                    <div className="mb-4 pb-2">
                                                        <MDBBtn outline floating>
                                                            <MDBIcon fab icon="facebook" size="lg" />
                                                        </MDBBtn>
                                                        <MDBBtn outline floating className="mx-1">
                                                            <MDBIcon fab icon="twitter" size="lg" />
                                                        </MDBBtn>
                                                        <MDBBtn outline floating>
                                                            <MDBIcon fab icon="skype" size="lg" />
                                                        </MDBBtn>
                                                    </div>
                                                    <a
                                                        className="btn btn-primary"
                                                    // href={profile.resumePath}
                                                    >
                                                        Download My Resume&nbsp;
                                                        <i className="fa-solid fa-angles-down fa-bounce fa-sm"></i>
                                                    </a>
                                                </MDBCardBody>
                                            </MDBCard>
                                        </MDBCol>
                                    </MDBRow>
                                </MDBContainer>
                            </div>
                        </div>
                    {/* )} */}
                </div>
                <div className="col-lg-6 col-md-6 col-xl-6 col-xxl-6 col-sm-12 mb-2 mt-5">
                    <div className="col-12">
                        <div className="row" style={{ margin: 0 }}>
                            <div className="col-6">
                                <FormPropsTextFields
                                    holder="First Name"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <FormPropsTextFields
                                    holder="Last Name"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row" style={{ margin: 0 }}>
                            <div className="col-12">
                                <FormPropsTextFields
                                    holder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row" style={{ margin: 0 }}>
                            <div className="col-12">
                                <FormPropsTextFields
                                    holder="Address"
                                    value={address}
                                    onChange={(e) => setAddress(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row" style={{ margin: 0 }}>
                            <div className="col-6">
                                <FormPropsTextFields
                                    holder="School"
                                    value={school}
                                    onChange={(e) => setSchool(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <FormPropsTextFields
                                    holder="University"
                                    value={university}
                                    onChange={(e) => setUniversity(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row" style={{ margin: 0 }}>
                            <div className="col-12">
                                <FormPropsTextFields
                                    holder="Age"
                                    value={age}
                                    onChange={(e) => setAge(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row" style={{ margin: 0 }}>
                            <div className="col-6">
                                <FormPropsTextFields
                                    holder="Skill 1"
                                    value={skill1}
                                    onChange={(e) => setSkill1(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <FormPropsTextFields
                                    holder="Skill 2"
                                    value={skill2}
                                    onChange={(e) => setSkill2(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row" style={{ margin: 0 }}>
                            <div className="col-6">
                                <FormPropsTextFields
                                    holder="Skill 3"
                                    value={skill3}
                                    onChange={(e) => setSkill3(e.target.value)}
                                />
                            </div>
                            <div className="col-6">
                                <FormPropsTextFields
                                    holder="Skill 4"
                                    value={skill4}
                                    onChange={(e) => setSkill4(e.target.value)}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="row" style={{ margin: 0 }}>
                            <div className="col-12">
                                <button
                                    className='btn btn-dark col-12 mt-3'
                                    onClick={handleUpdate}
                                >
                                    Update Data
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Nav />
            <Footer />
        </div>
    );
};

export default Profile;
