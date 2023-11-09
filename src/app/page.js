"use client"
import Image from "next/image";
import {
  Button,
} from "@/components/bootstrap/client-bootstrap";
import { Card } from "@/components/global/card";
import { useContext } from "react";
import { Context } from "@/context/appContext";


// export const metadata = {
//   title: process.env.APP_NAME + " | " + process.env.APP_DESCRIPTION,
// };

const Home = () => { 
  const {store,actions} = useContext(Context)
  return (
    store.pokemons && store.pokemons.length > 0 ? store.pokemons.map((pokemon, index) => { 
      return(
        <Card name={pokemon.name} url={pokemon.url}/> 
      )
    }) 
    : 
    store.pokemon == null ? <b>cargando...</b>
    :
    store.pokemon == false && <b className="text-danger">No se pudo cargar la lista</b>
  
   

  );
}

export default Home