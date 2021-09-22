import { right } from "@popperjs/core";
import React from "react";

export const Navbar = () => {
	return (
		/*
        <div className="container-fluid bg-dark">
			<div className="col-4 ms-auto">
        */
		<nav className="navbar navbar-expand-lg navbar-white fixed-top bg-dark">
			<a className="navbar-brand" href="#">
				Start Bootstrap
			</a>
			<button
				className="navbar-toggler justify-content-end"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNavAltMarkup"
				aria-controls="navbarNavAltMarkup"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon"></span>
			</button>
			<div
				className="collapse navbar-collapse justify-content-end"
				id="navbarNavAltMarkup">
				<div className="navbar-nav">
					<a className="nav-item nav-link active" href="#">
						Home <span className="sr-only">(current)</span>
					</a>
					<a className="nav-item nav-link" href="#">
						About
					</a>
					<a className="nav-item nav-link" href="#">
						Services
					</a>
					<a className="nav-item nav-link" href="#">
						Contact
					</a>
				</div>
			</div>
		</nav>
	);
};
