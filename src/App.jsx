import { React, useState } from "react";
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import useUserSearch from "./useUserSearch"

import Home from "./Home/Home";
import Settings from "./Settings/Settings";
const App = () => {
  const options = ["CH", "ES", "FR", "GB"];
  const [nat, setNat] = useState(JSON.parse(sessionStorage.getItem('nat')) ? JSON.parse(sessionStorage.getItem('nat')) : []);
  const [pageNumber, setPageNumber] = useState(1);
  const { loading, error, users, setUsers, hasMore } = useUserSearch(nat, pageNumber);
  

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home loading={loading} error={error} users={users} hasMore={hasMore} setPageNumber={setPageNumber}/>} />
        <Route path="/settings" element={<Settings setNat={setNat} nat={nat} options={options} setUsers={setUsers}/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
