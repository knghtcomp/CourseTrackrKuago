import React from 'react';
import { StudentDashboardHeaderSection } from "./StudentDashboardHeaderSection";

// Keep your placeholders for now so it doesn't crash
const WelcomeMessageSection = () => <div className="p-4">Welcome Section Placeholder</div>;
const CompletedCoursesStatsSection = () => <div className="p-4">Stats 1</div>;
const OngoingCoursesStatsSection = () => <div className="p-4">Stats 2</div>;
const UnitsCompletedStatsSection = () => <div className="p-4">Stats 3</div>;
const YearProgressOverviewSection = () => <div className="p-4">Year Progress Placeholder</div>;
const CurrentSemesterCourseListSection = () => <div className="p-4">Course List Placeholder</div>;

export const DashBoard = () => {
  return (
    /* THE FIX: min-h-screen ensures the background covers the whole page */
    <main className="flex flex-col w-full min-h-screen bg-[#F4F7FA] font-sans">
      
      {/* 1. THE HEADER: No max-width here, so the Navy bar hits both edges of the screen */}
      <StudentDashboardHeaderSection />
      
      {/* 2. THE CONTENT CONTAINER: This is where we center the content for laptops */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[58px] mt-8 flex flex-col gap-10">
        
        <section aria-label="Welcome message">
          <WelcomeMessageSection />
        </section>

        <section aria-label="Dashboard statistics">
          <div className="flex flex-wrap items-start gap-[27px]">
            <CompletedCoursesStatsSection />
            <OngoingCoursesStatsSection />
            <UnitsCompletedStatsSection />
          </div>
        </section>

        <section aria-label="Year progress overview">
          <YearProgressOverviewSection />
        </section>

        <section aria-label="Current semester course list">
          <CurrentSemesterCourseListSection />
        </section>

      </div>
    </main>
  );
};

export default DashBoard;