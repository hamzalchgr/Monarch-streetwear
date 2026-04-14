import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default App;
