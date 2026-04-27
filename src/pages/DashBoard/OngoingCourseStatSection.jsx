export const OngoingCoursesStatsSection = () => {
  return (
    <div className="w-full max-w-[425px] h-[176px] bg-white/60 rounded-3xl border border-black/30 p-6 flex flex-col justify-between relative shadow-sm">
      {/* LOGO AREA: Action Orange */}
      <div className="absolute top-5 right-6">
        <div className="w-8 h-8 bg-[#F97316] rounded-lg flex items-center justify-center shadow-inner">
          <img src="/clock.svg" alt="" className="w-5 h-5 brightness-0 invert" />
        </div>
      </div>

      <p className="text-black/80 text-sm font-bold font-['Inter'] uppercase tracking-wider">Ongoing Courses</p>
      <h3 className="text-black text-5xl font-bold font-['Inter']">10</h3>
      <p className="text-black/60 text-sm font-medium font-['Inter']">Current Semester</p>
    </div>
  );
};