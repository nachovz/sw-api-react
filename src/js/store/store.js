const getState = ({ getStore, setStore }) => {
	return {
		store: {
			people: [
				{
					name: "Luke Skywalker",
					gender: "male",
					height: "6ft",
					hair: "Brown",
					birth: "1234"
				},
				{
					name: "Leia Organa",
					gender: "female",
					height: "5ft",
					hair: "Dark brown",
					birth: "1234"
				},
				{
					name: "C3PO",
					gender: "construct",
					height: "6ft",
					hair: "None/Gold",
					birth: "1240"
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
			],
			favorites: []
		},
		actions: {
			addToFavorites: koala => {
				var tempStore = getStore();
				var newFavorite = {
					name: koala
				};
				tempStore.favorites.push(newFavorite);
				//setStore({ tempStore });
			}
			/*
			getPeople: () => {
				fetch(
					"https://swapi.co/api/people/" +
						this.props.match.params.theid +
						"?format=json"
				)
					.then(res => res.json())
					.then(horse => {
						var temp = getStore();
						temp.people = horse;
						setStore({ temp });
					});

			}*/
		}
	};
};

export default getState;
