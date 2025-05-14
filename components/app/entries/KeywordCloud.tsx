import React from "react";
import { cn } from "@/lib/utils";

interface KeywordCloudProps {
  keywords: string[];
}

export const KeywordCloud: React.FC<KeywordCloudProps> = ({ keywords }) => {
  // Color classes for variety in the keywords
  const colorClasses = [
    "bg-journal-100 text-journal-600",
    "bg-blue-100 text-blue-600",
    "bg-purple-100 text-purple-600",
    "bg-pink-100 text-pink-600",
    "bg-amber-100 text-amber-600"
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {keywords.map((keyword, index) => (
        <span
          key={index}
          className={cn(
            "px-3 py-1 rounded-full text-sm font-medium",
            colorClasses[index % colorClasses.length]
          )}
        >
          {keyword}
        </span>
      ))}
    </div>
  );
};