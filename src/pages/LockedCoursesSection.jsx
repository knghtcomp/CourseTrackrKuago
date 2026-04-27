import React from 'react';

export const LockedCoursesSection = () => {
  // Data for courses missing prerequisites
  const lockedCourses = [
    { id: 1, code: "CPE 401", name: "Capstone Project I", semester: "Year 4 • Semester 1", units: "3 Units", missingPrereq: "CS 303" },
    { id: 2, code: "CPE 403", name: "IoT Systems", semester: "Year 4 • Semester 1", units: "3 Units", missingPrereq: "CS 305" },
    { id: 3, code: "CPE 404", name: "Capstone Project II", semester: "Year 4 • Semester 1", units: "3 Units", missingPrereq: "CS 401" },
    { id: 4, code: "CPE 402", name: "Digital Signal Processing", semester: "Year 4 • Semester 1", units: "3 Units", missingPrereq: "CS 303" },
  ];

  return (
    <section className="flex flex-col gap-6">
      <div>
        <h2 className="text-[#003366] text-2xl lg:text-3xl font-bold font-['Inter']">Locked Courses</h2>
        <p className="text-black/60 text-base font-medium font-['Inter'] mt-1">These courses require prerequisites that you haven't completed yet.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {lockedCourses.map((course) => (
          <div key={course.id} className="bg-gray-100/80 rounded-2xl border border-gray-300 p-6 flex flex-col h-56 justify-between shadow-sm relative">
            <div className="absolute top-6 right-6">
              <div className="w-8 h-8 rounded-full border-2 border-red-500 flex items-center justify-center">
                <span className="text-red-500 text-sm">🔒</span>
              </div>
            </div>

            <div>
              <p className="text-black/50 text-sm font-medium font-['Inter']">{course.semester}</p>
              <h3 className="text-[#003366]/60 text-2xl font-bold font-['Inter'] mt-1">{course.code}</h3>
              <p className="text-black/60 text-lg font-bold font-['Inter'] leading-tight mt-1">{course.name}</p>
            </div>
            
            <div className="flex flex-col gap-2 border-t border-gray-300 pt-3 mt-2">
              <div className="bg-gray-400 rounded-full px-4 py-1 w-fit">
                <span className="text-white text-sm font-bold font-['Inter']">{course.units}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-black/70 text-sm font-medium">Missing Prerequisite:</span>
                <span className="bg-white border border-red-400 text-red-600 px-3 py-0.5 rounded-full text-sm font-bold">
                  {course.missingPrereq}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};