import React from "react";

type ScoreBadgeProps = {
    score: number;
};

const ScoreBadge: React.FC<ScoreBadgeProps> = ({score}) => {
    let label = "Needs Work";
    let containerBg = "bg-badge-red";
    let textColor = "text-red-600";

    if (score > 69) {
        label = "Strong";
        containerBg = "bg-badge-green";
        textColor = "text-green-600";
    } else if (score > 49) {
        label = "Good Start";
        containerBg = "bg-badge-yellow";
        textColor = "text-yellow-600";
    }

    return (
        <div className={`inline-flex items-center justify-center rounded-full px-3 py-1 ${containerBg}`}>
            <p className={`text-xs font-medium ${textColor}`}>{label}</p>
        </div>
    );
};

export default ScoreBadge;
