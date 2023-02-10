import { Col, Container, Form, Row,Button, Nav } from "react-bootstrap"
import {useEffect, useState} from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { clientAxios } from "../config/clientAxios";
import Swal from "sweetalert2";
import { Alerts } from "../components/Alerts";

export const ConfirmAccount =()=>{

    const {token} = useParams()
    const navigate = useNavigate()

    const [alert, setAlert] = useState({});

    const handleShowAlert = (msg) => {
        setAlert({
          msg
        });
      }
    
    useEffect(() => {
        const confirmAccount = async ()=>{
            try {
               const {data} = await clientAxios.get(`/auth/checked?token=${token}`)

               Swal.fire({
                allowOutsideClick: false,
                icon: 'success',
                title: 'Tu cuenta ha sido verificada',
                text: data.msg,
                confirmButtonText : "Continuar"
               }).then(result=>{
                if(result.isConfirmed){
                    navigate("/")
                }
               });

            } catch (error) {
                console.error(error)
                handleShowAlert(error.response?.data.msg)
            }
        }

        confirmAccount()
    }, []);

    return (
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Text>Tu cuenta ha sido verificada</Form.Text>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}