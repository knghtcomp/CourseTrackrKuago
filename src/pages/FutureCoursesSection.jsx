import React from 'react';

export const FutureCoursesSection = () => {
  // Data for the eligible courses
  const futureCourses = [
    { id: 1, code: "CPE 402", name: "Digital Signal Processing", semester: "Year 4 • Semester 1", units: "3 Units" },
    { id: 2, code: "CPE 401", name: "Machine Learning Fundamentals", semester: "Year 4 • Semester 1", units: "3 Units" },
    { id: 3, code: "ELEC 1", name: "Professional Elective I", semester: "Year 4 • Semester 1", units: "3 Units" },
    { id: 4, code: "CPE 405", name: "Computer Engineering Practice", semester: "Year 4 • Semester 2", units: "3 Units" },
    { id: 5, code: "ELEC 2", name: "Professional Elective II", semester: "Year 4 • Semester 2", units: "3 Units" },
  ];

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-[#003366] text-2xl lg:text-3xl font-bold font-['Inter']">Future Courses</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {futureCourses.map((course) => (
          <div key={course.id} className="bg-[#E0F2FE] rounded-2xl border border-[#003366]/20 p-6 flex flex-col h-48 justify-between shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-6 right-6 w-8 h-8 rounded-full border-2 border-[#10B981] flex items-center justify-center">
              <div className="w-4 h-4 bg-[#10B981] rounded-full" />
            </div>
            
            <div>
              <p className="text-black/60 text-sm font-medium font-['Inter']">{course.semester}</p>
              <h3 className="text-[#003366] text-2xl font-bold font-['Inter'] mt-1">{course.code}</h3>
              <p className="text-black/80 text-lg font-bold font-['Inter'] leading-tight mt-1">{course.name}</p>
            </div>
            <div className="bg-[#003366] rounded-full px-4 py-1 w-fit">
              <span className="text-white text-sm font-bold font-['Inter']">{course.units}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};