import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Blogs from "../pages/Blogs";

const Router = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/blogs" element={<Blogs />} />
			</Routes>
		</div>
	);
};

export default Router;
