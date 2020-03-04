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
    <div className="bg-brand-dark-700 p-4 shadow-xl">
      <h1 className="font-bold text-3xl">Job search aggregator</h1>
      <p className="pt-2 font-bold">
        This service aggregates open vacancies from multiple finnish job listing
        sources and provides a simple search functionality. Aggregated vacancies
        are mostly from IT field and in Uusimaa region.
      </p>
      <button
        className="block m-auto mt-4 font-bold text-brand-secondary"
        onClick={() => {
          setShowRules(!showRules);
        }}
      >
        How to search?
      </button>
      <div className={classNames("mt-4 font-mono", { hidden: !showRules })}>
        {tips.map(tip => (
          <p className="p-1" key={tip.example}>
            <span className="px-2 py-1 mr-2 bg-brand-dark-900 text-brand-primary font-bold rounded-md">
              {tip.example}
            </span>
            {tip.explanation}
          </p>
        ))}
      </div>
    </div>
  );
};
