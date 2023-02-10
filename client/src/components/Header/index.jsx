import { Col, Container,Dropdown, Form, Image, InputGroup, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import classes from './style.module.css'
import { BsSearch} from "react-icons/bs"
import { useState } from "react"
export const Header = ()=>{

    return(
      <Navbar className={classes["navbar"]}>
        <Col>
        {<Link to="/"><Image className={classes["logo"]} fluid src="logo.png" alt="Proyect"/></Link>}
        </Col>
        <Col className={classes["search"]}>
        <InputGroup>
        <InputGroup.Text id="search"><BsSearch/> </InputGroup.Text>
        <Form.Control
          type="text"
          placeholder="Buscar proyectos..."
        />
      </InputGroup>
        </Col>
        <Col>
        <Container className={classes["container"]}>
        <Dropdown className={classes["dropdown"]}>
        <Dropdown.Toggle>
          Tareas
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes["button-dropdown"]}>
          <Dropdown.Item href="/">task</Dropdown.Item>
          
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className={classes["dropdown"]}>
        <Dropdown.Toggle>
          Proyectos
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes["button-dropdown"]}>
          <Dropdown.Item><Link to="/projects">Ver proyectos</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className={classes["dropdown"]}>
        <Dropdown.Toggle>
         Ver Perfil
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes["button-dropdown"]}>
          <Dropdown.Item><Link to="/profile">Editar</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className={classes["dropdown"]}>
        <Dropdown.Toggle>
          Registro
        </Dropdown.Toggle>

        <Dropdown.Menu className={classes["button-dropdown"]}>
          <Dropdown.Item><Link to="/register">registro</Link></Dropdown.Item>
          <Dropdown.Item><Link to="/">Inicia sesion</Link></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
        </Col>
      </Navbar>  
    )
}