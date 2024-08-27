import App from "./App";
import ReactDom from "react-dom/client";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './style.css'
import 'aos/dist/aos.js'
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();
const root = ReactDom.createRoot(document.getElementById("root"));

root.render(<App />);
