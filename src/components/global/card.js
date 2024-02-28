"use client"
import { useContext, useEffect, useState } from "react";
import { Context } from "@/context/appContext";
import Image from "next/image";
import {
    Card as BSCard,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardText,
    Button,
} from "@/components/bootstrap/client-bootstrap";
import Link from "next/link";


export const Card = (props) => {
    const { actions } = useContext(Context);
    const [pokemon, setPokemon] = useState(null)
    useEffect(() =>{
        const getPokemon = async() => {
            const response = await actions.getPokemon(props.url)
            if (response) {
                setPokemon(response)
            
            } else {
                setPokemon(false)
            }
        }
        getPokemon()
    }, [props.url])
    console.log(pokemon)
    return (
        <div class="grid-layout">
        <BSCard style={{ width: '50rem' }}>
        <div className="card-content">
            <Image src="/img/squirtle.png" alt="Squirtle" width={250}
                height={250}
                priority />
            <CardBody>
                <CardTitle><h1>{props.name}</h1></CardTitle>
                <div className="info">
        <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        </p>
         </div>
                <CardSubtitle>{props.ID}</CardSubtitle> {/* NO SE MUESTRA EN EL FRONT*/}
                <CardText><strong>Weight</strong> {props.weight}</CardText>
                <CardText><strong>Height</strong> {props.height} </CardText>
                <CardText><strong>Ability</strong> {props.ability} </CardText>
         <Button variant="primary">Go somewhere</Button>
            </CardBody>
      
    </div>
    </BSCard>
    </div>
    );
};