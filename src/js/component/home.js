import React, { useState, useEffect } from "react";
import Songs from "./songs";

//create your first component
export function Home() {
	let [musicPlay, setMusic] = useState([]);

	let arraysongs = [];

	async function getarray() {
		let response = await fetch(
			"https://assets.breatheco.de/apis/sound/all"
		);
		let transform = await response.json();
		let playList = transform["data/songs.json"];
		musicPlay.push(playList);
		setMusic(musicPlay);

		console.log(musicPlay);
	}
	getarray();

	return (
		<div className="container-fluid">
			<div className="row bar text-white justify-content-center p-3 font-weight-bold">
				<h1>RICHS MUSIC PLAYER</h1>
			</div>

			<div className="row player text-white">
				<ol className="container-fluid">
					{musicPlay.map((song, name) => {
						return <li key={name}>{song[name]}</li>;
					})}
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
