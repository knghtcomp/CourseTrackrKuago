import React from 'react';
import { StudentDashboardHeaderSection } from "./dashboard/StudentDashboardHeaderSection"; 

export const AcademicHistory = () => {
  
  // DATA: The complete 4-Year CPE Curriculum mapped for Academic History
  const academicData = [
    {
      semester: "1st Year - 1st Semester",
      courses: [
        { code: "Math 111a", title: "Calculus 1", units: 3, status: "Completed" },
        { code: "Chem 101", title: "Chemistry for Engineers 1", units: 4, status: "Completed" },
        { code: "CPE 111", title: "Computer Engineering as Discipline", units: 2, status: "Completed" },
        { code: "CPE 112", title: "Programming Logic and Design", units: 2, status: "Completed" },
        { code: "MMW", title: "Mathematics in the Modern World", units: 3, status: "Completed" },
        { code: "RPH", title: "Readings in Philippine History", units: 3, status: "Completed" },
        { code: "UTS", title: "Understanding the Self", units: 3, status: "Completed" },
        { code: "NSTP101", title: "ROTC/CWTS/LTS 1", units: 3, status: "Completed" },
        { code: "PATHFIT1", title: "Movement Competency Training", units: 2, status: "Completed" },
      ]
    },
    {
      semester: "1st Year - 2nd Semester",
      courses: [
        { code: "CPE 121", title: "Object Oriented Programming", units: 2, status: "Completed" },
        { code: "CPE 122", title: "Discrete Mathematics", units: 3, status: "Completed" },
        { code: "CPE 123", title: "Introduction to Engineering", units: 1, status: "Completed" },
        { code: "ES 404", title: "Material Science & Engineering", units: 3, status: "Completed" },
        { code: "Math 121a", title: "Calculus 2", units: 3, status: "Completed" },
        { code: "Phys 120", title: "Physics for Engineers", units: 4, status: "Completed" },
        { code: "ES 208", title: "Engineering Data Analysis", units: 3, status: "Completed" },
        { code: "TCW", title: "The Contemporary World", units: 3, status: "Completed" },
        { code: "PATHFIT2", title: "Exercise-Based Fitness Activities", units: 2, status: "Completed" },
        { code: "NSTP 102", title: "ROTC/CWTS/LTS 2", units: 3, status: "Completed" },
      ]
    },
    {
      semester: "2nd Year - 1st Semester",
      courses: [
        { code: "CPE 211", title: "Data Structures and Algorithm Analysis", units: 2, status: "Completed" },
        { code: "CPE 212", title: "Operating Systems", units: 3, status: "Completed" },
        { code: "SC 211", title: "CPE Special Course", units: 3, status: "Completed" },
        { code: "EE 213", title: "Fundamentals of Electrical Circuits", units: 4, status: "Completed" },
        { code: "Math 221", title: "Differential Equations", units: 3, status: "Completed" },
        { code: "ES 301", title: "Engineering Economics", units: 3, status: "Completed" },
        { code: "PurCom", title: "Purposive Communication", units: 3, status: "Completed" },
        { code: "ArtApp", title: "Art Appreciation", units: 3, status: "Completed" },
        { code: "Rizal", title: "Life and Works of Rizal", units: 3, status: "Completed" },
        { code: "PATHFIT3", title: "PATHFIT 3", units: 2, status: "Completed" },
      ]
    },
    {
      semester: "2nd Year - 2nd Semester",
      courses: [
        { code: "CPE 221", title: "Software Design and Engineering", units: 4, status: "Completed" },
        { code: "CPE 222", title: "Data and Digital Communications", units: 3, status: "Completed" },
        { code: "CPE 223", title: "Numerical Methods", units: 3, status: "Completed" },
        { code: "ECE 224", title: "Fundamentals of Electronic Circuits", units: 4, status: "Completed" },
        { code: "ES 207", title: "Advanced Engineering Mathematics", units: 3, status: "Completed" },
        { code: "Ethc", title: "Ethics", units: 3, status: "Completed" },
        { code: "EnviSci", title: "Environmental Science", units: 3, status: "Completed" },
        { code: "ES 103", title: "Computer-Aided Drafting", units: 1, status: "Completed" },
        { code: "PATHFIT4", title: "PATHFIT 4", units: 2, status: "Completed" },
      ]
    },
    {
      semester: "2nd Year - Summer",
      courses: [
        { code: "CPE 231", title: "Feedback and Control Systems", units: 3, status: "Completed" },
        { code: "STS", title: "Science, Technology, and Society", units: 3, status: "Completed" },
      ]
    },
    {
      semester: "3rd Year - 1st Semester",
      courses: [
        { code: "CPE 311", title: "Logic Circuit and Design", units: 4, status: "Ongoing" },
        { code: "CPE 312", title: "Methods of Research", units: 2, status: "Ongoing" },
        { code: "CPE 313", title: "Computer Networks and Security", units: 4, status: "Ongoing" },
        { code: "CPE 314", title: "Introduction to HDL", units: 1, status: "Ongoing" },
        { code: "CPE 315", title: "Fundamentals of Mixed Signals and Sensors", units: 3, status: "Ongoing" },
        { code: "CPE 316", title: "Computer Engineering Drafting and Design", units: 1, status: "Ongoing" },
        { code: "EC 311", title: "CPE Elective Course 1", units: 3, status: "Ongoing" },
        { code: "TECH 101", title: "Technopreneurship", units: 3, status: "Ongoing" },
        { code: "GnS", title: "Gender and Society", units: 3, status: "Ongoing" },
      ]
    },
    {
      semester: "3rd Year - 2nd Semester",
      courses: [
        { code: "CPE 321", title: "Basic Occupational Health and Safety", units: 3, status: "Pending" },
        { code: "CPE 323", title: "Microprocessor", units: 4, status: "Pending" },
        { code: "CPE 324", title: "CPE Practice and Design 1", units: 1, status: "Pending" },
        { code: "CPE 325", title: "CPE Laws and Professional Practice", units: 2, status: "Pending" },
        { code: "CPE 326", title: "Emerging Technologies in CPE", units: 3, status: "Pending" },
        { code: "ES 302", title: "Engineering Management", units: 2, status: "Pending" },
        { code: "PICPE", title: "Philippine Indigenous Communities...", units: 3, status: "Pending" },
        { code: "EC 231", title: "CPE Elective Course 2", units: 3, status: "Pending" },
        { code: "CPE 322", title: "Digital Signal Processing", units: 4, status: "Pending" },
      ]
    },
    {
      semester: "4th Year - 1st Semester",
      courses: [
        { code: "CPE 411", title: "Embedded Systems", units: 4, status: "Pending" },
        { code: "CPE 412", title: "Computer Architecture and Organization", units: 4, status: "Pending" },
        { code: "CPE 414", title: "CPE Practice and Design 2", units: 2, status: "Pending" },
        { code: "CPE 415", title: "Seminar and Fieldtrips", units: 1, status: "Pending" },
        { code: "EC 411", title: "CPE Elective Course 3", units: 3, status: "Pending" },
      ]
    },
    {
      semester: "4th Year - 2nd Semester",
      courses: [
        { code: "CPE 421", title: "On the Job Training", units: 3, status: "Pending" },
      ]
    }
  ];

  // Helper function to render the correct badge style based on status
  const getStatusBadge = (status) => {
    switch (status) {
      case "Completed":
        return <span className="px-3 py-1 bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/20 rounded-lg text-sm font-bold tracking-wide uppercase">Completed</span>;
      case "Ongoing":
        return <span className="px-3 py-1 bg-[#F97316]/10 text-[#F97316] border border-[#F97316]/20 rounded-lg text-sm font-bold tracking-wide uppercase">Ongoing</span>;
      default:
        return <span className="px-3 py-1 bg-gray-100 text-gray-500 border border-gray-200 rounded-lg text-sm font-bold tracking-wide uppercase">Pending</span>;
    }
  };

  return (
    <main className="flex flex-col w-full min-h-screen bg-[#F4F7FA] font-sans pb-24">
      
      <StudentDashboardHeaderSection />
      
      {/* MAIN CONTENT CONTAINER */}
      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[58px] mt-10 flex flex-col gap-10">
        
        {/* PAGE TITLE (Unchanged) */}
        <div className="w-full flex flex-col gap-1">
          <div className="flex items-center gap-3">
            <h1 className="text-[#003366] text-[32px] lg:text-[40px] font-bold font-['Calistoga'] leading-tight m-0">
              Academic History
            </h1>
            <span className="text-3xl animate-bounce">📚</span>
          </div>
          <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-4 mt-1">
            <p className="text-[#003366]/70 text-[16px] lg:text-[18px] italic font-['Calistoga'] m-0">
              Review your past courses, grades, and completed units.
            </p>
          </div>
        </div>

        {/* CURRICULUM TABLES */}
        <div className="flex flex-col gap-8">
          {academicData.map((term, index) => (
            <div key={index} className="w-full bg-white rounded-3xl border border-black/10 p-6 lg:p-10 shadow-sm overflow-hidden flex flex-col gap-6">
              
              {/* Table Section Header */}
              <h2 className="text-[#003366] text-2xl lg:text-3xl font-bold font-['Calistoga'] border-b-2 border-gray-100 pb-4">
                {term.semester}
              </h2>

              {/* Responsive Table Wrapper */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse min-w-[600px]">
                  <thead>
                    <tr className="border-b-2 border-[#003366]/20">
                      <th className="py-3 px-4 text-[#003366] font-bold font-['Inter'] uppercase tracking-wider text-sm w-[20%]">Course Code</th>
                      <th className="py-3 px-4 text-[#003366] font-bold font-['Inter'] uppercase tracking-wider text-sm w-[45%]">Descriptive Title</th>
                      <th className="py-3 px-4 text-[#003366] font-bold font-['Inter'] uppercase tracking-wider text-sm w-[15%]">Units</th>
                      <th className="py-3 px-4 text-[#003366] font-bold font-['Inter'] uppercase tracking-wider text-sm w-[20%]">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {term.courses.map((course, idx) => (
                      <tr key={idx} className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                        <td className="py-4 px-4 text-black font-bold font-['Inter'] text-base lg:text-lg">
                          {course.code}
                        </td>
                        <td className="py-4 px-4 text-black/80 font-medium font-['Inter'] text-base">
                          {course.title}
                        </td>
                        <td className="py-4 px-4 text-[#003366] font-bold font-['Inter'] text-base">
                          {course.units}
                        </td>
                        <td className="py-4 px-4">
                          {getStatusBadge(course.status)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

            </div>
          ))}
        </div>

      </div>
    </main>
  );
};

export default AcademicHistory;