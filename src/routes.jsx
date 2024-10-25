/* eslint-disable react/display-name */
import React from "react";
import { lazy, Suspense } from "react";
import Layout from "./layout/admin/Layout";
import ManagerLayout from "./layout/manager/Layout";
import SalesLayout from "./layout/sales/Layout";
import HomeLayout from "./layout/home/Layout";
import AuthLayout from "./layout/auth/Layout";
import { Outlet, Routes, Route } from "react-router-dom";

const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<p>loading ...</p>}>
      <Component {...props} />
    </Suspense>
  );


const isLoggedIn = localStorage.getItem("isLogIn");
// LANDING PAGEll
const Home = Loadable(lazy(() => import("./pages/home/Homepage")));
const Signup = Loadable(lazy(() => import("./pages/auth/Signup")));
const Login = Loadable(lazy(() => import("./pages/auth/Login")));
//const Logout = Loadable(lazy(() => import("./pages/auth/Logout")));
const Verification = Loadable(lazy(() => import("./pages/auth/Verification")));
const EmailVerify = Loadable(lazy(() => import("./pages/auth/EmailVerify")));
const ForgetPassword = Loadable(lazy(() => import("./pages/auth/ForgetPassword")));
const ResetPwd = Loadable(lazy(() => import("./pages/auth/ResetPwd")));

// const PrivacyPolicy = Loadable(
//   lazy(() => import("./pages/others/PrivacyPolicy"))
// );

// ADMIN PAGE
const Dashboard = Loadable(lazy(() => import("./pages/admin/dashboard/Dashboard")));
const Users = Loadable(lazy(() => import("./pages/admin/users/Users")));
const AddUser = Loadable(lazy(() => import("./pages/admin/users/AddUser")));
const Leads = Loadable(lazy(() => import("./pages/admin/leads/Leads")));
const AddLead = Loadable(lazy(() => import("./pages/admin/leads/AddLeads")));
const Services = Loadable(lazy(() => import("./pages/admin/services/Services")));
const AddServices = Loadable(lazy(() => import("./pages/admin/services/AddServices")));
const Projects = Loadable(lazy(() => import("./pages/admin/todos/Projects")));
const Todos = Loadable(lazy(() => import("./pages/admin/todos/Todos")));
const Products = Loadable(lazy(() => import("./pages/admin/products/Products")));
const Emails = Loadable(lazy(() => import("./pages/admin/emails/Emails")));
const Invoice = Loadable(lazy(() => import("./pages/admin/Invoice/Invoice")));

const ErrorPage = Loadable(lazy(() => import("./pages/others/ErrorPage")));

const SalesDashboard = Loadable(lazy(() => import("./pages/sales/dashboard/Dashboard")));
const SalesUsers = Loadable(lazy(() => import("./pages/sales/users/Users")));
const SalesAddUser = Loadable(lazy(() => import("./pages/sales/users/AddUser")));
const SalesLeads = Loadable(lazy(() => import("./pages/sales/leads/Leads")));
const SalesAddLead = Loadable(lazy(() => import("./pages/sales/leads/AddLeads")));
const SalesEditLead = Loadable(lazy(() => import("./pages/sales/leads/Leads")));
const SalesServices = Loadable(lazy(() => import("./pages/sales/services/Services")));
const SalesAddServices = Loadable(lazy(() => import("./pages/sales/services/AddServices")));
const SalesProjects = Loadable(lazy(() => import("./pages/sales/todos/Projects")));
const SalesTodos = Loadable(lazy(() => import("./pages/sales/todos/Todos")));
const SalesProducts = Loadable(lazy(() => import("./pages/sales/products/Products")));
const SalesEmails = Loadable(lazy(() => import("./pages/sales/emails/Emails")));
const SalesInvoice = Loadable(lazy(() => import("./pages/sales/Invoice/Invoice")));

function routes () {
return (
  
<Routes>
    <Route path= "/" element= {<HomeLayout><Home /></HomeLayout>} />
    <Route path= "" element= {<AuthLayout><Outlet /></AuthLayout>}>
    <Route path= "signup" element= {<Signup />} />
    <Route path= "login" element= {<Login />} />
    <Route path= "verification" element= {<Verification />} />
    <Route path= "forget-password" element= {<ForgetPassword />} />
    <Route path= "/email-verification/:id" element= {<EmailVerify />}/>
    <Route path= "/reset-password/:id" element= {<ResetPwd />} />
    </Route>

    <Route path= "admin" element= {<Layout />}>
    <Route path= "dashboard" element= {<Dashboard />} />
    <Route path= "user" element= {<Users />} />
    <Route path= "users/add-user" element= {<AddUser />} />
    <Route path= "leads" element= {<Leads />} />
    <Route path= "leads/add-lead" element= {<AddLead />}/>
    <Route path= "services" element= {<Services />} />
    <Route path= "services/add-service" element= {<AddServices />} />
    <Route path= "todos" element= {<Projects />} />
    <Route path= "todos/:id" element= {<Todos />} />
    <Route path= "emails" element= {<Emails />}/>
    <Route path= "invoice" element= {<Invoice />} />
    <Route path= "product" element= {<Products />} />
    </Route>
  
    <Route path= "sales" element= {<SalesLayout />}>
    <Route path= "dashboard" element= {<SalesDashboard />} />
    <Route path= "user" element= {<SalesUsers />} />
    <Route path= "users/add-user" element= {<SalesAddUser />} />
    <Route path= "leads" element= {<SalesLeads />} />
    <Route path= "leads/add-lead" element= {<SalesAddLead />}/>
    <Route path= "services" element= {<SalesServices />} />
    <Route path= "services/add-service" element= {<SalesAddServices />} />
    <Route path= "todos" element= {<SalesProjects />} />
    <Route path= "todos/:id" element= {<SalesTodos />} />
    <Route path= "emails" element= {<SalesEmails />}/>
    <Route path= "invoice" element= {<SalesInvoice />} />
    <Route path= "product" element= {<SalesProducts />} />
    </Route>
    <Route path= "*" element= {<ErrorPage />} />
  </Routes>
);}

export default routes;