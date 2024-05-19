import { TopScoreStructure } from '../../pages/TopScorePage/TopScorePage';
import './TopScoreItem.css';

interface TopScoreItemProps extends TopScoreStructure {
  index: number;
}

export const TopScoreItem: React.FC<TopScoreItemProps> = ({ name, score, index }) => {

  return (
    <li key={index} className="topscore__item">
      <span className="topscore__name">{name}</span>
      <span className="topscore__score">{score}</span>
    </li>
  )
}