import { Outlet } from "react-router-dom";
import Head from "./Head";
import LeftNav from "./LeftNav";

const Root = () => {
    return (
        <div>
            <Head></Head>
            <div className="w-11/12 mx-auto max-w-screen-2xl md:flex">
                <LeftNav></LeftNav>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Root;