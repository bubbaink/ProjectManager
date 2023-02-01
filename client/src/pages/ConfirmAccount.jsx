import { Col, Container, Form, Row,Button } from "react-bootstrap"

export const ConfirmAccount =()=>{
    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Text>Tu cuenta ha sido verificada</Form.Text>
                        <Form.Text>Presione el boton para volver a la pagina</Form.Text>
                        <Button>volver</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}