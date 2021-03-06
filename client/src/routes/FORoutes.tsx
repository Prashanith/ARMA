import Navbar from "../components/CustomNavbar";
import Footer from "../components/CustomFooter";
import { Routes, Route } from "react-router-dom";
import { FacultyProfile } from "../features/faculty/profile/facultyprofile";
import FODashBoard from "../features/faculty/dashboard/FODashBoard";
import { useUser } from "../providers/user/UserProvider";

const FORoutes = () => {
  
  const {faculty} = useUser()

  const getNavItems = ()=>{
    let navItems:any = []
    if(faculty?.role.SAC ){
      navItems.push({ label: "Dashboard", icon: "home", path: "/faculty/" })
    }
  }
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar navItems={[
    

      ]} />
      <div className="flex-1 mt-[80px]">
        <Routes>
          <Route path="/" element={<FODashBoard />} />

          <Route path="/profile" element={<FacultyProfile />} />

        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default FORoutes;
