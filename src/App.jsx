import React from "react";
import { Toaster } from "react-hot-toast";
import { Navigate, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage";
import LoginPage from "./pages/LoginPage";
import Layout from "./pages/Layout";
import AttendancePage from "./pages/AttendancePage";
import EmployeesPage from "./pages/EmployeesPage";
import LeavePage from "./pages/LeavePage";
import SettingsPage from "./pages/SettingsPage";
import PrintPayslipsPage from "./pages/PrintPayslipsPage";
import LoginForm from "./components/LoginForm";
import PayslipsPage from "./pages/PayslipsPage";

const App = () => {
  return (
    <>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/login/admin"
          element={
            <LoginForm
              role="admin"
              title="Login Admin"
              subtitle="Silahkan masuk ke akun admin anda"
            />
          }
        />
        <Route
          path="/login/employee"
          element={
            <LoginForm
              role="karyawan"
              title="Login Karyawan"
              subtitle="Silahkan masuk ke akun karyawan anda"
            />
          }
        />

        {/* Main application routes */}
        <Route element={<Layout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/employees" element={<EmployeesPage />} />
          <Route path="/attendance" element={<AttendancePage />} />
          <Route path="/leave" element={<LeavePage />} />
          <Route path="/payslips" element={<PayslipsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Route>

        {/* Print Paylips Route */}
        <Route path="/print/payslips/:id" element={<PrintPayslipsPage />} />

        {/* Redirect to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </>
  );
};

export default App;
