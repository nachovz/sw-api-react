import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

function Card(props) {
	let type = "";
	if (props.type === "people") {
		type = "Gender";
	} else {
		type = "Population";
	}
	return (
		<div className="card">
			<img
				className="card-img-top"
				src="https://via.placeholder.com/200"
				alt="Card image cap"
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Full Name: {props.name} <br />
					{props.type === "people" ? "Gender" : "Population"}:{" "}
					{props.unicorn}
				</p>
				<Link to={"/details/" + props.type + "/" + props.camel}>
					<button className="btn btn-primary">Details</button>
				</Link>
				<Context.Consumer>
					{({ actions }) => {
						return (
							<button
								className="ml-3 btn btn-primary"
								onClick={() =>
									actions.addToFavorites(props.name)
								}>
								Add to Favorites!
							</button>
						);
					}}
				</Context.Consumer>
			</div>
		</div>
	);
}

export default Card;

Card.propTypes = {
	name: PropTypes.string,
	unicorn: PropTypes.string,
	camel: PropTypes.number,
	type: PropTypes.string
};
