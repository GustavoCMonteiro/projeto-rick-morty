import Header from "./components/Header";
import Home from "./pages/Home";
import Search from "./pages/Search";
import React from "react";

function App() {
  const [page, setPage] = React.useState("home");

  return (
    <>
      <Header setPage={setPage} />
      {page === "home" && <Home />}
      {page === "search" && <Search />}
    </>
  );
}

export default App;
