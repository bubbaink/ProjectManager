import React from "react"; 
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./style.module.css"

export const Sidebar = () => {

  return (
    <Container className={classes["container-div"]}>
        <p>Hola de nuevo. ¿En que proyecto trabajaremos hoy?</p>
        <Link className={classes["new"]} to="create-project">+ Nuevo proyecto</Link> 
    </Container>
  )
}

