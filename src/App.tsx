import { Outlet } from "react-router-dom";

import GlobalLayout from "./components/layout/GlobalLayout";
import Header from "./components/common/Header";
import MainLayout from "./components/layout/MainLayout";

export default function App() {
  return (
    <GlobalLayout>
      <Header />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </GlobalLayout>
  );
}
