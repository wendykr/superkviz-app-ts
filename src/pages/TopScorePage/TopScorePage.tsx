import { useState, useEffect } from 'react';
import './TopScorePage.css';
import { TopScoreList } from '../../components/TopScoreList/TopScoreList';
import { supabase } from '../../supabaseClient';

export interface TopScoreStructure {
  name: string;
  score: number;
}

export const TopScorePage: React.FC = () => {
  const [topScoreData, setTopScoreData] = useState<TopScoreStructure[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getTopScore();
  }, []);

  const getTopScore = async (): Promise<void> => {
    setIsLoading(true);
    setError(null);

    try {
      const { data: topscore, error } = await supabase
        .from('topscore')
        .select('*');

      if (error) {
        setError('Chyba při načítání dat: ' + error.message);
        setIsLoading(false);
        return;
      }

      if (topscore) {
        setTopScoreData(topscore);
        setIsLoading(false);
      }
    } catch (error) {
      setError('Neočekávaná chyba při načítání dat: ' + (error as Error).message);
    }
  };

  return (
    <div className="topscore">

      <h2 className="topscore__title">Žebříček nejlepších</h2>
      {isLoading && <p>Načítání dat...</p>}
      {error && !isLoading && <p>{error}</p>}

      {
        topScoreData && topScoreData.length > 0 ?
          <TopScoreList topScoreData={topScoreData} />
          :
          <p className="topscore__content">... je prázdný!</p>
      }
  </div>
  )
}