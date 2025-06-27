import { useParams } from 'react-router-dom';
import PollResult from '../components/PollResult';

const Results = () => {
  const { pollId } = useParams();
  return <PollResult pollId={pollId} />;
};

export default Results;
