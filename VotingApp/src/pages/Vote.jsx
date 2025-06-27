import { useParams } from 'react-router-dom';
import VotePoll from '../components/VotePoll';

const Vote = () => {
  const { pollId } = useParams();
  return <VotePoll pollId={pollId} />;
};

export default Vote;
