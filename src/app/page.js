import Image from "next/image";
import {
  Button,
} from "@/components/bootstrap/client-bootstrap";
import { Card } from "@/components/global/card";

export const metadata = {
  title: process.env.APP_NAME + " | " + process.env.APP_DESCRIPTION,
};

const Home = () => { 
  return (
    <Card name = "Squirtle"/>

  );
}

export default Home