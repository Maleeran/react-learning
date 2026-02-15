import MemoList from "./components/MemoList";
import NavBar from "./components/NavBar";
import BottomNav from "./components/BottomNav";
import { BrowserRouter, Routes, Route } from "react-router";
import Add from "./components/Add";
import AppLayout from "./components/AppLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<MemoList />} />
          <Route path="/Add" element={<Add />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
