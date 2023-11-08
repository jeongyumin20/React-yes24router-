// App.jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
// import Home from '../src/pages/Home';
import Root from './pages/Root';
import BestSeller from './pages/BestSeller';
import RealTimeBestSeller from './pages/RealTimeBestSeller';
import DayBestSeller from './pages/DayBestSeller';
import MonthWeekBestSeller from './pages/MonthWeekBestSeller';
import HotPriceBestSeller from './pages/HotPriceBestSeller';
import SteadySeller from './pages/SteadySeller';

// 1. createBrowserRouter 생성
  const router = createBrowserRouter([
    {
      path:'/',
      element: <Root />, // Navbar, Outlet
      children : [
        {index : '/', element: <BestSeller />},
        {path : '/realtime', element: <RealTimeBestSeller />},
        {path : '/day', element: <DayBestSeller />},
        {path : '/monthweek', element: <MonthWeekBestSeller />},
        {path : '/hotprice', element: <HotPriceBestSeller />},
        {path : '/steady', element: <SteadySeller />},
      ],
    }
  ]); 

function App() {
  return (
    // 2. routerProvider
    <RouterProvider router={router}/>
  );
}

export default App;
