
import ReactDom from "react-dom";
import Topo from "./Topo";
import Main from "./Main"
import RodaPe from "./RodaPe";

function AppInsta() {
    return (
        <div>
            <Topo />
            <Main />
            <RodaPe />
        </div>
    )
}

ReactDom.render(<AppInsta />, document.querySelector(".root"));