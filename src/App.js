import { Route, Routes } from "react-router-dom";
import { ProjectContextProvider } from "./components/context/UserOp";
import Details from "./components/pages/details/Details";
import HomePage from "./components/pages/home/HomePage";

function App() {
  return (
    <div className="App">
      <ProjectContextProvider>
        <Routes>
        <Route path="*" element={<HomePage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </ProjectContextProvider>
    </div>
  );
}

export default App;
