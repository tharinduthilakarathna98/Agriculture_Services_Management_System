import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//import "./App.css";
import "./components/educationComponents/Educationstyle.css"
//import "./App.css";
import "./App.css";
//import "./components/HealthCare/Health.css";

//import Header from "./components/Header";
import Navigator from "./components/Navigator/Navigator";
import Footer from "./components/Footer";
import AllServices from "./components/AllServices";
//import Courseadmin from "./components/educationComponents/Courseadmin";
import Coursehome from "./components/educationComponents/Coursehome";
import Courseinsert from "./components/educationComponents/Courseinsert";
import Updatecourse from "./components/educationComponents/Updatecourse";
import Courseadmin from "./components/educationComponents/Courseadmin";
import Coursecontent from "./components/educationComponents/Coursecontent";
import Crspayment from "./components/educationComponents/Crspayment";
import CourseCategory from "./components/educationComponents/CourseCategory";
import Course_report from "./components/educationComponents/Course_report";

import Addevent from "./components/Events/Addevent";
import Eventshome from "./components/Events/Eventshome";
import EventAdmin from "./components/Events/EventAdmin";
import Eventdetail from "./components/Events/Eventdetail";
import UpdateEvent from "./components/Events/UpdateEvent";
import RegisterEvent from "./components/Events/RegisterEvent";

// Store Components
import StoreHome from "./components/Store/StoreHome";
import StoreProducts from "./components/Store/StoreProducts";
import StoreProductsDetails from "./components/Store/StoreProductsDetails";
import StoreOrderForm from "./components/Store/StoreOrderForm";
import StoreAddProductForm from "./components/Store/StoreAddProductForm";

// Products Components
import AddProduct from "./components/Product/Product_Manager/AddProduct";
import AllProducts from "./components/Product/Product_Manager/AllProducts";
import CompanyRequest from "./components/Product/User_Company/CompanyRequests";
import AllCompanyRequest from "./components/Product/User_Company/AllCompanyRequest";
import UpdateProducts from "./components/Product/Product_Manager/UpdateProducts";
import StockDetails from "./components/Product/Product_Manager/StockDetails";
import ProductBill from "./components/Product/User_Company/ProductBill";
import CompanyHomePage from "./components/Product/User_Company/CompanyHomePage";
import PriceCalculator from "./components/Product/User_Company/PriceCalculator";

// Ads Components
import AdvertiserForm from "./components/Ads/AdvertiserForm";
import PropertyCatalog from "./components/Ads/PropertyCatalog";
import DisplayAd from "./components/Ads/DisplayAd";
import AdvertiserLogin from "./components/Ads/AdvertiserLogin";

/*CareerManagement*/

import "./components/CareerManagement/Display.css";
import "./components/CareerManagement/Apply.css";
import "./components/CareerManagement/Add.css";
import "./components/CareerManagement/CareerHome.css";
import "./components/CareerManagement/Admin.css";

import VacancyDisplay from "./components/CareerManagement/VacancyDisplay";
import GuidanceDisplay from "./components/CareerManagement/GuidanceDisplay";
import VacancyAdmin from "./components/CareerManagement/VacancyAdmin";
import GuidanceAdmin from "./components/CareerManagement/GuidanceAdmin";
import ApplyVacancy from "./components/CareerManagement/ApplyVacancy";
import ApplyGuidance from "./components/CareerManagement/ApplyGuidance";
import CandidateRegister from "./components/CareerManagement/CandidateRegister";
import AddNewVacancies from "./components/CareerManagement/AddNewVacancies";
import AddNewGuidance from "./components/CareerManagement/AddNewGuidance";
import CandidateAdmin from "./components/CareerManagement/CandidateAdmin";
import UpdateGuidance from "./components/CareerManagement/UpdateGuidance";
import UpdateVacancy from "./components/CareerManagement/UpdateVacancy";
import ApplyVacancyAdmin from "./components/CareerManagement/ApplyVacancyAdmin";
import ApplyGuidanceAdmin from "./components/CareerManagement/ApplyGuidanceAdmin";
import CareerHome from "./components/CareerManagement/CareerHome";

import AdminViewAds from "./components/Ads/AdminViewAds";
import AdminUpdateAds from "./components/Ads/AdminUpdateAds";
import AdvertiserDetails from "./components/Ads/AdvertiserDetails";

// Appointments Components - Healthcare
import AddAppointments from "./components/HealthCare/AddAppointments";
import AllappointmentsVet from "./components/HealthCare/AllappointmentsUser";
import AllappointmentsManager from "./components/HealthCare/AllappointmentsManager";
import UpdateAppointmentManager from "./components/HealthCare/UpdateAppointmentManager";
import HealthHome from "./components/HealthCare/HealthHome1";
import Happointmentinvoice from "./components/HealthCare/CustomerInvoice";
import AllAppointmentReport from "./components/HealthCare/AllAppointmentReport";

// // Lab Components
// import AddReport from "./components/AddReport";
// import AllReports from "./components/AllReports";
// import DeleteReport from "./components/DeleteReport";
// import EditReport from "./components/EditReport";
// import ReportDetails from "./components/ReportDetails";

//Lab components
import AddReport from "./components/labComponent/AddReport";
import AllReports from "./components/labComponent/AllReports";
import EditReport from "./components/labComponent/EditReport";
import ReportDetails from "./components/labComponent/ReportDetails";
import UserAllReports from "./components/labComponent/UserAllReports";
import UserReportDetails from "./components/labComponent/UserReportDetails";
//import DeleteReport from "./components/labComponent/DeleteReport";

// User Components
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Profile from "./components/Users/Profile";

//Store Components
import StorePaymentScreen from "./components/Store/StorePaymentScreen";
import StoreAdminProductsEdit from "./components/Store/StoreAdminProductsEdit";
import StoreAdminProducts from "./components/Store/StoreAdminProducts";
import StoreAdminOrders from "./components/Store/StoreAdminOrders";
import StoreAdminPayments from "./components/Store/StoreAdminPayments";

function App() {
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Navigator />
      <Routes>
        <Route path="/" element={<AllServices />} />
        {/*  
        <Route path="/adform" element={<AdvertiserForm />} />
        <Route path="/properties" element={<PropertyCatalog />} />
        <Route path="/DisplayAd" element={<DisplayAd />} />
        <Route path="/AdverLogin" element={<AdvertiserLogin />} />
        */}

        <Route path="/VacancyDisplay" element={<VacancyDisplay />} />
        <Route path="/GuidanceDisplay" element={<GuidanceDisplay />} />
        <Route path="/VacancyAdmin" element={<VacancyAdmin />} />
        <Route path="/GuidanceAdmin" element={<GuidanceAdmin />} />
        <Route path="/ApplyVacancy" element={<ApplyVacancy />} />
        <Route path="/ApplyGuidance" element={<ApplyGuidance />} />
        <Route path="/CandidateRegister" element={<CandidateRegister />} />
        <Route path="/AddNewVacancies" element={<AddNewVacancies />} />
        <Route path="/AddNewGuidance" element={<AddNewGuidance />} />
        <Route path="/CandidateAdmin" element={<CandidateAdmin />} />
        <Route path="/UpdateGuidance/:id" element={<UpdateGuidance />} />
        <Route path="/UpdateVacancy/:id" element={<UpdateVacancy />} />
        <Route path="/ApplyVacancyAdmin" element={<ApplyVacancyAdmin />} />
        <Route path="/ApplyGuidanceAdmin" element={<ApplyGuidanceAdmin />} />
        <Route path="/CareerHome" element={<CareerHome />} />

        {/* Education course Routes */}
        <Route path="/" element={<AllServices />} />
        <Route path="/coursehome" element={<Coursehome />} />
        <Route path="/courseinsert" element={<Courseinsert />} />
        <Route path="/updatecourse/:id" element={<Updatecourse />} />
        <Route path="/courseadmin" element={<Courseadmin />} />
        <Route path="/coursecontent/:id" element={<Coursecontent />} />
        <Route path="/cpayment" element={<Crspayment />} />
        <Route path="/ccategory/:cat" element={<CourseCategory />} />
        <Route path="/coursereport" element={<Course_report />} />
        {/*
        <Route path="/Ulabs" element={<UserAllReports />} />
         */}
        {/* Events Routes */}
        <Route path="/events/add" element={<Addevent />} />
        <Route path="/events/home" element={<Eventshome />} />
        <Route path="/events/admin" element={<EventAdmin />} />
        <Route path="/events/detail" element={<Eventdetail />} />
        <Route path="/events/update/:id" element={<UpdateEvent />} />
        <Route path="/events/register" element={<RegisterEvent />} />
        {/* Health Lab Routes */}
        <Route path="/rep" element={<AllReports />} />
        <Route path="/add" element={<AddReport />} />
        <Route path="/edit/:id" element={<EditReport />} />
        <Route path="/rep/:id" element={<ReportDetails />} />
        <Route path="/" element={<AllServices />} />
        <Route path="/Ulabs" element={<UserAllReports />} />
        <Route path="/URepDet/:id" element={<UserReportDetails />} />
        {/*
          <Route
          path="/productUpdate/:id/:name/:quantity"
          element={<UpdateProducts />}
        />
        <Route path="/stockDetails" element={<StockDetails />} />
        <Route path="/productBill" element={<ProductBill />} />
        <Route path="/" element={<AllServices />} />

          {/* Health Care Appointments Routes */}
        <Route path="/Appointments" element={<AddAppointments />} />
        <Route path="/HVet" element={<AllappointmentsVet />} />
        <Route path="/HManager" element={<AllappointmentsManager />} />
        <Route path="/HMUpdate" element={<UpdateAppointmentManager />} />
        <Route path="/AllAppointment" element={<AddAppointments />} />
        <Route path="/HHome" element={<HealthHome />} />
        <Route
          path="/HInvoice/:CustomerName/:NIC/:AnimalType/:ContactNo/:Address/:date/:Time"
          element={<Happointmentinvoice />}
        />
        <Route
          path="/AllAppointmentReport"
          element={<AllAppointmentReport />}
        />

        {/* Store Routes */}
        <Route path="/store" element={<StoreHome />} />
        <Route path="/store/products/:category" element={<StoreProducts />} />
        <Route
          path="/store/products/product/:id"
          element={<StoreProductsDetails />}
        />
        <Route
          path="/store/order/store-order-create/:product/:quantity/:price"
          element={<StoreOrderForm />}
        />
        <Route
          path="/store/order/payment/:orderId"
          element={<StorePaymentScreen />}
        />
        <Route
          path="/store/product/add-product"
          element={<StoreAddProductForm />}
        />
        <Route
          path="/store/store-admin-products"
          element={<StoreAdminProducts />}
        />
        <Route
          path="/store/store-admin-orders"
          element={<StoreAdminOrders />}
        />
        <Route
          path="/store/store-admin-payments"
          element={<StoreAdminPayments />}
        />
        <Route
          path="/store/store-admin-products/edit/:pid"
          element={<StoreAdminProductsEdit />}
        />
        {/*
        <Route path="/Ads/add" element={<AddProduct />} />
        <Route path="/Ads/productSee" element={<AllProducts />} />
        <Route path="/Ads/company" element={<CompanyRequest />} />
        */}
        {/*

        <Route path="/productadd" element= {<AddProduct/>}/>
        <Route path="/productSee" element= {<AllProducts/>}/>
        <Route path="/companyadd" element= {<CompanyRequest/>}/>
        <Route path="/companySee" element= {<AllCompanyRequest/>}/>
        <Route path="/productUpdate/:id/:name/:quantity" element= {<UpdateProducts/>}/>
        <Route path="/stock" element= {<StockDetails/>}/>
        <Route path="/productBill" element={<ProductBill/>}/>
        */}
        {/*Product Routes*/}
        <Route path="/productadd" element={<AddProduct />} />
        <Route path="/productSee" element={<AllProducts />} />
        <Route path="/companyadd" element={<CompanyRequest />} />
        <Route path="/companySee" element={<AllCompanyRequest />} />
        <Route
          path="/productUpdate/:id/:name/:quantity"
          element={<UpdateProducts />}
        />
        <Route path="/stock" element={<StockDetails />} />
        <Route path="/productBill" element={<ProductBill />} />
        <Route path="/companyHome" element={<CompanyHomePage />} />
        <Route path="/priceCal" element={<PriceCalculator />} />

        {/* Ads Routes */}
        <Route path="/Ads/adform" element={<AdvertiserForm />} />
        <Route path="/Ads/properties" element={<PropertyCatalog />} />
        <Route path="/Ads/AdverLogin" element={<AdvertiserLogin />} />
        <Route path="/Ads/AdminView" element={<AdminViewAds />} />
        <Route
          path="/Ads/edit/:id/:town/:agentRef/:heading/:description/:sizeofArea/:priceRate/:contactName/:email/:phone/:image"
          element={<AdminUpdateAds />}
        />
        <Route
          path="/Ads/Ad/:id/:town/:agentRef/:heading/:description/:sizeofArea/:priceRate/:contactName/:email/:phone/:image"
          element={<DisplayAd />}
        />
        <Route path="/Ads/:id" element={<DisplayAd />} />
        <Route path="/Ads/AdverDetails" element={<AdvertiserDetails />} />
        {/* Users */}
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
