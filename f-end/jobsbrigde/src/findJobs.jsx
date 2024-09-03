
import React from "react";
import SearchBar from "./searchBar";
import MultiActionAreaCard from "./card";
import Logo from './assets/jb.png';
import Footer from "./footer";
import Nav from "./nav";

function FindJobs() {

    return (

        <div className="col-12">

            <SearchBar />
            <div className="col-12 d-flex justify-content-center align-items-center gap-4">
                <div className="row col-12 gap-4 mx-2 d-flex justify-content-center" style={{margin:0}}>

                    <MultiActionAreaCard className="mt-3 mb-3 col-lg-4 col-xl-3 col-xxl-2  col-sm-5 col-md-5" img={Logo} key1="Title" value1="Web Development" key2="Type" value2="Full-Time" key3="Added Date" value3="24th March,2024" buttonText="View Job"/>
                    
                   


                </div>

            </div>

            <Footer/>

            <Nav/>




        </div>

    )


}
export default FindJobs;