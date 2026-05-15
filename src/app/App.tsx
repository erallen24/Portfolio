import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "./components/Dashboard";
import { ProjectDetail } from "./components/ProjectDetail"; // We'll create this next

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Your main portfolio page */}
                <Route path="/" element={<Dashboard />} />

                {/* The dynamic project details page */}
                <Route path="/project/:slug" element={<ProjectDetail />} />
            </Routes>
        </BrowserRouter>
    );
}