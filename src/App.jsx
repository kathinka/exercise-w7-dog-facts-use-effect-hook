// Import required hooks
import { useEffect, useState } from "react";
import { DogFact } from "./components/DogFact";

export const App = () => {
	const [dogFactData, setDogFactData] = useState([]);
	const API_ENDPOINT = "https://dogapi.dog/api/v2/facts";
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(API_ENDPOINT);
				if (!response.ok) {
					throw new Error("failed to fetch data");
				}
				const dogFactData = await response.json();
				setDogFactData(dogFactData.data[0].attributes.body);
				setIsLoading(false);  // Set loading state to false after data is fetched
			} catch (error) {
				console.log("error fetching data", error);
			}
		};
		fetchData();
		const intervalId = setInterval(fetchData, 5000);
		return () => clearInterval(intervalId);
	}, []);


	return (
		<div className="App">
			{isLoading ? <p>Loading</p> : <DogFact fact={dogFactData} />}
		</div>
	);
};
