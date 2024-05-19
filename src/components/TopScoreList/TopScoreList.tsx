import { TopScoreStructure } from '../../pages/TopScorePage/TopScorePage';
import { TopScoreItem } from '../TopScoreItem/TopScoreItem';
import './TopScoreList.css';

interface TopScoreListProps {
  topScoreData: TopScoreStructure[];
}

export const TopScoreList: React.FC<TopScoreListProps> = ({ topScoreData }) => {

  return (
    <ul className="topscore__list">
      {topScoreData.map((item, index) => (
        <TopScoreItem name={item.name} score={item.score} index={index} />
      ))}
    </ul>
  )
}