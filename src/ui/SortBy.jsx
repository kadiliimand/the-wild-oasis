import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
	const [searchParams, setSearchParams] = useSearchParams();
	const currentSortBy = searchParams.get("sortBy") || "";

	function handleChange(event) {
		const newSearchParams = new URLSearchParams(searchParams);
		newSearchParams.set("sortBy", event.target.value);
		setSearchParams(newSearchParams);
	}

	return (
		<Select
			options={options}
			type="white"
			onChange={handleChange}
			value={currentSortBy}
		/>
	);
}

export default SortBy;
