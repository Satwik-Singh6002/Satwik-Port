"use client"
import ShimmerText from '@/components/kokonutui/shimmer-text';
import ContributionGraph, { ContributionData } from '@/components/smoothui/contribution-graph'
import { contributionJan2026 } from '@/lib/myContributions';
import React, { useMemo, useState } from 'react'

// Generate sample contribution data
const generateSampleData = (year: number): ContributionData[] => {
  const data: ContributionData[] = [];
  const startDate = new Date(year, 0, 1);
  const endDate = new Date(year, 11, 31);
  for (
    let date = new Date(startDate);
    date <= endDate;
    date.setDate(date.getDate() + 1)
  ) {
    // Randomly generate contribution data
    const count = Math.random() < 0.3 ? Math.floor(Math.random() * 20) : 0;
    const level = count === 0 ? 0 : Math.min(4, Math.ceil(count / 4));
    data.push({
      date: date.toISOString().split("T")[0],
      count,
      level,
    });
  }
  return data;
};

const Contributions = () => {
    const [year, setYear] = useState(new Date().getFullYear());
  const [showLegend, setShowLegend] = useState(true);
  const [showTooltips, setShowTooltips] = useState(true);
  const sampleData = useMemo(() => generateSampleData(year), [year]);
  return (
     <div 
      style={{
      background: "radial-gradient(125% 125% at 50% 10%, #000000 40%, #010133 100%)",
    }}
     className="space-y-4 md:space-y-6 px-4 sm:px-6 md:px-8 flex flex-col justify-center items-center overflow-hidden">
          <div className=" flex justify-center flex-col mt-20 md:mt-30 mb-8 md:mb-11 ">
                    <ShimmerText className='  text-3xl sm:text-5xl md:text-6xl' text={"MY CONTRIBUTIONS"} />
                    <ShimmerText className=' text-2xl sm:text-4xl md:text-5xl' text={"THIS YEAR"} />
                </div>
      {/* Contribution Graph */}
      <div className=" w-full max-w-full mx-2 sm:mx-6 md:mx-20 rounded-lg border text-white p-2 overflow-x-auto">
        <h1 className=' text-2xl text-[#39D353]'>{year}</h1>
        <ContributionGraph
          className="w-full text-2xl"
          data={contributionJan2026}
          showLegend={showLegend}
          showTooltips={showTooltips}
          year={year}
        />
      </div>
    </div>
  )
}

export default Contributions
