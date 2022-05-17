import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./UserHomePage/userHomePage.js";
import DriverFeed from "./DriverNewsFeed/DriverFeed";
import Applog from "./Applog";
import Request from "./RequestPage/Request.js";
import Contact from "./ContactUs/Contact.js";
import UserRequest from './UserRequestPage/UserRequest';
import DriverProfilePage from "./DriverProfile/DriverProfilePage";
import APLOG from "./APLOG";
import RegisF from "./Logincomponents/RegisF";

function RoutesController() {
  return (
    <Routes>
      <Route exact path="/driverfeed" element={<DriverFeed />} />
      <Route exact path="/" element={<Applog />} />
      <Route exact path="/Register" element={<RegisF />} />
      <Route exact path="/homepage" element={<HomePage />} />
      <Route exact path="/request" element={<Request />} />
      <Route exact path="/driverprofile" element={<DriverProfilePage />} />
      <Route exact path="/userrequest" element={<UserRequest />} />
      <Route exact path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default RoutesController;
