import React from "react";
import Card from "../component/card.jsx";
import PlanetCard from "../component/planetCard.jsx";
import { Context } from "../store/appContext.jsx";

export class Home extends React.Component {
	render() {
		return (
			<div className="container-fluid text-center mt-5">
				<div className="row character">
					<h2> People </h2>
					<div className="card-columns d-flex justify-content-between">
						<Context.Consumer>
							{({ store }) => {
								return store.people.map((elem, index) => {
									return (
										<Card
											name={elem.name}
											unicorn={elem.gender}
											key={index}
											camel={index}
											type={"people"}
										/>
									);
								});
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="row character">
					<h2> Planets </h2>
					<div className="card-columns d-flex justify-content-between" />
				</div>
			</div>
		);
	}
}
