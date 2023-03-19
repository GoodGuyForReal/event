import { Route, Routes } from "react-router-dom";
import { ProjectContextProvider } from "./context/UserOp";
import Details from "./components/pages/details/Details";
import HomePage from "./components/pages/home/HomePage";
import { AuthContextProvider } from "./context/UserAuth";
import SignUp from "./components/pages/signUp/SignUpPage";
import SignIn from "./components/pages/signIn/SignInPage";

function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
        <AuthContextProvider>
          <Routes>
            <Route path="*" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/details/:id" element={<Details />} />
          </Routes>
        </AuthContextProvider>
      </ProjectContextProvider>
    </div>
  );
}

export default App;
