import { useState, useEffect } from 'react';
import './TopScorePage.css';
import { TopScoreList } from '../../components/TopScoreList/TopScoreList';

export interface TopScoreStructure {
  name: string;
  score: number;
}

export const TopScorePage: React.FC = () => {
  const [topScoreData, setTopScoreData] = useState<TopScoreStructure[]>([]);

  useEffect(() => {
    const fetchTopScore = async (): Promise<void> => {
      const response = await fetch('https://raw.githubusercontent.com/Czechitas-React-podklady/superkviz-api/main/topscore.json');
      const data = await response.json();
      setTopScoreData(data);
    };

    fetchTopScore();
  }, []);

  return (
    <div className="topscore">

      <h2 className="topscore__title">Žebříček nejlepších</h2>

      <TopScoreList topScoreData={topScoreData} />

  </div>
  )
}