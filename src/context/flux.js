const API_URL = "https://pokeapi.co/api/v2"
const getState = ({ getStore, getActions, setStore }) => {
	const store = {
		demo: [
			{
				title: "FIRST",
				background: "",
			},
			{
				title: "SECOND",
				background: "",
			}
		],
		pokemons: null,
	}

	const actions = {
		// Use getActions to call a function within a fuction
		exampleFunction: () => {
			getActions().changeColor(0, "green");
		},
		loadSomeData: () => {
			/**
				fetch().then().then(data => setStore({ "foo": data.bar }))
			*/
		},
		changeColor: (index, color) => {
			//get the store
			const store = getStore();

			//we have to loop the entire demo array to look for the respective index
			//and change its color
			const demo = store.demo.map((elm, i) => {
				if (i === index) elm.background = color;
				return elm;
			});

			//reset the global store
			setStore({ demo: demo });
		},
		useFetch: async (url, endpoint, method, body, format) => {
			if (format == "json") {
				body = JSON.stringify(body)
				format = { "Content-Type": "application/json" }
			} else if (format == "formData") {
				const formData = new FormData()
				for (const key in body) formData.append(key, body[key])
				body = formData
				format = undefined
			}
			const requestOptions = {
				method: method,
				headers: {
					...(method != "GET" && format),
					redirect: 'follow'
				},
				...(method != "GET" && { body: body }),
			}
			try {
				const promise = await fetch(url + endpoint, requestOptions)
				const res = await promise.json()
				console.log(promise)
				console.log(res)
				return { data: res, status: promise.status };
			} catch (error) {
				return { error: true }
			}
		},
		getAllPokemons: async () => {
			const store = getStore()
			const actions = getActions()
			const response = await actions.useFetch(API_URL, "/pokemon", "GET", false)
			console.log(response)

			if (!response.error) {
				if (response.status == 200) {
					setStore({ pokemons: response.data.results });
				}

			} else {
				setStore({ pokemons: false })
		}
			
		},
		
		getPokemon: async (url) => {
			
			const response = await actions.useFetch(API_URL, "/pokemon/" + url.split("/")[6], "GET", false)
			console.log(response)

			if (!response.error) {
				if (response.status == 200) {
					return response
				}

			} else {
				return null
			}

		},
	}

 
	// Returns context
	return { store, actions }
};

export default getState;


// -------------------------------------------- codigo franz -----------------------------------------------------------	
  
	// getAllPokemons: async () => {
	//   const store = getStore();
	//   const actions = getActions();
  
	//   try {
	// 	const response = await actions.useFetch(API_URL, "/pokemon", "GET", false);
  
	// 	if (!response.error) {
	// 	  if (response.status === 200) {
	// 		// Para cada Pokémon en la respuesta, obten información adicional
	// 		const pokemonDetails = await Promise.all(response.data.results.map(async (pokemon) => {
	// 		  const detailsResponse = await actions.useFetch(pokemon.url, "", "GET", false);
	// 		  if (!detailsResponse.error && detailsResponse.status === 200) {
	// 			return {
	// 			  name: pokemon.name,
	// 			  ID: detailsResponse.data.id,
	// 			  weight: detailsResponse.data.weight,
	// 			  height: detailsResponse.data.height,
	// 			  ability: detailsResponse.data.abilities[0]?.ability.name || "N/A",
	// 			};
	// 		  }
	// 		  return null;
	// 		}));
  
	// 		// Filtra aquellos que obtuvieron detalles exitosos
	// 		const filteredDetails = pokemonDetails.filter((detail) => detail !== null);
  
	// 		setStore({ pokemons: filteredDetails });
	// 	  }
	// 	} else {
	// 	  setStore({ pokemons: false });
	// 	}
	//   } catch (error) {
	// 	console.error(error);
	//   }
	// },