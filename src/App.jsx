import { Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import Auth from "./pages/auth/Auth";
import ShopPage from "./pages/ShopPage";
import Layout from "./components/layout/Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path={"/shop/:category"} element={<ShopPage />} />
        </Route>
        
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
