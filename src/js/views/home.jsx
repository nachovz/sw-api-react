import React from "react";
import Card from "../component/card.jsx";
import PlanetCard from "../component/planetCard.jsx";
import { Context } from "../store/appContext.jsx";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
			people: [
				{
					name: "Luke Skywalker",
					gender: "male"
				},
				{
					name: "Leia Organa",
					gender: "female"
				},
				{
					name: "C3PO",
					gender: "construct"
				}
			],
			planets: [
				{
					name: "Tatooine",
					population: "1.000.000"
				},
				{
					name: "Corusant",
					population: "500.000.000.000"
				},
				{
					name: "Hoth",
					population: "450.000"
				}
			]
		};
	}

	render() {
		return (
			<div className="container-fluid text-center mt-5">
				<div className="row character">
					<h2> People </h2>
					<div className="card-columns d-flex justify-content-between">
						{this.state.people.map((elem, index) => {
							return (
								<Card
									name={elem.name}
									unicorn={elem.gender}
									key={index}
									camel={index}
									type={"people"}
								/>
							);
						})}
					</div>
				</div>
				<div className="row character">
					<h2> Planets </h2>
					<div className="card-columns d-flex justify-content-between">
						{this.state.planets.map((elem, index) => {
							return (
								<Card
									name={elem.name}
									unicorn={elem.population}
									key={index}
									camel={index}
									type={"planet"}
								/>
							);
						})}
					</div>
				</div>
			</div>
		);
	}
}
