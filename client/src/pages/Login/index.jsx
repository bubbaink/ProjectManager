import { Col, Container, Form, Row,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import classes from './style.module.css'


export const Login =()=>{
    return (
        <Container>
            <Row>
                <Col className={classes["col"]}>
                    <Form className={classes["form"]}>
                        <Form.Text className={classes["title"]}>Login</Form.Text>
                        
                        <Form.Label className={classes["label"]}>Email address</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} type="email" placeholder="Ingrese su email" />
                        </Form.Group>

                        <Form.Label className={classes["label"]}>Password</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} type="password" placeholder="Ingrese su contraseña" />
                        </Form.Group>

                        <Button className={classes["box-input"]} variant="primary" type="submit">
                            ingresar
                        </Button>
                        <Col>
                            <Link className={classes["noAccount"]} to={"/register"}>¿No tenes cuenta?</Link>
                            <Link className={classes["noAccount"]} to={'/forget-password'}> Olvidé mi contraseña</Link> 
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}