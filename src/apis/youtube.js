import axios from "axios";

const KEY = "AIzaSyCsXKJG5n_yq7nakfC5GFkxF6HiO5jZR4Q";

export default axios.create({
	baseURL: "https://www.googleapis.com/youtube/v3",
	params: {
		part: "snippet",
		type: "video",
		maxResults: 5,
		key: KEY,
	},
});
