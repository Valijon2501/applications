import { Route, Routes } from "react-router-dom";
import Presentation from "../submission/Presentation";


const Router = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Presentation />} />
      </Routes>
    </>
  );
};
export default Router;
