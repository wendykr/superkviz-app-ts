import { useState, useEffect } from 'react';
import './TopScorePage.css';

interface TopScoreStructure {
  name: string;
  score:number;
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

      <ul className="topscore__list">
        {topScoreData.map((item, index) => (
          <li key={index} className="topscore__item">
            <span className="topscore__name">{item.name}</span>
            <span className="topscore__score">{item.score}</span>
          </li>
        ))}
      </ul>

  </div>
  )
}