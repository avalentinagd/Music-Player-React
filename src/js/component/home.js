import React, { useState } from "react";
import Songs from "./songs";

//create your first component
export function Home() {
	const [musicPlaying, setMusic] = useState("");
	//function playTrack() {
	//  if (musicPlaying=""){
	//    return setMusic()
	//    }
	//}
	const arraysongs = [];
	fetch("https://assets.breatheco.de/apis/sound/all")
		.then(function(response) {
			if (!response.ok) {
				throw Error(response.statusText);
			}
			console.log(response.json());
			return response.json();
		})
		.then(function(responseAsJson) {
			responseAsJson["data/songs.json"].map(songDetails => {
				arraysongs.push(songDetails);
			});
			// Do stuff with the JSON
		})
		.catch(function(error) {
			console.log("Looks like there was a problem: \n", error);
		});
	console.log(arraysongs);

	return (
		<div className="container-fluid">
			<div className="row bar text-white justify-content-center p-3 font-weight-bold">
				<h1>RICH'S MUSIC PLAYER</h1>
			</div>
			<div className="row player text-white">
				<ol className="container-fluid">
					<div>
						<Songs title="song1" number="1" />
					</div>
					<div>
						<Songs title="song2" number="2" />
					</div>
					<div>
						<Songs title="song3" number="3" />
					</div>

					<div>
						<Songs title="song4" number="4" />
					</div>

					<div>
						<Songs title="song5" number="5" />
					</div>

					<div>
						<Songs title="song6" number="6" />
					</div>

					<div>
						<Songs title="song7" number="7" />
					</div>

					<div>
						<Songs title="song8" number="8" />
					</div>

					<div>
						<Songs title="song9" number="9" />
					</div>

					<div>
						<Songs title="song10" number="10" />
					</div>

					<div>
						<Songs title="song11" number="11" />
					</div>

					<div>
						<Songs title="song12" number="12" />
					</div>

					<div>
						<Songs title="song13" number="13" />
					</div>

					<div>
						<Songs title="song14" number="14" />
					</div>

					<div>
						<Songs title="song15" number="15" />
					</div>

					<div>
						<Songs title="song16" number="16" />
					</div>
				</ol>
			</div>
			<div className="row control text-white justify-content-center p-4">
				<button>
					<i className="fa fa-step-backward" aria-hidden="true" />
				</button>
				<button className="play mx-5">
					<i className="fa fa-play-circle" aria-hidden="true" />
				</button>
				<button>
					<i className="fa fa-step-forward" aria-hidden="true" />
				</button>
			</div>
		</div>
	);
}
