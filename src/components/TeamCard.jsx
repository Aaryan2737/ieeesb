aimport React, { useState } from 'react';

export const TeamCard = ({ member, size = "md", isFaculty = false }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => setIsFlipped(!isFlipped);
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleFlip();
    }
  };

  const imageClasses = {
    xl: "w-40 md:w-56 aspect-[3/4]",
    lg: "w-32 md:w-48 aspect-[3/4]",
    md: "w-28 md:w-40 aspect-[3/4]",
    sm: "w-20 md:w-32 aspect-[3/4]"
  }[size];

  const fallbackImg = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=051024&color=00FFFF&size=200`;
  const bio = member.bio || "No bio available at this time.";

  if (isFaculty) {
    return (
      <div className="bg-[#111A2E] shadow-lg rounded-xl p-6 text-center border border-[#FACC15]/20 flex flex-col items-center relative z-10 w-full max-w-[300px] h-full">
        <div className={`bg-[#051024] border-2 border-[#FACC15] mb-4 flex items-center justify-center overflow-hidden rounded-xl ${imageClasses}`}>
          <img src={member.image || fallbackImg} alt={member.name} className="w-full h-full object-cover" onError={(e) => e.target.src = fallbackImg} />
        </div>
        <h3 className="text-sm md:text-base font-black text-[#EAF0F8] mb-1 uppercase font-['Space_Grotesk',sans-serif]">{member.name}</h3>
        <p className="text-[#FACC15] text-[10px] md:text-xs font-bold uppercase tracking-[0.1em]">{member.role}</p>
        {member.department && <p className="text-[#7186A6] text-[10px] uppercase mt-2 font-mono">{member.department}</p>}
      </div>
    );
  }

  return (
    <div
      className="group perspective-1000 w-full cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#2FB8FF] rounded-xl h-full"
      onClick={toggleFlip}
      onKeyDown={handleKeyDown}
      tabIndex="0"
      role="button"
      aria-label={`View bio for ${member.name}`}
    >
      <div className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${isFlipped ? 'rotate-y-180' : 'group-hover:rotate-y-180'}`}>

        {/* Front */}
        <div className="relative w-full h-full bg-[#111A2E] shadow-lg rounded-xl p-6 text-center border border-[#2FB8FF]/20 flex flex-col items-center justify-center backface-hidden min-h-[16rem]">
          <div className="absolute top-4 left-4 text-[#2FB8FF]/50 text-[10px] font-mono">
            {member.designator || "// NODE"}
          </div>
          <div className={`bg-[#051024] border border-[#2FB8FF]/50 mb-4 flex items-center justify-center overflow-hidden rounded-lg ${imageClasses}`}>
            <img src={member.image || fallbackImg} alt={member.name} className="w-full h-full object-cover" onError={(e) => e.target.src = fallbackImg} />
          </div>
          <h4 className="text-xs md:text-sm font-black text-[#EAF0F8] mb-2 leading-tight uppercase font-['Space_Grotesk',sans-serif]">{member.name}</h4>
          <p className="text-[#2FB8FF] text-[10px] font-bold uppercase tracking-[0.15em]">{member.role}</p>
        </div>

        {/* Back (Bio) */}
        <div className="absolute inset-0 bg-[#0A0F1C] shadow-lg rounded-xl p-6 border border-[#2FB8FF]/50 flex flex-col backface-hidden rotate-y-180 overflow-y-auto">
          <h4 className="text-xs font-black text-[#2FB8FF] mb-2 uppercase border-b border-[#2FB8FF]/20 pb-2">{member.name}</h4>
          <p className="text-[#EAF0F8] text-[10px] md:text-xs font-medium leading-relaxed font-['Inter',sans-serif] text-left">
            {bio}
          </p>
        </div>

      </div>
    </div>
  );
};
