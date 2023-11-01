import Image from "next/image";
import {
  Button,
} from "@/components/bootstrap/client-bootstrap";

export const metadata = {
  title: process.env.APP_NAME + " | " + process.env.APP_DESCRIPTION,
};

const Home = () => {
  return (
    <div className="container mt-5">
      {/* <img src="/pokedex.svg" className="card-img-top" alt="..." /> */}
      <div className="row" style={{ height: "50vh" }}>
      <div className="col-12">
      <div className="card" style={{ width: "19rem" }}>
        <Image src="/img/squirtle.png" alt="Squirtle" width={300}
          height={300}
          priority />
        <div className="card-body">
        <div className="border p-3">
          <h2 className="card-title">Squirtle </h2>
          <h5 className="card-subtitle text-muted"><strong>ID</strong>  7 </h5>
          <p className="card-text"><strong>Weight</strong> 9kg </p>
          <p className="card-text"><strong>Height</strong> 0.5m </p>
          <p className="card-text"><strong>Ability</strong> Torrent </p>
        </div>
        </div>
      </div>
      </div>
    </div>
    </div>
  );
}

export default Home