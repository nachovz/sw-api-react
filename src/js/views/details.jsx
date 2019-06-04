import React from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.jsx";

export class Details extends React.Component {
	render() {
		const index = parseInt(this.props.match.params.theid);
		const type = this.props.match.params.type;

		return (
			<Context.Consumer>
				{({ store }) => {
					const list =
						type === "people" ? store.people : store.planets;
					return (
						<div>
							<div className="container-fluid text-center mt-5">
								<div className="row justify-content">
									<div className="col-6">
										<img src="https:///via.placeholder.com/640x480" />
									</div>
									<div className="col-6">
										<h3>{list[index].name}</h3>
										<p>Epic backstory of character....</p>
									</div>
								</div>
								<div className="row mt-5">
									<div className="col descriptionColumns">
										<h6>
											{type === "people"
												? "Gender"
												: "Population"}
										</h6>
										{list[index].gender}
										<br />
									</div>
									<div className="col descriptionColumns">
										<h6>
											{type === "people"
												? "Height"
												: "Mass"}
										</h6>
										{list[index].height}
										<br />
									</div>
									<div className="col descriptionColumns">
										<h6>
											{type === "people"
												? "Hair Color"
												: "Atmosphere"}
										</h6>
										{type === "people"
											? list[index].hair
											: list[index].atm}
										<br />
									</div>
									<div className="col descriptionColumns">
										<h6>
											{type === "people"
												? "Birth Year"
												: "Number of moons"}
										</h6>
										{list[index].birth}
										<br />
									</div>
								</div>
							</div>
						</div>
					);
				}}
			</Context.Consumer>
		);
	}
}

Details.propTypes = {
	match: PropTypes.object
};
