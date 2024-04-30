import { Route, Link, Routes } from "react-router-dom";
import Home from "./pages/Home";
import EBankingPage from "./pages/EBankingPage";
import GreenInvestmentPage from "./pages/GreenInvestmentPage";
import CreditHubPage from "./pages/CreditHubPage";
import ImpactPage from "./pages/ImpactPage";
import CarbonCoinPage from "./pages/CarbonCoinPage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";


function App() {
  return (
    <div>
      
      <header>
        <nav className="bg-black text-white fixed top-0 w-full z-10">
          <div className="flex justify-between items-center px-16 py-7">
            <div>
              <Link to="/" className="font-bold">
                LOGO
              </Link>
            </div>
            <ul className="flex gap-10 text-xl">
              <li>
                <Link to="/" className="hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/E-Banking" className="hover:text-green-600">
                  E-Banking
                </Link>
              </li>
              <li>
                <Link to="/GreenInvestment" className="hover:text-green-600">
                  Green Investment
                </Link>
              </li>
              <li>
                <Link to="/CreditHub" className="hover:text-green-600">
                  Credit Hub
                </Link>
              </li>
              <li>
                <Link to="/Impact" className="hover:text-green-600">
                  Impact
                </Link>
              </li>
              <li>
                <Link to="/CarbonCoin" className="hover:text-green-600">
                  Carbon Coin
                </Link>
              </li>
              <li>
                <Link to="/Login" className="hover:text-green-600">
                  Login
                </Link>
              </li>
              <li>
                <Link to="/Signup" className="hover:text-green-600">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/E-Banking" element={<EBankingPage />} />
          <Route path="/GreenInvestment" element={<GreenInvestmentPage />} />
          <Route path="/CreditHub" element={<CreditHubPage />} />
          <Route path="/Impact" element={<ImpactPage />} />
          <Route path="/CarbonCoin" element={<CarbonCoinPage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
