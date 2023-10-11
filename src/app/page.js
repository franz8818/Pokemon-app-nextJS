import Image from "next/image";
import {
  Button,
} from "@/components/bootstrap/client-bootstrap";

export const metadata = {
  title: process.env.APP_NAME +" | "+process.env.APP_DESCRIPTION,
};

const Home = () => {
  return (
	<div className="text-center mt-5">
		<h1>Database</h1>
        <p>
			<Image  src="/img/pokemon.png" alt="Logo oficial " width={600}
          height={300}
          priority />
      
        </p>
        <Button variant="success">
			POKÉDEX
        </Button>
	</div>
  );
}

export default Home