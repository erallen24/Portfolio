import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Dashboard } from "../app/components/Dashboard"; // Adjust path if needed based on where App.tsx lives
import { ProjectDetail } from "../app/components/ProjectDetail";
import { AllProjects } from "../app/components/AllProjects"; // <-- Added

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Your main portfolio page */}
                <Route path="/" element={<Dashboard />} />

                {/* The new "All Projects" grid view */}
                <Route path="/projects" element={<AllProjects />} />

                {/* The dynamic project details page */}
                <Route path="/project/:slug" element={<ProjectDetail />} />
            </Routes>
        </BrowserRouter>
    );
}