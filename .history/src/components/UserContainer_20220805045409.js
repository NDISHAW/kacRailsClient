import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import DashboardContainer from "./DashboardContainer";
import Login from "./Login";
import Signup from "./Signup";

class UserContainer extends Component {
	render() {
		if (this.props.isLoggedIn) {
			return <DashboardContainer />;
		} else if (this.props.location.pathname === "/login") {
			return <Login />;

		} else {
			return <Navigate to="/login" />;
			// return <Navigate to="/" />;
		}
	}
}

const mapStateToProps = (state) => ({
	isLoggedIn: state.user.isLoggedIn
});

export default connect(mapStateToProps)(UserContainer);
