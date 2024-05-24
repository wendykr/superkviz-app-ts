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

  useEffect(() => {
    getTopScore();
  }, []);

  const getTopScore = async (): Promise<void> => {
    try {
      const { data: topscore, error } = await supabase
        .from('topscore')
        .select('*');

      if (error) {
        console.error('Chyba při načítání dat:', error);
        return;
      }

      if (topscore) {
        setTopScoreData(topscore);
      }
    } catch (error) {
      console.error('Neočekávaná chyba při načítání dat:', error);
    }
  };

  return (
    <div className="topscore">

      <h2 className="topscore__title">Žebříček nejlepších</h2>

      <TopScoreList topScoreData={topScoreData} />

  </div>
  )
}