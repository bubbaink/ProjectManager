import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { Col, Container, Form, Row,Button } from "react-bootstrap"
import { Link, Navigate, useNavigate } from "react-router-dom"
import classes from './style.module.css'
import { useForm } from "../../hooks/useForm";
import { Alerts } from "../../components/Alerts";
import { clientAxios } from "../../config/clientAxios";



export const Login =()=>{

    const [alert, setAlert] = useState({});
    const {setAuth} = useAuth()
    const navigate = useNavigate()


    const handleShowAlert = (msg, time = true) => {
        setAlert({
          msg 
        });

        if(time){
            setTimeout(() => {
                setAlert({})
            }, 3000 );
        }

    }


    const {formValues, setFormValues, reset, handleInputChange} = useForm({
      
        email:"",
        password:"",
        
       })

       const {email, password}= formValues  

       const handleSubmit = async (e)=>{
        e.preventDefault()

        if([email,password].includes("")){
            handleShowAlert("Todos los campos son obligatorios");
            return null
          };
          
          try {
            
            const {data} = await clientAxios.post("/auth/login", {email,password})
            console.log(data)

            setAuth(data.user)
            sessionStorage.setItem("token", data.token)
            
            navigate("/projects")

          } catch (error) {
            console.error(error)
            handleShowAlert(error.response?.data.msg)
          }

       }
    return (
        <Container>
            <Row>
                <Col className={classes["col"]}>
                    <Form className={classes["form"]} onSubmit={handleSubmit}>
                        {
                            alert.msg && <Alerts {...alert}/>
                        }
                        <Form.Text className={classes["title"]}>Login</Form.Text>
                        
                        <Form.Label className={classes["label"]}>Email address</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} type="email" name="email" id="email" value={email} onChange={handleInputChange} placeholder="Ingrese su email" />
                        </Form.Group>

                        <Form.Label className={classes["label"]}>Password</Form.Label>
                        <Form.Group className={classes["box-input"]}>
                        <Form.Control className={classes["input"]} type="password" name="password" id="password" value={password} onChange={handleInputChange} placeholder="Ingrese su contraseña" />
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