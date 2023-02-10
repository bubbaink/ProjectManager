import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Alerts } from "../../components/Alerts";
import { Collaborator } from "../../components/Collaborator";
import { Task } from "../../components/Task";
import { useProjects } from "../../hooks/useProjects";
import classes from "./style.module.css"

export const Project = () => {

  const {id} = useParams();
  const { loading, alert, getProject, project } = useProjects();

  const { name, description, dateExpire, client, _id } = project;

  useEffect(() => {
    getProject(id);
  }, [id]);

  if(alert.msg) return <Alerts {...alert}/>

  return (
    <>
      {loading ? (
        <p>Cargando...</p>
      ) : (
        <div className={classes["card"]}>
          <div className={classes["info1"]}>
          <div className={classes["info1"]}>
            <h1 className={classes["name-p"]}>{name}</h1>
            <Link
              to={`/projects/edit-project/${_id}`}>
              <p>Editar</p>
            </Link>
          </div>
          <h2>{client}</h2>
          </div>
          <hr/>

          <div className={classes["info2"]}>
          <p>{description}</p>
          <div className={classes["type-text"]}>
            <p>Tareas del proyecto</p>
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={classes["img"]}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
              <p>Nueva Tarea</p>
            </div>
          </div>
          {[1, 2].map((task) => (
            <Task key={task}/>
          ))}
          <div className={classes["type-text"]}>
            <p >Colaboradores</p>

            <button>
              <p>Agregar Colaborador</p>
            </button>
          </div>
          {[1, 2].map((collaborator) => (
            <Collaborator key={collaborator}/>
          ))}
        </div>
        </div>
      )}
    </>
  );
};