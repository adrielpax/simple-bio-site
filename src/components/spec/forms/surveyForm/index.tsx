import React from "react";
import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
import "survey-core/defaultV2.min.css";
import { themeJson } from "@/utils/form_theme";
// import "./index.css";
import { json } from "@/utils/request_form";

function SurveyComponent() {
  const survey = new Model(json);
  survey.applyTheme({ cssVariables: { "--sjs-primary-backcolor": "#1D4ED8" } });
  survey.onComplete.add((sender: { data: any; }, options: any) => {
    const data = JSON.stringify(sender.data, null, 3) 
    console.log(data);
  });
  return <Survey model={survey} />;
}

export default SurveyComponent;
