import './App.css';
import Card from './components/Card';
import IntroductionCard from './components/IntroductionCard';
import { cardData } from './constants/cardData';

function App() {
  return (
    <div className='app'>
      <IntroductionCard />
      {
        cardData?.map((e, index) => <Card data={e} key={index} isGrey={index % 2 === 0} />)
      }
    </div>
  );
}

export default App;
