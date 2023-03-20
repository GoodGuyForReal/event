import { Route, Routes } from "react-router-dom";
import { ProjectContextProvider } from "./context/UserOp";
import Details from "./components/pages/details/Details";
import HomePage from "./components/pages/home/HomePage";
import { AuthContextProvider } from "./context/UserAuth";
import SignUp from "./components/pages/signUp/SignUpPage";
import SignIn from "./components/pages/signIn/SignInPage";
import Navbar from "./components/elements/navbar/Navbar";
import User from "./components/pages/user/User";
import AdminSignIn from "./components/pages/admin/signIn/AdminSignIn";
import AdminPanel from "./components/pages/admin/AdminPanel";
import CreateEvent from "./components/pages/admin/createEvent/CreateEvent";

function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
        <AuthContextProvider>
          <Navbar />
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/details/:id" element={<Details />} />


            <Route path="/user" element={<User />} />
            <Route path="/admin" element={<AdminSignIn />} />
            <Route path="/adminpanel/:id" element={<AdminPanel />} />
            <Route path="/adminpanel/:id/createvent" element={<CreateEvent />} />

          </Routes>
        </AuthContextProvider>
      </ProjectContextProvider>
    </div>
  );
}

export default App;
