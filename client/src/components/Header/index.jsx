import { Col, Container,Dropdown, Image, Navbar, Row } from "react-bootstrap"
import classes from './style.module.css'
export const Header = ()=>{
    return(
      <Navbar className={classes["navbar"]}>
        <Col>
        <a href="/"><Image className={classes["logo"]} fluid src="logo.png"/></a>
        </Col>
        <Col>
        <Container className={classes["container"]}>
                <Dropdown className={classes["dropdown"]}>
        <Dropdown.Toggle>
          Tareas
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className={classes["dropdown"]}>
        <Dropdown.Toggle>
          Proyectos
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className={classes["dropdown"]}>
        <Dropdown.Toggle>
          Perfil
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <Dropdown className={classes["dropdown"]}>
        <Dropdown.Toggle>
          Register
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
          <Dropdown.Item href="/">Menu Item</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      </Container>
        </Col>
      </Navbar>  
    )
}