import { useEffect, useState } from "react";
import { Col, Container, Form, Row,Button } from "react-bootstrap"
import  {useParams, useNavigate } from "react-router-dom"
import Swal from "sweetalert2";
import { Alerts } from "../components/Alerts";
import { clientAxios } from "../config/clientAxios";

export const RecoverPassword = ()=>{

    const [alert, setAlert] = useState({});
    const [password, setPassword] = useState("");
    const [tokenChecked, setTokenChecked] = useState(false);

    const {token} = useParams()
    const navigate = useNavigate()

    const handleShowAlert = (msg) => {
        setAlert({
          msg 
        });

        setTimeout(() => {
            setAlert({})
        }, 3000 );
    }
    useEffect(() => {

        const checkToken= async ()=>{
            try {
                const {data} = await clientAxios.get(`/auth/reset-password?token=${token}`)
                
                setTokenChecked(true)

            } catch (error) {
                console.error(error)
                handleShowAlert(error.response?.data.msg)
            }
        }
        checkToken()
    }, []);
    
    const handleSubmit = async (e)=>{
        e.preventDefault()

        if(!password){
            handleShowAlert("Espacio obligatorio")
            return null
        }

        try {
            const {data} = await clientAxios.post(`/auth/reset-password?token=${token}`, {password})

        Swal.fire({
            allowOutsideClick: false,
            icon: 'success',
            title: 'Tu contraseña ha sido cambiada de manera exitosa',
            text: data.msg,
            confirmButtonText : "Continuar"
           }).then(result=>{
            if(result.isConfirmed){
                setPassword("")
                navigate("/")
            }
           });
        } catch (error) {
            console.error(error)
            handleShowAlert(error.response?.data.msg)
            setPassword("")
        }
    }



    return (
        <Container>
            <Row>
                <Col>
                <p>Recupera tu contraseña</p>
                {
                    alert.msg && <Alerts {...alert}/>
                }
                {
                    tokenChecked &&
                    (
                        <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name="password" id="password" value={password} onChange={(e)=> setPassword(e.target.value)} placeholder="Nueva Contraseña" />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Guaradar tu contraseña
                        </Button>
                        </Form>
                    )
                }
                </Col>
            </Row>
        </Container>
    )
}