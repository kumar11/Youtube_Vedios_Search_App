import React from "react";
import SearchBar from "./Searchbar";
import youtube from "../apis/youtube";
import VideoList from "../Components/VideoList";
import VideoDetail from "../Components/VideoDetails";

class App extends React.Component {
	state = { Videos: [], selectedVideo: null };

	componentDidMount() {
		this.onTermSubmit("buildings");
	}

	onTermSubmit = async (term) => {
		const response = await youtube.get("/search", {
			params: {
				q: term,
			},
		});

		this.setState({
			Videos: response.data.items,
			selectedVideo: response.data.items[0],
		});
	};

	onVideoSelect = (video) => {
		this.setState({ selectedVideo: video });
	};
	render() {
		return (
			<div className="ui container">
				<SearchBar onFormSubmit={this.onTermSubmit} />
				<div className="ui grid">
					<div className="ui row">
						<div className="eleven wide column">
							<VideoDetail video={this.state.selectedVideo} />
						</div>
						<div className="five wide column">
							<VideoList
								onVideoSelect={this.onVideoSelect}
								Videos={this.state.Videos}
							/>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
