import "./App.css";
import Layout from "./components/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import BoardDetail from "./pages/BoardDetail";
import BoardList from "./pages/BoardList";
import BoardWrite from "./pages/BoardWrite";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/BoardList" element={<BoardList />} />
        <Route path="/BoardDetail" element={<BoardDetail />} />
        <Route path="/BoardWrite" element={<BoardWrite />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
