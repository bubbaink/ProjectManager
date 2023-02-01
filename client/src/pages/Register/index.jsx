import { Col, Container, Form, Row,Button, Image } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm";
import { clientAxios } from "../../config/clientAxios";
import {Alerts} from "../../components/Alerts"
import Swal from 'sweetalert2'
import { useState } from "react";
import classes from './style.module.css'
const exRegEmail = /^[^@]+@[^@]+\.[a-zA-Z]{2,}/;

export const Register = ()=>{

    const [alert, setAlert] = useState({});
    const [sending, setSending] = useState(false);

   const {formValues, setFormValues, reset, handleInputChange} = useForm({
    name:"",
    surname:"",
    email:"",
    password:"",
    password2:""
   })

   const {name,surname,email,password,password2} = formValues

    const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(formValues);
    
    if([name,email,password,password2].includes("")){
      handleShowAlert("Todos los campos son obligatorios");
      return null
    };

    if(!exRegEmail.test(email)){
      handleShowAlert("El email tiene un formato inválido");
      return null
    };

    if(password !== password2){
      handleShowAlert("Las contraseñas no coinciden");
      return null
    };

    try {

      setSending(true)

      const {data} = await clientAxios.post("/auth/register",{
        name,
        surname,
        email,
        password
      });

      setSending(false)
      
      Swal.fire({
        icon: 'info',
        title: 'Gracias por registrate!',
        text: data.msg,
      });

      reset()
      
    } catch (error) {
      console.error(error);
      handleShowAlert(error.response.data.msg);
      reset()
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
            {
                alert.msg && <Alerts {...alert}/>
            }
            <Row className={classes["row"]}>
                <Col className={classes["col"]}>
                    <Form onSubmit={handleSubmit} noValidate className={classes["form"]}>
                        <Form.Text className={classes["title"]}>Registrate</Form.Text>

                        <Form.Label className={classes["label"]} htmlFor="name">Nombre</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} id="name" type="text" name="name" value={name} onChange={handleInputChange} placeholder="Escriba su nombre" />
                        </Form.Group>

                        <Form.Label className={classes["label"]} htmlFor="surname">Apellido</Form.Label>
                        <Form.Group className={classes["box-input"]}> 
                        <Form.Control className={classes["input"]} id="surname" type="text" name="surname" value={surname} onChange={handleInputChange} placeholder="Escriba su apellido" />
                        </Form.Group>

                        <Form.Label className={classes["label"]} htmlFor="email">Email</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} id="email" type="email" name="email" value={email} onChange={handleInputChange} placeholder="Ingrese un email valido"/>
                        </Form.Group>

                        <Form.Label className={classes["label"]} htmlFor="password">Contraseña</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} id="password" type="password" name="password" value={password} onChange={handleInputChange} placeholder="Ingrese su contraseña" />
                        </Form.Group>

                        <Form.Label className={classes["label"]} htmlFor="password2">Confirmar Contraseña</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} id="password2" type="password" name="password2" value={password2} onChange={handleInputChange} placeholder="Reingrese su contraseña" />
                        </Form.Group>

                        <Button className={classes["box-input"]} variant="primary" type="submit" disabled = {sending}>
                            Crear cuenta
                        </Button>
                        <Link className={classes["noAccount"]}to={'/'}> ¿Ya tenes cuenta? Iniciá sesión </Link> 
                    </Form>
                </Col>
                <Col>
                  <Image className={classes["div-img"]} fluid src="logo.png"/>
                </Col>
                
            </Row>
        </Container>
    )
}