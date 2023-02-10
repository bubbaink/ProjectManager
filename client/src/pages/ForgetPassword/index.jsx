import { useState } from "react";
import { Col, Container, Form, Row,Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Swal from "sweetalert2";
import { Alerts } from "../../components/Alerts";
import { clientAxios } from "../../config/clientAxios";
import classes from './style.module.css'

export const ForgetPassword =() =>{

    const [alert, setAlert] = useState({});
    const [email, setEmail] = useState("");
    const [sending, setSending] = useState(false);

    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(!email){
            handleShowAlert("Ingrese el email")
            return null
        }
        try {
            setSending(true)
            const {data}= await clientAxios.post("/auth/send-token",{
                email
            })
            setSending(false)

            Swal.fire({
                allowOutsideClick: false,
                icon: 'success',
                title: 'Revisa tu email para continuar',
                text: data.msg,
                confirmButtonText : "Continuar"
               });

               setEmail("")
        } catch (error) {
            console.error(error)
            handleShowAlert(error.response?.data.msg);
            setEmail("")
        }

    }

    const handleShowAlert = (msg) => {
        setAlert({
          msg
        });
    
        setTimeout(() => {
          setAlert({});
        }, 3000);
      }

    return(
        <Container>
            <Row>
                <Col className={classes["col"]}>
                    <>
                    {
                        alert.msg && <Alerts {...alert}/>
                    }
                    </>
                    <Form onSubmit={handleSubmit} className={classes["form"]} noValidate>
                        <Form.Text className={classes["title"]}>Recupera tu contraseña</Form.Text>

                        <Form.Label className={classes["label"]}>Email address</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} value={email} onChange={(e)=> setEmail(e.target.value)} name="email" id="email" type="email" placeholder="Ingrese su email" />
                        </Form.Group>
                        <Button className={classes["box-input"]} variant="primary" type="submit" disabled={sending}>
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