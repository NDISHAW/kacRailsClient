import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import './App.css';

import { useStateContext } from '../../context/ContextProvider';
import { Link } from 'react-router-dom';

function DashboardApp(){
  const {
    setCurrentColor,
    setCurrentMode,
    currentMode,
    activeMenu,
    currentColor,
    themeSettings,
    setThemeSettings,
  } = useStateContext();

  useEffect(() => {
    const currentThemeColor = localStorage.getItem("colorMode");
    const currentThemeMode = localStorage.getItem("themeMode");
    if (currentThemeColor && currentThemeMode) {
      setCurrentColor(currentThemeColor);
      setCurrentMode(currentThemeMode);
    }
  }, []);

  return (
    <div className={currentMode === "Dark" ? "dark" : ""}>
      <div className="flex relative dark:bg-main-dark-bg">
        <div className="fixed right-4 bottom-4" style={{ zIndex: "1000" }}>
          <TooltipComponent content="Settings" position="Top">
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ background: currentColor, borderRadius: "50%" }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>
          </TooltipComponent>
        </div>
        {activeMenu ? (
          <div className="w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}
        <div
          className={
            activeMenu
              ? "dark:bg-main-dark-bg  bg-main-bg min-h-screen md:ml-72 w-full  "
              : "bg-main-bg dark:bg-main-dark-bg  w-full min-h-screen flex-2 "
          }
        >
          <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          <div>
            {themeSettings && <ThemeSettings />}

            
              {/* dashboard  */}
              {/* <Link to="/" element={<Ecommerce />} /> */}
              <Link to="/dashboard/ecommerce" element={<Ecommerce />} />

              {/* pages  */}
              <Link to="/dashboard/orders" element={<Orders />} />
              <Link to="/dashboard/employees" element={<Employees />} />
              <Link to="/dashboard/customers" element={<Customers />} />

              {/* apps  */}
              <Link to="/dashboard/kanban" element={<Kanban />} />
              <Link to="/dashboard/editor" element={<Editor />} />
              <Link to="/dashboard/calendar" element={<Calendar />} />
              <Link to="/dashboard/color-picker" element={<ColorPicker />} />

              {/* charts  */}
              <Link to="/ldashboard/ine" element={<Line />} />
              <Link to="/dashboard/area" element={<Area />} />
              <Link to="/dashboard/bar" element={<Bar />} />
              <Link to="/dashboard/pie" element={<Pie />} />
              <Link to="/dashboard/financial" element={<Financial />} />
              <Link to="/dashboard/color-mapping" element={<ColorMapping />} />
              <Link to="/dashboard/pyramid" element={<Pyramid />} />
              <Link to="/dashboard/stacked" element={<Stacked />} />
            
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardApp;
