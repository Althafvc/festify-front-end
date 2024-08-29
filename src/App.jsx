import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminroutes from "./Router/Adminroutes";

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/*' element={<Adminroutes/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;
