import { Col, Container, Form, Row,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import classes from './style.module.css'

export const ForgetPassword =() =>{
    return(
        <Container>
            <Row>
                <Col className={classes["col"]}>
                    <Form className={classes["form"]}>
                        <Form.Text className={classes["title"]}>Recupera tu contraseña</Form.Text>

                        <Form.Label className={classes["label"]}>Email address</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} type="email" placeholder="Ingrese su email" />
                        </Form.Group>
                        <Button className={classes["box-input"]} variant="primary" type="submit">
                            Recuperar contraseña
                        </Button>
                        <Col>
                            <Link className={classes["noAccount"]} to={"/register"}>¿No tenes cuenta? haz clck aqui</Link>
                        </Col>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}