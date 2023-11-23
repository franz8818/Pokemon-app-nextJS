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
        <BSCard style={{ width: '18rem' }}>
            <Image src="/img/squirtle.png" alt="Squirtle" width={300}
                height={300}
                priority />
            <CardBody>
                <CardTitle>{props.name}</CardTitle>
                <CardSubtitle>{props.ID}</CardSubtitle>
                <CardText><strong>Weight</strong> {props.weight}</CardText>
                <CardText><strong>Height</strong> {props.height} </CardText>
                <CardText><strong>Ability</strong> {props.ability} </CardText>
                <Button variant="primary">Go somewhere</Button>
            </CardBody>
        </BSCard>
    );
};