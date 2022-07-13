import { useState, useEffect } from "react";
import DataTable from "./Components/DataTable";

const Home = () => {
    return (
        <div className="container">
        <h1>
            Star Wars information List
        </h1>
        <DataTable></DataTable>
        </div>
    )
};
export default Home;