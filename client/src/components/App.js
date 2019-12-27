import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const SurveyNew = () => <div className="">survey</div>;

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
