import React, { useState } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';

const questions = [
  {
    question: "What is the main purpose of Crossplane in platform engineering?",
    options: ["To enhance Kubernetes clusters", "To manage front-end dependencies", "To automate testing processes"],
    answer: "To enhance Kubernetes clusters"
  },
  {
    question: "How does Kratix help organizations?",
    options: ["By providing SEO services", "By delivering self-service platform capabilities", "By managing financial transactions"],
    answer: "By delivering self-service platform capabilities"
  },
  {
    question: "What is the primary use of Argo CD?",
    options: ["Continuous delivery for Kubernetes", "Data analysis", "User authentication"],
    answer: "Continuous delivery for Kubernetes"
  },
  {
    question: "What distinguishes Terraform in managing infrastructure?",
    options: ["Its ability to manage infrastructure as code", "Its graphic design templates", "Its customer relationship management features"],
    answer: "Its ability to manage infrastructure as code"
  },
 {
    question: "What is a core benefit of platform engineering?",
    options: ["Increasing complexity", "Reducing development time", "Decreasing security"],
    answer: "Reducing development time"
  }
];

function QuizComponent() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (option: string) => {
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <Card className="m-4">
      <Card.Body>
        {showScore ? (
          <div>
            <h2>You scored {score} out of {questions.length}</h2>
            <Button onClick={() => window.location.reload()}>Retake Quiz</Button>
          </div>
        ) : (
          <div>
            <h2>{questions[currentQuestion].question}</h2>
            <ListGroup variant="flush">
              {questions[currentQuestion].options.map((option, index) => (
                <ListGroup.Item key={index} action onClick={() => handleAnswerOptionClick(option)}>
                  {option}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </Card.Body>
    </Card>
  );
}

export default QuizComponent;
