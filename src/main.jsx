import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Team from "./pages/Team/Team.jsx";
import Contacts from "./pages/Contacts/Contacts.jsx";

import Form from "./pages/Form/Form.jsx";
import Invoices from "./pages/Invoices/Invoices.jsx";
import Calendar from "./pages/Calendar/Calendar.jsx";
import Faq from "./pages/Faq/Faq.jsx";
import Bar from "./pages/Bar/Bar.jsx";
import Pie from "./pages/Pie/Pie.jsx";
import Geography from "./pages/Geography/Geography.jsx";
import NotFound from "./pages/NotFound/NotFound";
import LineChart from "./pages/Line/LineChart.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Dashboard />} />
      <Route path="team" element={<Team />} />
      <Route path="contacts" element={<Contacts />} />
      <Route path="invoices" element={<Invoices />} />
      <Route path="form" element={<Form />} />
      <Route path="calendar" element={<Calendar />} />
      <Route path="faq" element={<Faq />} />
      <Route path="bar" element={<Bar />} />
      <Route path="pie" element={<Pie />} />
      <Route path="line" element={<LineChart />} />
      <Route path="geography" element={<Geography />} />
      <Route path="*" element={<NotFound />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
