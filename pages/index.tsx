import { Container } from "../src/components/_atoms";
import Navbar from "../src/components/Navbar";
import FoodItemList from "../src/components/FoodItemList";
export default function Home() {
	return (
		<Container>
			<Navbar />
			<FoodItemList />
			{/*<CartModal/>*/}
		</Container>
	);
}
