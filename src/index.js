
import ReactDom from "react-dom";
import Topo from "./Topo";
import Main from "./Main"
import RodaPe from "./RodaPe";
// import Feed from "./Feed"
// import SideBar from "./SideBar"

function AppInsta() {
    return (
        <div>
            <Topo />
            <Main />
            <RodaPe />
        </div>
    )
}

const divRoot = document.querySelector(".root");
const app = AppInsta();
ReactDom.render(app, divRoot);



