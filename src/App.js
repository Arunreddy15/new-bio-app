import {useRoutes} from "react-router-dom"

import './App.css';
import Home from "./components/Home";
import Career from "./components/Career";
import About from "./components/About";
import Info from "./components/Info";


function App() {
    
   const routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/info', element: <Info /> },
    { path: '/career', element: <Career /> }
]);

return routes;
}

export default App;
