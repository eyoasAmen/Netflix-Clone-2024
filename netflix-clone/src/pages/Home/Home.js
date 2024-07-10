import React from "react";
import Header from "../../componets/Header/Header";
import Footer from "../../componets/Footer/Footer";
import Banner from "../../componets/Banner/Banner.js";
import RowList from "../../componets/Rows/RowList/RowList";

const Home = () => {
	return (
		<>
			<Header />
			<Banner />
			<RowList />
			<Footer />
		</>
	);
};

export default Home;
