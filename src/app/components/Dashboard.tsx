import { motion } from "motion/react";
import { ProjectShowcase } from "./dashboard/ProjectShowcase";
import { QuickContact } from "./dashboard/QuickContact";
import { ProfileHeader } from "./dashboard/ProfileHeader";
import { TechStack } from "./dashboard/TechStack";

export function Dashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20 p-4 md:p-8">
      <div className="max-w-[1800px] mx-auto">
        <ProfileHeader />

        <div className="grid grid-cols-12 gap-4 md:gap-6 mt-6">
          {/* Left Column - Tech Stack */}
          <div className="col-span-12 lg:col-span-4 space-y-4 md:space-y-6">
            <TechStack />
          </div>

          {/* Right Column - Projects & Contact */}
          <div className="col-span-12 lg:col-span-8 space-y-4 md:space-y-6">
            <ProjectShowcase />
            <QuickContact />
          </div>
        </div>
      </div>
    </div>
  );
}
