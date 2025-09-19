import React from "react";

export type ATSSuggestion = {
    type: "good" | "improve";
    tip: string;
};

export type ATSProps = {
    score: number; // 0-100
    suggestions: ATSSuggestion[];
};

const ATS: React.FC<ATSProps> = ({score, suggestions}) => {
    const gradientFrom = score > 69 ? "from-green-100" : score > 49 ? "from-yellow-100" : "from-red-100";
    const topIcon = score > 69 ? "/icons/ats-good.svg" : "/icons/ats-warning.svg";
    const scoreColor = score > 69 ? "text-green-600" : score > 49 ? "text-yellow-600" : "text-red-600";

    return (
        <div className={`w-full rounded-2xl shadow-md bg-gradient-to-b ${gradientFrom} to-white`}>
            <div className="flex flex-row items-center gap-4 p-6">
                <img src={topIcon} alt="ATS status" className="w-10 h-10"/>
                <h3 className="text-2xl font-semibold">ATS Score - <span className={scoreColor}>{score}</span>/100
                </h3>
            </div>

            <div className="px-6 pb-6">
                <h4 className="text-lg font-medium mb-1">How well does your resume pass through Application Tracking
                    Systems?</h4>
                <p className="text-sm text-gray-500 mb-4">Below are actionable tips to improve parsing, keyword
                    alignment, and formatting for ATS compatibility.</p>

                <ul className="flex flex-col gap-3">
                    {suggestions.map((s, idx) => {
                        const icon = s.type === "good" ? "/icons/check.svg" : "/icons/warning.svg";
                        const iconAlt = s.type === "good" ? "good" : "improve";
                        const textClass = s.type === "good" ? "text-gray-700" : "text-gray-700";
                        return (
                            <li key={`${s.type}-${idx}`} className="flex items-start gap-3">
                                <img src={icon} alt={iconAlt} className="w-5 h-5 mt-0.5"/>
                                <p className={`text-sm ${textClass}`}>{s.tip}</p>
                            </li>
                        );
                    })}
                </ul>

                <p className="text-sm text-gray-600 mt-5">Want a better score? Improve your resume by applying the
                    suggestions listed below.</p>
            </div>
        </div>
    );
};

export default ATS;
