import { Container, Typography } from "@mui/material";
import React from "react";

const Home = () => {
	return (
		<div>
			<Container>
				<Typography variant="h3">Amarthya Ravi</Typography>
				<Typography variant="h5">Full-Stack Web Developer.</Typography>
				<Typography paragraph>
					I am a software engineer with about a year of experience in
					the domain. I graduated from Ramaiah Institute oF Technology
					with a bachelors degree in Information Science and
					Engineering. Currently, I work as a software engineer in
					IUDX.
					<br />I am a huge cinephile, and I watch all sorts of
					movies, ranging from Kurosawa to Gerwig. I also play
					video-games, and I find great joy in exploring new music.
				</Typography>
			</Container>
		</div>
	);
};

export default Home;
