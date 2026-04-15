import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Header from "./components/layout/Header";
import Auth from "./pages/auth/Auth";
import ShopPage from "./pages/ShopPage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route path="/" element={<HomePage />} />
        <Route path={"/shop/:category"} element={<ShopPage />} />
      </Route>
      <Route path="/auth" element={<Auth />} />
    </Routes>
  );
};

export default App;
