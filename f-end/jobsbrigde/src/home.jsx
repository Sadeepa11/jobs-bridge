import { useEffect } from "react";
import AnimeBtn from "./animatedBtn";
import Footer from "./footer";
import "./home.css";
import Nav from "./nav";
import { useNavigate } from "react-router-dom";


function Home() {

    const navigate = useNavigate();




    const viewJobs = async () => {

        window.location.href = `/FindJobs`;
       
        // const token = localStorage.getItem('authToken');
    
        // if (!token) {
        //     throw new Error('User not logged in');
        // }
    
        
        // const user = JSON.parse(atob(token.split('.')[1])); 
        // const userEmail = user.email; 
        
        // window.location.href = `/FindJobs`;
        // window.location.href = `/findJobs?email=${encodeURIComponent(userEmail)}`;

       
        
    };

    return (

        <div className="col-12">



            <div className="col-12 bg">

                <div className="row" style={{ margin: '0' }}>

                    <div className="col-lg-6 col-xl-6 col-xxl-6 col-md-12 col-md-12  vh-100">

                        <div className="row">
                            <div className="col-12 text-start p-5">
                                <h1 className="animated-text text-light">Welcome to JobsBrigde</h1>
                                <br />
                                <h2 className='animated-text2 text-white'>Your Gateway to Career Success</h2>
                                <br />
                                <p className='animated-text3 text-white'>

                                    At JobsBridge, we simplify the job search process for talented professionals and connect them seamlessly with top employers. Whether you’re looking to advance your career or find the perfect candidate for your organization, JobsBridge is here to make the process easier and more efficient. Explore a wide range of job opportunities across various industries, apply effortlessly, and manage your applications all in one place. Employers can post jobs, track applications, and discover the best talent that matches their needs. Your next opportunity is just a few clicks away with JobsBridge – where finding the right job or the right candidate is made simple and accessible for everyone.

                                </p>
                            </div>
                        </div>


                    </div>
                    <div className=" col-6 d-none d-md-none d-lg-flex d-xl-flex d-xxl-flex bgImg1"></div>



                </div>

                </div>
                <div className=" col-12">

                <div className="row" style={{ margin: '0' }}>
                    <div className="col-6 midBgImg"></div>
                    <div className="col-6 50-vh d-flex bg-light midBg  justify-content-center align-items-center text-start">
                        

                            <div className="col-12   " >

                                <p className='searchTxt'>"Explore Beyond the Current Job Listings to Unlock a World of Exciting Career Opportunities, Discover Your Next Big Break, and Find the Perfect Role That Aligns with Your Ambitions, Aspirations, and Career Goals"</p>
            

                                <AnimeBtn text="Explore our Opportunities" onClick={()=>{navigate('/FindJobs')}} />

                            </div>

                      

                       
                           

                    </div>

                    <Nav />

                </div>
                <div className="row" style={{ margin: '0' }}>
                    <Footer />



                </div>
            </div>




        </div>

    )

}

export default Home;








