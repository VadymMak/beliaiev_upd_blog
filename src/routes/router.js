import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import RooyLayout from "../layouts/RooyLayout";

import Home from "../pages/home/Home";
import Services from "../components/services/Services";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RooyLayout />}>
      <Route index element={<Home />} />
      <Route path="services" element={<Services />} />
    </Route>
  )
);
