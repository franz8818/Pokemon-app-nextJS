import Image from "next/image";
import {
  Button,
} from "@/components/bootstrap/client-bootstrap";
import { useEffect, useContext } from "react";
import { Context } from "@/context/appContext";

const Card = () => {
    const {store, actions} = useContext(Context)
    useEffect(()=>{
        
    },[])
    return (
<div className="text-center mt-5">
		<h1>Database</h1>
    <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..." />
  <div className="card-body">
    <h4 className="card-title">Squirtle</h4>
    <h6 className="card-text">weight:</h6>
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

export default Card