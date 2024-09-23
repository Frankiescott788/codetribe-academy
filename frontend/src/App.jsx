import Footer from "./components/footer"
import Navbar from "./components/navbar"
import Home from "./components/pages/Home/home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Signup from "./components/pages/Signup/signup"
import ExploreRooms from "./components/pages/explore/explore"
import Signin from "./components/pages/Signin/signin"
import { useContext } from "react"
import { AuthContext } from "./context/authProvider"
import Isloading from "./components/loading"
import Dashboardlayout from "./Layouts/dashboard"
import DashboardOverview from "./components/pages/Dashboard/main"
import Add from "./components/pages/Dashboard/AddRoom/addRoom"

function App() {
  const {isLoading} = useContext(AuthContext);
  return isLoading ? <Isloading /> : (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="/signin" element={<Signin />}/>
        <Route path="/explore" element={<ExploreRooms />}/>
        <Route path="/admin/*" element={<Dashboardlayout />}>
          <Route index element={<DashboardOverview />}/>
          <Route path="new" element={<Add />}/>
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
