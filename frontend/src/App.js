// src/App.js
import { Suspense, lazy } from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import WakeUp from "./WakeUp.tsx";

const Pages = [
  { routePath: "/", filePath: "./pages/Home/Home.tsx" },
  { routePath: "/contact", filePath: "./pages/ContactPage/ContactPage.tsx" },
  { routePath: "/about", filePath: "./pages/AboutPage/AboutPage.tsx" }
];

// Lazy loader
const Loader = (path) => lazy(() => import(`${path}`));

// Loading Spinner
const Loading = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
  </div>
);

function App() {
  return (
    <Router>
      <WakeUp />
      <Suspense fallback={<Loading />}>
        <Routes>
          {Pages.map((r) => {
            const Component = Loader(r.filePath);
            return (
              <Route key={r.routePath} path={r.routePath} element={<Component />} />
            );
          })}
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
