import Layout from "./components/Layout";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import PageOne from "./pages/PageOne";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} exact></Route>
        <Route path="/page-one" element={<PageOne />} exact></Route>
        <Route path="/page-two" element={<PageTwo />} exact></Route>
        <Route path="/page-three" element={<PageThree />} exact></Route>
      </Routes>
    </Layout>
  );
}

export default App;
