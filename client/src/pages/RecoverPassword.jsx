import { Col, Container, Form, Row,Button } from "react-bootstrap"

export const RecoverPassword = ()=>{
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Text>Recupera tu contraseña</Form.Text>
                        <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Nueva Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guaradar tu contraseña
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}