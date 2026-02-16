import { BrowserRouter, Routes, Route } from "react-router";

import AppLayout from "./components/AppLayout";
import MemoList from "./components/MemoList";
import Search from "./components/Search";
import Add from "./components/Add";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MemoList />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
