import React, { Component } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";
import Home from "./Home";
import Login from "./Login";
// import MTStudet from "./school/MTStudet";


class UserContainer extends Component {
	render() {
		if (this.props.isLoggedIn) {
			return <Home />
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
