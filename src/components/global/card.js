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