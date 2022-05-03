import React, { useState } from "react";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import DashboardService from "../services/DashboardService";
import Header from "./header";
import "../style/Signup.css";

function Profie() {
    const user = JSON.parse(localStorage.getItem("loggedInUser"));
    var [loading, setLoading] = useState(false);

    var enableSpinner = () => {
        loading = true;
        setLoading(loading) ;
    }

    var disableSpinner = () => {
        loading = false;
        setLoading(loading) ;
    }

    var [formdata, setFormData] = useState({
        "id": user.id,
        "full_name": user.full_name,
        "address_line_1": user.address_line_1,
        "address_line_2": user.address_line_2,
        "city": user.city,
        "state": user.state,
        "zip_code": user.zip_code,
    });

    const handleInputChange = e => {
        const { name, value } = e.target;
        switch(name){
            case "full_name":
                formdata.full_name = value;
                break;
            case "address_line_1":
                formdata.address_line_1 = value;
                break;
            case "address_line_2":
                formdata.address_line_2 = value;
                break;
            case "city":
                formdata.city = value;
                break;
            case "state":
                formdata.state = value;
                break;
            case "zip_code":
                formdata.zip_code = value;
                break;
            default:
                console.log("invalid");
        }
        setFormData(formdata) ;
    };

    const submitProfileForm = (e) =>{
        e.preventDefault();
        let has_error = false;
        if(!formdata.full_name){
            has_error = true;
            NotificationManager.error('Error message', 'Name can not be blank');
        }else if(formdata.full_name.length > 50){
            has_error = true;
            NotificationManager.error('Error message', 'Name should contain maximum 50 characters');
        }

        if(!formdata.address_line_1){
            has_error = true;
            NotificationManager.error('Error message', 'Address 1 can not be blank');
        }else if(formdata.address_line_1.length > 100){
            has_error = true;
            NotificationManager.error('Error message', 'Address 1 should contain maximum 100 characters');
        }

        if(formdata.address_line_2.length > 50){
            has_error = true;
            NotificationManager.error('Error message', 'Address 2 should contain maximum 50 characters');
        }

        if(!formdata.city){
            has_error = true;
            NotificationManager.error('Error message', 'City can not be blank');
        }else if(formdata.city.length > 50){
            has_error = true;
            NotificationManager.error('Error message', 'City should contain maximum 100 characters');
        }

        if(!formdata.state){
            has_error = true;
            NotificationManager.error('Error message', 'State can not be blank');
        }

        if(!formdata.zip_code){
            has_error = true;
            NotificationManager.error('Error message', 'Zip code can not be blank');
        }else if(formdata.zip_code.length < 5){
            has_error = true;
            NotificationManager.error('Error message', 'Minimum length of Zip code is 5');
        }else if(formdata.zip_code.length > 9){
            has_error = true;
            NotificationManager.error('Error message', 'Maximum length of Zip code is 9');
        }

        if(!has_error){
            enableSpinner();
            DashboardService.UpdateProfile(user.id, formdata)
                .then((res) => {
                    let _data = res.data;
                    console.log(_data);
                    disableSpinner();
                    localStorage.setItem('loggedInUser',JSON.stringify(res.data));
                    NotificationManager.success('Success message', 'Profile updated successfully');
                })
                .catch((err) => {
                    disableSpinner();
                    NotificationManager.error('Error message', err.response.data.message);
                })
        }
    }

    return (
        <div>
            <Header/>

            {loading ? (
                <div id="overlay">
                    <div className="cv-spinner">
                        <span className="spinner"></span>
                    </div>
                </div>
            ) : (
                <span></span>
            )}

            <div className="d-flex justify-content-center align-items-center main_container">
                <div className="innerContainer row">
                    <div className="col-md-12 justify-content-center align-items-center p-5">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-center">Update Profile</h1>
                                <form className="row" onSubmit={submitProfileForm}>
                                    <div className="col-md-6">
                                        <label htmlFor="full_name" className="form-label">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="full_name"
                                            name="full_name"
                                            placeholder="Full Name"
                                            defaultValue={user.full_name}
                                            required
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="address_line_1" className="form-label">
                                            Address 1
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address_line_1"
                                            name="address_line_1"
                                            defaultValue={user.address_line_1}
                                            placeholder="Address Line One"
                                            required
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="address_line_2" className="form-label">
                                            Address 2
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address_line_2"
                                            name="address_line_2"
                                            defaultValue={user.address_line_2}
                                            placeholder="Address Line Two"
                                            required
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="city" className="form-label">
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            name="city"
                                            defaultValue={user.city}
                                            placeholder="City"
                                            required
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="state" className="form-label">
                                            State
                                        </label>
                                        <select
                                            className="form-control"
                                            id="state"
                                            name="state"
                                            defaultValue={user.state}
                                            placeholder="State"
                                            required
                                            onChange={handleInputChange}
                                        >
                                            <option>Select</option>
                                            <option value='AL'>AL</option>
                                            <option value='AK'>AK</option>
                                            <option value='AZ'>AZ</option>
                                            <option value='AR'>AR</option>
                                            <option value='AS'>AS</option>
                                            <option value='CA'>CA</option>
                                            <option value='CO'>CO</option>
                                            <option value='CT'>CT</option>
                                            <option value='DE'>DE</option>
                                            <option value='DC'>DC</option>
                                            <option value='FL'>FL</option>
                                            <option value='GA'>GA</option>
                                            <option value='GU'>GU</option>
                                            <option value='HI'>HI</option>
                                            <option value='ID'>ID</option>
                                            <option value='IL'>IL</option>
                                            <option value='IN'>IN</option>
                                            <option value='IA'>IA</option>
                                            <option value='KS'>KS</option>
                                            <option value='KY'>KY</option>
                                            <option value='LA'>LA</option>
                                            <option value='ME'>ME</option>
                                            <option value='MD'>MD</option>
                                            <option value='MA'>MA</option>
                                            <option value='MI'>MI</option>
                                            <option value='MN'>MN</option>
                                            <option value='MS'>MS</option>
                                            <option value='MO'>MO</option>
                                            <option value='MT'>MT</option>
                                            <option value='NE'>NE</option>
                                            <option value='NV'>NV</option>
                                            <option value='NH'>NH</option>
                                            <option value='NJ'>NJ</option>
                                            <option value='NM'>NM</option>
                                            <option value='NY'>NY</option>
                                            <option value='NC'>NC</option>
                                            <option value='ND'>ND</option>
                                            <option value='CM'>CM</option>
                                            <option value='OH'>OH</option>
                                            <option value='OK'>OK</option>
                                            <option value='OR'>OR</option>
                                            <option value='PA'>PA</option>
                                            <option value='PR'>PR</option>
                                            <option value='RI'>RI</option>
                                            <option value='SC'>SC</option>
                                            <option value='SD'>SD</option>
                                            <option value='TN'>TN</option>
                                            <option value='TX'>TX</option>
                                            <option value='TT'>TT</option>
                                            <option value='UT'>UT</option>
                                            <option value='VT'>VT</option>
                                            <option value='VA'>VA</option>
                                            <option value='VI'>VI</option>
                                            <option value='WA'>WA</option>
                                            <option value='WV'>WV</option>
                                            <option value='WI'>WI</option>
                                            <option value='WY'>WY</option>
                                        </select>

                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="zip_code" className="form-label">
                                            Zip Code
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="zip_code"
                                            name="zip_code"
                                            placeholder="Zip Code"
                                            defaultValue={user.zip_code}
                                            required
                                            onChange={handleInputChange}
                                        />
                                    </div>

                                    <div className="col-md-12 text-center">
                                        <button type="button" className="btn btn-primary" onClick={submitProfileForm}>
                                            Update Profile
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <NotificationContainer/>

        </div>
    );
}

export default Profie;
