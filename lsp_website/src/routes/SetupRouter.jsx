import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
// import DetailBuku from "../pages/DetailBuku";
// import TambahBukus from "../pages/TambahBukus";
// import Favorites from "../pages/Favorites";
import ProtectedRoute from "./ProtectedRoute";
import HomeRoutes from "./HomeRoutes";
import DepartPage from "../pages/DepartPage";
import SalaryPage from "../pages/SalaryPage";
import Report from "../components/Report/Report";

const SetupRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Home Route */}
        <Route path="/login" element={<HomeRoutes />} />
        {/* Protected Route */}
        <Route path="/" element={<ProtectedRoute />}>
          <Route index element={<Home />} />
          <Route path="/jabatan" element={<DepartPage />} />
          <Route path="/detailgaji/:id" element={<SalaryPage />} />
          {/* <Route path="/laporan" element={<Report />} /> */}
          {/* <Route path="/detailbuku/:id" element={<DetailBuku />} />
                    <Route path="/tambahbuku" element={<TambahBukus />} />
                    <Route path="/favorites" element={<Favorites />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default SetupRouter;
