import React, { useEffect } from 'react'
import { useProjects } from '../../hooks/useProjects';
import {ProjectPreview} from "../../components/ProjectPreview"
import classes from "./style.module.css"


export const Projects = () => {
 
  const {loading, alert, projects, getProjects} = useProjects();

  useEffect(() => {
    getProjects()
  }, []);

  return (
    <>
    <h1 className={classes["title"]}>
      Proyectos
    </h1>
    <div className={classes["div-container"]}>
      {
        loading 
        ?
        <p>Cargando...</p>
        :
        projects.length
        ?
        projects.map(project => <ProjectPreview key={project._id} {...project}/>)
        :
        <p>No hay proyectos agregados</p>
      }
    </div>
    </>
  )
}