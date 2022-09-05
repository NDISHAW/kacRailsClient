import React, { useState } from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

// eslint-disable-next-line react/destructuring-assignment
const PropertyPane = (props) => <div className="mt-5">{props.children}</div>;

const Scheduler = () => {
  const [scheduleObj, setScheduleObj] = useState();

  const change = (args) => {
    scheduleObj.selectedDate = args.value;
    scheduleObj.dataBind();
  };

  const onDragStart = (arg) => {
    // eslint-disable-next-line no-param-reassign
    arg.navigation.enable = true;
  };

  return (

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
            <Link to="/ecommerce" element={<Ecommerce />} />

            {/* pages  */}
            <Link to="/orders" element={<Orders />} />
            <Link to="/employees" element={<Employees />} />
            <Link to="/customers" element={<Customers />} />

            {/* apps  */}
            <Link to="/kanban" element={<Kanban />} />
            <Link to="/editor" element={<Editor />} />
            <Link to="/calendar" element={<Calendar />} />
            <Link to="/color-picker" element={<ColorPicker />} />

            {/* charts  */}
            <Link to="/line" element={<Line />} />
            <Link to="/area" element={<Area />} />
            <Link to="/bar" element={<Bar />} />
            <Link to="/pie" element={<Pie />} />
            <Link to="/financial" element={<Financial />} />
            <Link to="/color-mapping" element={<ColorMapping />} />
            <Link to="/pyramid" element={<Pyramid />} />
            <Link to="/stacked" element={<Stacked />} />
          </div>
          <Ecommerce />
          <Footer />
        </div>
      </div>
    </div>    

   
  );
};

export default Scheduler;
