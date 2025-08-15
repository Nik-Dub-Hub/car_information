import { BrowserRouter, Route, Routes } from "react-router";
import { CLIENT_ROUTES } from "../../shared/enums/clientRoutes";
import Layout from "../layout/Layout";
import { MainePage } from "../../pages/MainPage/MainePage";
import StockPage from "../../pages/StockPage/StockPage";

export default function Router(){
return (
  <BrowserRouter>
    <Routes>
      <Route path={CLIENT_ROUTES.MAIN} element={<Layout/>}>
        <Route path={CLIENT_ROUTES.MAIN} element={<MainePage/>}/>
        <Route path={CLIENT_ROUTES.STOCK} element={<StockPage/>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
); 
}