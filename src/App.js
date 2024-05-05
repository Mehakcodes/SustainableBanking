import { Route, Link, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import EBankingPage from "./pages/EBankingPage";
import GreenInvestmentPage from "./pages/GreenInvestmentPage";
import CreditHubPage from "./pages/CreditHubPage";
import ImpactPage from "./pages/ImpactPage";
import CarbonCoinPage from "./pages/CarbonCoinPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";
import FundTransfer from "./components/ebankingpages/FundTransfer"

// import './pages/Profile';
import PersonalDetails from "./components/PersonalDetails";
import CustomerDetails from "./components/CustomerDetails";
import AccountDetails from "./components/AccountDetails";
import Profile from "./pages/Profile";
import MainNav from "./components/mainnav";
import GreenInvestment from "./pages/GreenInvestment";
import GreenProjects from "./components/GreenProjects";
import RenewableEnergyFunds from "./components/RenewableEnergyFunds";
import Transactions from "./pages/Transactions";
import Navbar from "./components/Navbar";
import { useState , useEffect} from "react";
import Raise_cap from "./loans_pages/Raise_cap";
function App() {
  const [isLogged, setIsLogged] = useState(true);

  // useEffect(() => {
  //   const userLoggedIn = localStorage.getItem("customer");
  //   if (userLoggedIn) {
  //     setIsLogged(true);
  //   }
  // }, []);
  return (
    <div>
      <header>
        {/* <MainNav /> */}
        {isLogged ? <MainNav/> : <Navbar/>}
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/CreditHub/AmericanC" element={<AmericanC />} />
          <Route path="/CreditHub/agri" element={<Agri />} />
          <Route path="/CreditHub/assessment" element={<Assessment />} />
          <Route path="/CreditHub/business" element={<Business />} />
          <Route path="/CreditHub/green_build" element={<Greenbuild />} />
          <Route path="/CreditHub/raise_cap" element={<RaiseCap />} />
          <Route path="/CreditHub/vehicle" element={<Vehicle />} /> */}

          <Route path="/E-Banking" element={<EBankingPage />} />
          <Route path="/Green_Investment" element={<GreenProjects />} />
          <Route path="/CreditHub" element={<CreditHubPage />} />
          <Route path="/Impact" element={<ImpactPage />} />
          <Route path="/CarbonCoin" element={<CarbonCoinPage />} />
          <Route path="/Login" element={<Login isLogged={isLogged} setIsLogged={setIsLogged} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Green_Investment/fund_transfer" element={<FundTransfer />} />

          <Route exact path="profile" element={<Profile />}>
            <Route
              exact
              path="personal_details"
              element={<PersonalDetails />}
            />
            <Route
              exact
              path="customer_details"
              element={<CustomerDetails />}
            />
            <Route exact path="account_details" element={<AccountDetails />} />
            <Route exact path="" element={<Navigate to="personal_details" />} />
          </Route>
          <Route path="Green_Investment" element={<GreenInvestment />}>
            <Route path="Green_Projects" element={<GreenProjects />} />
            <Route
              path="Renewable_Energy_Funds"
              element={<RenewableEnergyFunds />}
            />
            <Route path="Green_Bonds" element={<h1>Green Bonds</h1>} />
            <Route path="Green_Stocks" element={<h1>Green Stocks</h1>} />
            <Route path="" element={<Navigate to="Green_Projects" />} />
          </Route>

          <Route path="Transactions" element={<Transactions />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
