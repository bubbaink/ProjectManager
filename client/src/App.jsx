import {BrowserRouter, Route, Routes} from "react-router-dom"
import { AuthProvider } from "./context/AuthProvider"
import {AuthLayout} from "../src/layouts/AuthLayout"
import { Login } from "./pages/Login"
import {ForgetPassword} from "./pages/ForgetPassword"
import {RecoverPassword} from "./pages/RecoverPassword"
import {ConfirmAccount} from "./pages/ConfirmAccount"
import { Register } from "./pages/Register"
import { NotFound } from "./components/NotFound"
import { ProtectedLayout } from "./layouts/ProtectedLayout"
import { Projects } from "./pages/Projects"
import { Header } from "./components/Header"
import {ProjectAdd} from "./pages/ProjectAdd"
import {ProjectEdit} from "./pages/ProjectEdit"
import {Project} from "./pages/Project"
import { ProjectProvider } from "./context/ProjectProvider"

function App() {
  

  return (
    <BrowserRouter>
    <AuthProvider>
      <ProjectProvider>
      <Header/>
      <Routes>
        <Route
          path='/'
          element={<AuthLayout/>}
          >
          <Route
            index
            element={<Login/>}
          />
          <Route
          path="register"
          element={<Register/>}
          />
          <Route
          path="forget-password"
          element={<ForgetPassword/>}
          />
          <Route
          path="recover-password/:token"
          element={<RecoverPassword/>}
          />
          <Route
          path="confirm/:token"
          element={<ConfirmAccount/>}
          />
          <Route
          path="*"
          element={<NotFound/>}
          />

        </Route>
        <Route path="/projects" element={<ProtectedLayout/>}>
            <Route
              index
              element={<Projects/>}
            />
            <Route 
            path="create-project" 
            element={<ProjectAdd />} /> 
            <Route 
            path="edit-project/:id" 
            element={<ProjectEdit />} /> 
            <Route 
            path=":id" 
            element={<Project/>}/>
        </Route>
      </Routes>
      </ProjectProvider>
    </AuthProvider>
    </BrowserRouter>

  )
}

export default App
