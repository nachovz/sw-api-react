import React from "react";
import PeopleCard from "../component/peoplecard.jsx";
import PlanetCard from "../component/planetCard.jsx";
import { Context } from "../store/appContext.jsx";

export class Home extends React.Component {
	constructor() {
		super();
		this.state = {
      people:[
        {
          name: "Luke Skywalker",
          gender: "male"
        },{
          name: "Leia Organa",
          gender: "female"
        },{
          name: "C3PO",
          gender: "construct"
        }
      ],
      planets: [
        {
          name: "Tatooine",
          population: "1.000.000"
        },{
          name: "Corusant",
          population: "500.000.000.000"
        },{
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
						<Context.Consumer>
							{({ store }) => {
								return store.detailsPeoples.map(
									(elem, index) => {
										return (
											<PeopleCard
												name={elem.name}
												gender={elem.gender}
												key={index}
												camel={index}
											/>
										);
									}
								);
							}}
						</Context.Consumer>
					</div>
				</div>
				<div className="row character">
					<h2> Planets </h2>
					<div className="card-columns d-flex justify-content-between">
						<Context.Consumer>
							{({ store }) => {
								return store.detailsPlanets.map(
									(elem, index) => {
										return (
											<PlanetCard
												name={elem.name}
												gender={elem.gender}
												key={index}
												camel={index}
											/>
										);
									}
								);
							}}
						</Context.Consumer>
					</div>
				</div>
			</div>
		);
	}
}
