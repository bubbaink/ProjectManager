import React, { useEffect, useRef } from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import {useForm} from "../../hooks/useForm"
import { useProjects } from '../../hooks/useProjects'
import { Alerts } from '../Alerts'
import classes from "./style.module.css"

export const FormProject = () => {

    const {alert, showAlert, storeProject, project} = useProjects()

    const{id} = useParams()

    const inputName = useRef(null)
    const inputDescription = useRef(null)
    const inputDateExpire = useRef(null)
    const inputClient = useRef(null)

    const {loading,formValues, handleInputChange, reset, setFormValues}= useForm ({
        name:"",
        description:"",
        dateExpire:"",
        client:""
    })

    let {name, description, dateExpire, client} = formValues    
    
    useEffect(() => {
        /* console.log(project) */
        if(id){
            //const {name, description, dateExpire, client} = project

            inputName.current.value = project.name
            inputDescription.current.value = project.description
            inputDateExpire.current.value = project.dateExpire && project.dateExpire.split("T")[0]
            inputClient.current.value = project.client

        setFormValues({
            name : project.name,
            description : project.description,
            dateExpire : project.dateExpire.split("T")[0],
            client : project.client
        })
            
        }
    }, [id]);


    const handleSubmit = (e)=>{
        e.preventDefault()

        if([name,description,dateExpire,client].includes("")){
            showAlert("Todos los campos son obligatorios");
            return null
          };


        storeProject({
            id : id ?  id : null,
            name,
            description,
            dateExpire,
            client
        })
    }

  return (

    <Container>
            <Row >
                <Col >
                    <Form className={classes["form-project"]} onSubmit={handleSubmit}>
                        {
                            alert.msg && <Alerts {...alert}/>
                        }
                        <Form.Text  className={classes["title"]}>Nuevo proyecto</Form.Text>

                        <Form.Label htmlFor="name">Nombre del proyecto</Form.Label>
                        <Form.Group  className={classes["separador"]}>
                        <Form.Control className={classes["fecha-input"]}  id="name" type="text" name="name" value={name} ref={inputName} onChange={handleInputChange} placeholder="Nombre del Proyecto" />
                        </Form.Group>

                        <Form.Label className={classes["separador"]} htmlFor="description">Descripcion</Form.Label>
                        <Form.Group  className={classes["separador"]}> 
                        <Form.Control className={classes["description"]} as="textarea"id="description" type="text" name="description" ref={inputDescription} value={description} onChange={handleInputChange} placeholder="Descripcion del proyecto" />
                        </Form.Group>

                        <Form.Label className={classes["separador"]} htmlFor="date-expire">Fecha de entrega</Form.Label>
                        <Form.Group  className={classes["separador"]}>
                        <Form.Control className={classes["fecha-input"]} id="date-expire" type="date" name="dateExpire" value={dateExpire} ref={inputDateExpire} onChange={handleInputChange} />
                        </Form.Group>

                        <Form.Label className={classes["separador"]} htmlFor="client">Nombre del cliente</Form.Label>
                        <Form.Group  className={classes["separador"]}>
                        <Form.Control className={classes["fecha-input"]} id="client" type="text" name="client" value={client} ref={inputClient} onChange={handleInputChange} placeholder="Nombre del cliente" />
                        </Form.Group>

                        <Button  className={classes["separador"]} variant="primary" type="submit" >
                            actualizar/guardar 
                        </Button>
                    </Form>
                </Col> 
            </Row>
        </Container>

  )
}


