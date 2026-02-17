import { BrowserRouter, Routes, Route } from "react-router";

import AppLayout from "./ui/AppLayout";
import Home from "./features/home/Home";
import Search from "./features/search/Search";
import Add from "./features/add/Add";
import Edit from "./features/edit/Edit";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Add" element={<Add />} />
        </Route>
        <Route path="/memo/:memoId" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
