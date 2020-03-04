import React from "react";
import VacancyCard from "./VacancyCard";

export default React.memo(props => {
  return (
    <div>
      {props.vacancies.length !== 0 && (
        <div>
          <span className="block m-auto text-brand-secondary text-center text-sm">
            {props.vacancies.length} results
          </span>
          {props.vacancies.map(vacancy => (
            <div className="mb-4" key={vacancy.id}>
              <VacancyCard
                vacancy={vacancy}
                onChange={props.onChange}
              ></VacancyCard>
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
