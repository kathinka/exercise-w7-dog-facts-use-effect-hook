
import PropTypes from "prop-types";
export const DogFact = ({ fact }) => {
	// Add prop validation for 'fact' prop
	DogFact.propTypes = {
		fact: PropTypes.string.isRequired,
	};

	if (!fact) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<h2>Dog Fact</h2>
				<div>{fact}</div>

			</div>
		);
	}
}