import { Card, Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from './style.module.css'

export const NotFound = () =>{
    return (
        <Container className={classes["container"]}>
            <Card className={classes["card"]}>
                <Card.Body className={classes["text"]}>Opss... Creo que te perdiste</Card.Body>
                <Card.Body >¿Puedo ayudarte?</Card.Body>
                <Image className={classes["img"]} fluid src="404.avif"/>
                <Link className={classes["back"]}to={"/"}>volver a inicio</Link>
            </Card>
        </Container>
      );
}