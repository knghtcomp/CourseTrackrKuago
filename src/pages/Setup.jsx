import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Setup = () => {
  const navigate = useNavigate();

  // STATE: This remembers which courses the user has clicked!
  const [selectedCourses, setSelectedCourses] = useState([]);

  // LOGIC: Calculate totals based on what is selected
  const totalCourses = selectedCourses.length;
  const totalUnits = selectedCourses.reduce((sum, course) => sum + course.units, 0);

  // LOGIC: Handle clicking a course card
  const toggleCourse = (course) => {
    if (selectedCourses.find(c => c.id === course.id)) {
      setSelectedCourses(selectedCourses.filter(c => c.id !== course.id));
    } else {
      setSelectedCourses([...selectedCourses, course]);
    }
  };

  // DATA: The complete 4-Year CPE Curriculum
  const curriculum = [
    {
      title: "1st Year - 1st Semester",
      courses: [
        { id: "y1s1-1", code: "Math 111a", name: "Calculus 1", units: 3 },
        { id: "y1s1-2", code: "Chem 101", name: "Chemistry for Engineers 1", units: 4 },
        { id: "y1s1-3", code: "CPE 111", name: "Computer Engineering as Discipline", units: 2 },
        { id: "y1s1-4", code: "CPE 112", name: "Programming Logic and Design", units: 2 },
        { id: "y1s1-5", code: "MMW", name: "Mathematics in the Modern World", units: 3 },
        { id: "y1s1-6", code: "RPH", name: "Readings in Philippine History", units: 3 },
        { id: "y1s1-7", code: "UTS", name: "Understanding the Self", units: 3 },
        { id: "y1s1-8", code: "NSTP101", name: "ROTC/CWTS/LTS 1", units: 3 },
        { id: "y1s1-9", code: "PATHFIT1", name: "Movement Competency Training", units: 2 },
      ]
    },
    {
      title: "1st Year - 2nd Semester",
      courses: [
        { id: "y1s2-1", code: "CPE 121", name: "Object Oriented Programming", units: 2, prereq: "CPE 112" },
        { id: "y1s2-2", code: "CPE 122", name: "Discrete Mathematics", units: 3, prereq: "Math 111a" },
        { id: "y1s2-3", code: "CPE 123", name: "Introduction to Engineering", units: 1, prereq: "CPE 111" },
        { id: "y1s2-4", code: "ES 404", name: "Material Science & Engineering", units: 3, prereq: "Chem 101" },
        { id: "y1s2-5", code: "Math 121a", name: "Calculus 2", units: 3, prereq: "Math 111a" },
        { id: "y1s2-6", code: "Phys 120", name: "Physics for Engineers", units: 4, prereq: "Math 111a" },
        { id: "y1s2-7", code: "ES 208", name: "Engineering Data Analysis", units: 3, prereq: "Math 111a" },
        { id: "y1s2-8", code: "TCW", name: "The Contemporary World", units: 3 },
        { id: "y1s2-9", code: "PATHFIT2", name: "Exercise-Based Fitness Activities", units: 2, prereq: "PATHFIT1" },
        { id: "y1s2-10", code: "NSTP 102", name: "ROTC/CWTS/LTS 2", units: 3, prereq: "NSTP101" },
      ]
    },
    {
      title: "2nd Year - 1st Semester",
      courses: [
        { id: "y2s1-1", code: "CPE 211", name: "Data Structures and Algorithm Analysis", units: 2, prereq: "CPE 121" },
        { id: "y2s1-2", code: "CPE 212", name: "Operating Systems", units: 3, prereq: "CPE 121" },
        { id: "y2s1-3", code: "SC 211", name: "CPE Special Course", units: 3, prereq: "СРЕ 121, CPE 123" },
        { id: "y2s1-4", code: "EE 213", name: "Fundamentals of Electrical Circuits", units: 4, prereq: "Phys 120, CPE 123" },
        { id: "y2s1-5", code: "Math 221", name: "Differential Equations", units: 3, prereq: "Math 121a" },
        { id: "y2s1-6", code: "ES 301", name: "Engineering Economics", units: 3, prereq: "2nd Year Standing" },
        { id: "y2s1-7", code: "PurCom", name: "Purposive Communication", units: 3 },
        { id: "y2s1-8", code: "ArtApp", name: "Art Appreciation", units: 3 },
        { id: "y2s1-9", code: "Rizal", name: "Life and Works of Rizal", units: 3 },
        { id: "y2s1-10", code: "PATHFIT3", name: "PATHFIT 3", units: 2, prereq: "PATHFIT2" },
      ]
    },
    {
      title: "2nd Year - 2nd Semester",
      courses: [
        { id: "y2s2-1", code: "CPE 221", name: "Software Design and Engineering", units: 4, prereq: "CPE 211" },
        { id: "y2s2-2", code: "CPE 222", name: "Data and Digital Communications", units: 3 },
        { id: "y2s2-3", code: "CPE 223", name: "Numerical Methods", units: 3, prereq: "Math 211" },
        { id: "y2s2-4", code: "ECE 224", name: "Fundamentals of Electronic Circuits", units: 4, prereq: "EE 213" },
        { id: "y2s2-5", code: "ES 207", name: "Advanced Engineering Mathematics", units: 3, prereq: "Math 211" },
        { id: "y2s2-6", code: "Ethc", name: "Ethics", units: 3 },
        { id: "y2s2-7", code: "EnviSci", name: "Environmental Science", units: 3 },
        { id: "y2s2-8", code: "ES 103", name: "Computer-Aided Drafting", units: 1 },
        { id: "y2s2-9", code: "PATHFIT4", name: "PATHFIT 4", units: 2, prereq: "PATHFIT3" },
      ]
    },
    {
      title: "2nd Year - Summer",
      courses: [
        { id: "y2sum-1", code: "CPE 231", name: "Feedback and Control Systems", units: 3, prereq: "ES 207, CPE 221" },
        { id: "y2sum-2", code: "STS", name: "Science, Technology, and Society", units: 3 },
      ]
    },
    {
      title: "3rd Year - 1st Semester",
      courses: [
        { id: "y3s1-1", code: "CPE 311", name: "Logic Circuit and Design", units: 4, prereq: "ECE 224" },
        { id: "y3s1-2", code: "CPE 312", name: "Methods of Research", units: 2, prereq: "PurCom, ES 208" },
        { id: "y3s1-3", code: "CPE 313", name: "Computer Networks and Security", units: 4, prereq: "CPE 222" },
        { id: "y3s1-4", code: "CPE 314", name: "Introduction to HDL", units: 1, prereq: "CPE 112, ECE 224" },
        { id: "y3s1-5", code: "CPE 315", name: "Fundamentals of Mixed Signals and Sensors", units: 3, prereq: "ECE 224" },
        { id: "y3s1-6", code: "CPE 316", name: "Computer Engineering Drafting and Design", units: 1, prereq: "ECE 224, ES 103" },
        { id: "y3s1-7", code: "EC 311", name: "CPE Elective Course 1", units: 3, prereq: "3rd Year Standing" },
        { id: "y3s1-8", code: "TECH 101", name: "Technopreneurship", units: 3, prereq: "3rd Year Standing" },
        { id: "y3s1-9", code: "GnS", name: "Gender and Society", units: 3 },
      ]
    },
    {
      title: "3rd Year - 2nd Semester",
      courses: [
        { id: "y3s2-1", code: "CPE 321", name: "Basic Occupational Health and Safety", units: 3, prereq: "3rd Year Standing" },
        { id: "y3s2-2", code: "CPE 323", name: "Microprocessor", units: 4, prereq: "CPE 311, CPE 314" },
        { id: "y3s2-3", code: "CPE 324", name: "CPE Practice and Design 1", units: 1, prereq: "CPE 312" },
        { id: "y3s2-4", code: "CPE 325", name: "CPE Laws and Professional Practice", units: 2, prereq: "3rd Year Standing" },
        { id: "y3s2-5", code: "CPE 326", name: "Emerging Technologies in CPE", units: 3, prereq: "3rd Year Standing" },
        { id: "y3s2-6", code: "ES 302", name: "Engineering Management", units: 2 },
        { id: "y3s2-7", code: "PICPE", name: "Philippine Indigenous Communities...", units: 3 },
        { id: "y3s2-8", code: "EC 231", name: "CPE Elective Course 2", units: 3, prereq: "EC 311" },
        { id: "y3s2-9", code: "CPE 322", name: "Digital Signal Processing", units: 4, prereq: "ES 207, CPE 231" },
      ]
    },
    {
      title: "4th Year - 1st Semester",
      courses: [
        { id: "y4s1-1", code: "CPE 411", name: "Embedded Systems", units: 4, prereq: "CPE 323" },
        { id: "y4s1-2", code: "CPE 412", name: "Computer Architecture and Organization", units: 4, prereq: "CPE 323" },
        { id: "y4s1-3", code: "CPE 414", name: "CPE Practice and Design 2", units: 2, prereq: "CPE 324" },
        { id: "y4s1-4", code: "CPE 415", name: "Seminar and Fieldtrips", units: 1, prereq: "4th Year Standing" },
        { id: "y4s1-5", code: "EC 411", name: "CPE Elective Course 3", units: 3, prereq: "EC 321" },
      ]
    },
    {
      title: "4th Year - 2nd Semester",
      courses: [
        { id: "y4s2-1", code: "CPE 421", name: "On the Job Training", units: 3, prereq: "No Subjects Behind" },
      ]
    }
  ];

  return (
    <main className="flex flex-col w-full min-h-screen bg-white font-sans pb-32">
      
      <header className="w-full h-24 lg:h-28 bg-slate-100 flex items-center px-6 lg:px-[90px] gap-5 shadow-sm">
        {/* LOGO CONTAINER: Blue Square Background */}
        <div className="w-12 h-12 lg:w-14 lg:h-14 bg-[#003366] rounded-xl flex items-center justify-center shrink-0 shadow-md">
          {/* THE ICON: gradhat.svg */}
          <img 
            src="/gradhat.svg" 
            alt="Academic Setup Icon" 
            className="w-8 h-8 lg:w-9 lg:h-9 object-contain" 
          />
        </div>
        {/* PAGE TITLE */}
        <h1 className="text-black text-2xl lg:text-[32px] font-normal font-['Calistoga'] m-0">
          Academic Setup
        </h1>
      </header>

      <div className="w-full max-w-[1440px] mx-auto px-6 lg:px-[90px] mt-8 flex flex-col gap-10">

        {/* 2. DYNAMIC SUMMARY BANNER */}
        <section className="w-full bg-[#003366] rounded-2xl p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between shadow-lg text-center md:text-left">
          <div className="flex flex-col gap-2">
            <h2 className="text-gray-200 text-3xl lg:text-4xl font-normal font-['Calistoga'] m-0">
              Select Courses
            </h2>
            <p className="text-gray-200 text-xl lg:text-2xl font-light font-['Fjord'] m-0">
              You have selected <strong className="text-[#FFCC00]">{totalCourses}</strong> courses totaling <strong className="text-[#FFCC00]">{totalUnits}</strong> units
            </p>
          </div>
          <div className="mt-6 md:mt-0 text-center">
            <span className="text-[#FFCC00] text-7xl lg:text-[80px] font-extrabold font-['Inter'] leading-none">
              {totalCourses}
            </span>
          </div>
        </section>

        {/* 3. COURSE SELECTION AREA */}
        {curriculum.map((semester, idx) => (
          <section key={idx} className="w-full bg-slate-50/80 rounded-[20px] border border-stone-300 p-6 lg:p-10 flex flex-col gap-8">
            <h3 className="text-black text-2xl lg:text-3xl font-normal font-['Calistoga'] text-center">
              {semester.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {semester.courses.map((course) => {
                
                // Check if this specific course is in our selected array
                const isSelected = selectedCourses.some(c => c.id === course.id);

                return (
                  <div 
                    key={course.id}
                    onClick={() => toggleCourse(course)}
                    className={`h-36 rounded-2xl border-2 p-5 flex flex-col justify-between cursor-pointer transition-all ${
                      isSelected 
                      ? 'bg-blue-50 border-[#003366] shadow-md scale-[1.02]' 
                      : 'bg-white border-neutral-300 hover:border-gray-400'
                    }`}
                  >
                    {/* TOP ROW: Course Code & Units */}
                    <div className="flex justify-between items-start">
                      <span className="text-black text-xl lg:text-2xl font-bold font-['Calistoga'] leading-none">
                        {course.code}
                      </span>
                      <div className={`px-4 py-1.5 rounded-lg transition-colors ${isSelected ? 'bg-[#FFCC00]' : 'bg-[#003366]'}`}>
                        <span className={`text-sm lg:text-base font-bold font-['Inter'] whitespace-nowrap ${isSelected ? 'text-black' : 'text-white'}`}>
                          {course.units} Units
                        </span>
                      </div>
                    </div>
                    
                    {/* BOTTOM SECTION: Name & Prerequisites */}
                    <div className="mt-auto flex flex-col gap-1">
                      <span className="text-black/80 text-lg lg:text-xl font-normal font-['Caladea'] truncate block">
                        {course.name}
                      </span>
                      
                      {/* Only show prerequisites if they exist! */}
                      {course.prereq && (
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gray-500 text-xs lg:text-sm font-semibold font-['Inter']">
                            Prerequisite: <span className="font-normal text-sky-900">{course.prereq}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
        ))}

      </div>

      {/* 4. STICKY BOTTOM ACTION BAR */}
      <div className="fixed bottom-0 left-0 w-full bg-white border-t border-stone-300 p-4 lg:p-6 shadow-[0_-4px_10px_rgba(0,0,0,0.05)] z-50">
        <div className="w-full max-w-[1440px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-2 lg:px-[90px]">
          
          <div className="text-black/70 text-lg lg:text-xl font-['Caladea']">
            {totalCourses === 0 ? "No Course Selected Yet" : `${totalCourses} Courses Selected`}
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto">
            <button 
              onClick={() => navigate('/dashboard')}
              className="flex-1 md:flex-none px-6 py-3 rounded-xl border border-stone-300 text-black text-lg font-['Caladea'] hover:bg-gray-50 transition-colors"
            >
              Skip for now
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="flex-1 md:flex-none px-8 py-3 rounded-xl bg-[#003366] text-white text-lg font-['Caladea'] hover:bg-[#002244] hover:shadow-lg transition-all"
            >
              Complete SetUp
            </button>
          </div>

        </div>
      </div>

    </main>
  );
};

export default Setup;