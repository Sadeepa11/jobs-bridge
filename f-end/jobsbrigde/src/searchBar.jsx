import './searchBar.css';
import Logo from './assets/jb.png';
import BasicTextFields from './searchInput';
import SelectLabels from './dropDown';
import NumberInputField from './numberInput';




function SearchBar() {

    return (

        <div className="col-12 bg-light d-flex justify-content-center align-items-center">
            <div className="row col-12">

                <div className="col-12">

                    <div className="row" style={{ margin: 0 }}>

                        <div className="col-2 d-flex justify-content-center align-items-center">

                            <img src={Logo} alt="" width={"70px"} height={"70px"} style={{ borderRadius: "50%" }} />
                        </div>
                        <div className="offset-6 col-4 d-flex justify-content-center align-items-center">

                            <label className='searchLabel1'>JobsBrigde</label>
                        </div>

                    </div>

                </div>
                <div className="col-12 d-flex justify-content-center align-items-center">
                    <div className="row col-12" style={{ margin: 0 }}>
                        <div className=" d-flex justify-content-center align-items-center col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3"><BasicTextFields label={"Key Word"} /></div>
                        <div className=" d-flex justify-content-center align-items-center col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3"><NumberInputField label={"Min Salary"} /></div>
                        <div className=" d-flex justify-content-center align-items-center col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3"><NumberInputField label={"Max Salary"} /></div>
                        <div className=" d-flex justify-content-center align-items-center col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3"><SelectLabels label={"Job Type"} /></div>
                        <div className=" d-flex justify-content-center align-items-center col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"><buton className=" col-10 btn btn-dark">Search</buton></div>

                       

                    </div>



                </div>

            </div>
            


        </div>


    )

}

export default SearchBar;