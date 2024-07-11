import { useState } from 'react';
import { QuestionsStructure } from '../components/Question/Question';
import { supabase } from '../supabaseClient';

export const useQuestions = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [questionData, setQuestionData] = useState<QuestionsStructure[]>([]);

  const getQuestion = async (questionId: number | string): Promise<void> => {
    if (!questionId) {
      setError('Chybějící ID otázky.');
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      const { data: question, error } = await supabase
        .from('questions')
        .select('*')
        .eq('quizzesId', Number(questionId));

      if (error) {
        setError('Chyba při načítání dat: ' + error.message);
        setIsLoading(false);
        return;
      }

      if (question && question.length > 0) {
        setQuestionData(question);
      } else {
        setError(`Data s ID ${questionId} neexistují v databázi.`);
      }
      setIsLoading(false);
    } catch (error) {
      setError(
        'Neočekávaná chyba při načítání dat: ' + (error as Error).message
      );
      setIsLoading(false);
    }
  };

  return { getQuestion, isLoading, error, questionData };
};
