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
		pokemons : null, 
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
		useFetch: async (url, endpoint, method, useToken, body, format) => {
			if (format == "json"){
				body = JSON.stringify(body)
				format = {"Content-Type": "application/json"}
			}else if(format == "formData"){
				const formData = new FormData()
				for (const key in body) formData.append(key, body[key])
				body = formData
				format = undefined
			}
			const requestOptions = {
				method: method,
				headers: {
					...(method != "GET" && format),
					...(useToken && {"Authorization": "Bearer "+sessionStorage.getItem("authToken")}),
					redirect: 'follow'
				},
				...(method != "GET" && {body: body}),
			}
			try {
				const promise = await fetch(url+endpoint, requestOptions)
				const res = await promise.json()
				console.log(promise)
				console.log(res)
				return {data: res, status: promise.status};
			} catch (error) {
				return {error: true}
			}
		},
		getAllPokemons: async ()=>{
			const store = getStore()
			const actions = getActions()
			const response = await actions.useFetch(process.env.APP_API_URL,"/pokemon","GET",false)
			console.log(response) 
		}
    }

	// Returns context
    return {store, actions}
};

export default getState;
