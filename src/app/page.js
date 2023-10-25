import Image from "next/image";
import {
  Button,
} from "@/components/bootstrap/client-bootstrap";

export const metadata = {
  title: process.env.APP_NAME +" | "+process.env.APP_DESCRIPTION,
};

const Home = () => {
  return (
    <div className="container">
	<div className="text-center">
		<img src="/pokedex.svg" className="card-img-top" alt="..." />
    <div className="card">
    <Image  src="/img/squirtle.png" alt="Logo oficial " width={300}
          height={300}
          priority />
  <div className="card-body">
    <h4 className="card-title">Squirtle</h4>
    <h6 className="card-text">weight:</h6>
  </div>
  </div>
  </div>
</div>
  );
}

export default Home