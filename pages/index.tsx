import { useState } from "react";
import { Container } from "../src/components/_atoms";
import Navbar from "../src/components/Navbar";
import FoodItemList from "../src/components/FoodItemList";
import CartModal from "../src/components/Modal/Modal";
export default function Home() {
	const [showModal, setShowModal] = useState(false);

	const handleShowModal = () => {
		setShowModal((prevState) => !prevState);
	};

	return (
		<Container>
			<Navbar showModal={handleShowModal} />
			<FoodItemList />
			<CartModal show={showModal} closeModal={handleShowModal} />
		</Container>
	);
}
