import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import classes from "./style.module.css"

export const ProjectPreview = ({_id, name, client}) => {
  return (
    <Container className={classes["proyecto"]}>
        <p>
           {name}
           <span>
            {` || ${client}`}
           </span>
        </p>
        <Link
            to={`/projects/${_id}`} className={classes["link"]}>
            Ver proyecto
        </Link>
        
    </Container>
  );
};
