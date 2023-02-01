import {BrowserRouter, Route, Routes} from "react-router-dom"
import {AuthLayout} from "../src/layouts/AuthLayout"
import { Login } from "./pages/Login"
import {ForgetPassword} from "./pages/ForgetPassword"
import {RecoverPassword} from "./pages/RecoverPassword"
import {ConfirmAccount} from "./pages/ConfirmAccount"
import { Register } from "./pages/Register"
import { NotFound } from "./components/NotFound"

function App() {
  

  return (
    <BrowserRouter>
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
      </Routes>
    </BrowserRouter>

  )
}

export default App
