import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import Auth from "./pages/auth/Auth";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<HomePage />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
