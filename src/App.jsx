import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminroutes from "./Router/Adminroutes";
import CommonRoutes from "./Router/CommonRoutes";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/admin/*' element={<Adminroutes/>}/>
      <Route path='/*' element={<CommonRoutes/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
