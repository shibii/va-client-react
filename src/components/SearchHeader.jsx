import React, { useState } from "react";
import classNames from "classnames";

const tips = [
  { example: "word", explanation: "results have word" },
  { example: "word1 & word2", explanation: "results have both words" },
  {
    example: "word1 | word2",
    explanation: "results have at least one of the words"
  },
  { example: "wor:*", explanation: "results have a word starting with wor" },
  { example: "!word", explanation: "results do not have word" },
  {
    example: "(a | b:*) & !c",
    explanation: "rules can be combined for complex queries"
  }
];

export default props => {
  const [showRules, setShowRules] = useState(false);
  return (
    <div className="bg-white p-4 shadow-xl">
      <h1 className="font-bold text-3xl">
        Job search aggregator for Finnish software engineering vacancies.
      </h1>
      <p className="pt-2 font-bold">
        This service aggregates open vacancies from multiple finnish job listing
        sources and provides a simple search functionality. Aggregated vacancies
        are mostly from IT field.
        <button
          className="ml-2 font-bold text-brand-blue-500"
          onClick={() => {
            setShowRules(!showRules);
          }}
        >
          How to search?
        </button>
      </p>
      <div className={classNames("mt-4 font-mono", { hidden: !showRules })}>
        {tips.map(tip => (
          <p>
            <span className="px-2 mr-2 bg-brand-blue-800 text-white rounded-md">
              {tip.example}
            </span>
            {tip.explanation}
          </p>
        ))}
      </div>
    </div>
  );
};
