import React from 'react';

export const CurrentSemesterCourseListSection = () => {
  // DATA ARRAY: Update these or fetch them from a database later!
  const currentCourses = [
    { id: 1, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
    { id: 2, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
    { id: 3, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
    { id: 4, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
    { id: 5, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
    { id: 6, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
    { id: 7, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
    { id: 8, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
    { id: 9, code: "CPE 121", name: "Object Oriented Programming", units: "2 units", status: "Ongoing" },
  ];

  return (
    <div className="w-full bg-white/60 rounded-3xl border border-black/30 p-6 lg:p-10 shadow-sm flex flex-col gap-6">
      
      {/* SECTION TITLE */}
      <h2 className="text-[#003366] text-[24px] lg:text-[28px] font-bold font-['Calistoga'] tracking-wide m-0">
        Current Semester Courses
      </h2>

      {/* COURSE GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentCourses.map((course) => (
          <div 
            key={course.id} 
            className="w-full h-28 bg-gray-200/50 rounded-xl border border-black/30 p-5 flex flex-col justify-between hover:bg-white/80 hover:shadow-md transition-all cursor-pointer relative"
          >
            {/* Top Row: Course Code & Status Badge */}
            <div className="flex justify-between items-start">
              <h3 className="text-[#003366] text-base lg:text-lg font-bold font-['Inter']">
                {course.code}
              </h3>
              
              <div className="bg-[#F97316] rounded-lg border border-black/20 px-3 py-1 shadow-sm">
                <span className="text-white text-xs lg:text-sm font-bold font-['Inter'] uppercase tracking-wide">
                  {course.status}
                </span>
              </div>
            </div>

            {/* Bottom Row: Units & Course Name */}
            <div className="flex flex-col gap-0.5 mt-auto">
              <span className="text-[#003366]/60 text-xs lg:text-sm font-semibold font-['Inter']">
                {course.units}
              </span>
              <span className="text-black/75 text-sm lg:text-base font-medium font-['Inter'] truncate">
                {course.name}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default CurrentSemesterCourseListSection;