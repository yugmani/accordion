import React, { useState } from "react";
import "./App.css";
import data from "./data";
import SingleQuestions from "./SingleQuestions";

function App() {
  const [questions, setquestion] = useState(data);

  return (
    <main>
      <div className="container">
        <h3>Accordion: Questions and Answers for Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <SingleQuestions key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
