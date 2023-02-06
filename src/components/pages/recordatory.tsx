import { Fragment, useEffect, useState } from "react";
import Medicamentos from "./medicamentos";

const Recordatory = () => {

	return (
        <Fragment>
        <h1 className="recordatorytitle"> Add Recordatory </h1>
        <form className="recordatoryform">
        <label className="recordatorylabel">Start Date:</label>
        <input type="date" className="recordatoryinput" id="start-date" name="start-date"/>
        
        <label className="recordatorylabel">End Date:</label>
        <input type="date" className="recordatoryinput" id="end-date" name="end-date"/>
        
        <label className="recordatorylabel">Intervals:</label>
        <input type="float" className="recordatoryinput" id="float-field" name="float-field" placeholder="Intervals in hours"/>
        
        <label className="recordatorylabel">Select Field:</label>
        <Medicamentos />

        <label className="recordatorylabel">Text Field:</label>
        <input type="text" className="recordatoryinput" id="text-field" name="text-field"/>
        
        <input type="submit" className="recordatorysubmit" value="Submit"/>
        </form>
        </Fragment>
	)
}

export default Recordatory;