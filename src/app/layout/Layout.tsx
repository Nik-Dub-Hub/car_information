import Footer from "../../widgets/Footer/Footer";
import Header from "../../widgets/Header/Header";
import {Outlet} from "react-router"
import './Layout.css'
export default function Layout (){

    return (
      <div className="wraper">
          <Header />
        <main className="content">
          <Outlet />
        </main>
          <Footer />
      </div>
    );
}