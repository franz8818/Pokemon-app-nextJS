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
    <div className="card" style="width: 18rem;">
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title">Squirtle</h4>
    <h6 className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</h6>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        <p>
			<Image  src="/img/squirtle.png" alt="Logo oficial " width={300}
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