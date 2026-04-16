import React from 'react'
import { Toaster } from 'react-hot-toast'
import { Navigate, Routes, Route } from 'react-router-dom'
import DashboardPage from './pages/DashboardPage'
import LoginPage from './pages/LoginPage'
import Layout from './pages/Layout'
import AttendancePage from './pages/AttendancePage'
import EmployeesPage from './pages/EmployeesPage'
import LeavcePage from './pages/LeavcePage'
import PaylipsPage from './pages/PaylipsPage'
import SettingsPage from './pages/SettingsPage'
import PrintPaylipsPage from './pages/PrintPaylipsPage'
import LoginForm from './components/LoginForm'

const App = () => {
  return (
   <>
    <Toaster />
    <Routes>
      <Route path="/login" element={ <LoginPage/> }/>

      {/* Role based login routes */}
      <Route path="/login/admin" element={ <LoginForm role="admin" title="Admin Login" subtitle="Sign in to your admin account"/> }/>
      <Route path="/login/employee" element={ <LoginForm role="employee" title="Employee Login" subtitle="Sign in to your employee account"/> }/>

      {/* Main application routes */}
      <Route element={<Layout/>}>
        <Route path="/dashboard" element={<DashboardPage/>}/>
        <Route path="/employees" element={<EmployeesPage/>}/>
        <Route path="/attendance" element={<AttendancePage/>}/>
        <Route path="/leave" element={<LeavcePage/>}/>
        <Route path="/paylips" element={<PaylipsPage/>}/>
        <Route path="/settings" element={<SettingsPage/>}/>
      </Route>

      {/* Print Paylips Route */}
       <Route path="/print/paylips/:id" element={<PrintPaylipsPage/>}/>

      {/* Redirect to dashboard */} 
       <Route path="*" element={<Navigate to="/dashboard" replace/>}/>
    </Routes>
    </>
  )
}

export default App