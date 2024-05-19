import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Question.css';

interface Answer {
  id: number;
  title: string;
  image: string;
  answers: string[];
  correctAnswer: number;
}

interface QuestionDataStructure {
  id: number;
  title: string;
  image: string;
  questions: Answer[];
}

export const Question: React.FC = () => {
  const [questionData, setQuestionData] = useState<QuestionDataStructure>();
  const { questionId } = useParams<{ questionId: string }>();

  useEffect(() => {
    const fetchQuestion = async (): Promise<void> => {
      const response = await fetch(`https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/quiz/${questionId}.json`);
      const data= await response.json();
      setQuestionData(data);
      }

    fetchQuestion();
  }, []);

  const currentQuestion = questionData?.questions[0];

  return (
    <div className="question">

      <p className="question__number">Otázka 1 / {questionData?.questions.length}</p>

      <h2 className="question__title">{currentQuestion?.title}</h2>

      <div className="question__content">
        <img className="question__image" src={currentQuestion?.image} alt="Ilustrační obrázek" />

        <div className="question__answers">
          {currentQuestion?.answers.map((answer, index) => (
            <button key={index} className="question__answer">{answer}</button>
          ))}
        </div>
      </div>

    </div>
  );
};
