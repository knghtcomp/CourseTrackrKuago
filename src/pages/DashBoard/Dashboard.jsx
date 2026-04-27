import React from 'react';
import { StudentDashboardHeaderSection } from "./StudentDashboardHeaderSection";
import { WelcomeMessageSection } from "./WelcomeMessageSection";
import { SetupReminderSection } from "./SetupReminderSection";
import { CompletedCoursesStatsSection } from './CompletedCourseStatSection';
import { OngoingCoursesStatsSection } from './OngoingCourseStatSection';
import { UnitsCompletedStatsSection } from './UnitsCompletedStatSection';
import { CurrentSemesterCourseListSection } from './CurrentSemesterCourseListSection'
// Keep your placeholders for now so it doesn't crash
export const DashBoard = () => {
  return (
    /* THE FIX: min-h-screen ensures the background covers the whole page */
    <main className="flex flex-col w-full min-h-screen bg-[#F4F7FA] font-sans">
      
      {/* 1. THE HEADER: No max-width here, so the Navy bar hits both edges of the screen */}
      <StudentDashboardHeaderSection />
      
      {/* 2. THE CONTENT CONTAINER: This is where we center the content for laptops */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[58px] mt-8 flex flex-col gap-10 pb-24">
        
        <section aria-label="Welcome message">
          <WelcomeMessageSection />
        </section>

        <section><SetupReminderSection /></section>

        <section aria-label="Dashboard statistics">
          <div className="flex flex-wrap items-start gap-[20px]">
            <CompletedCoursesStatsSection />
            <OngoingCoursesStatsSection />
            <UnitsCompletedStatsSection />
          </div>
        </section>

        <section aria-label="Current semester course list">
          <CurrentSemesterCourseListSection />
        </section>

      </div>
    </main>
  );
};

export default DashBoard;