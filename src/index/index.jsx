import styles from './index.module.css';
import heroImg from '../assets/hero2.jpg';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <img src={heroImg} alt="Rugged outdoors banner image" />
      <p>Adventure is out there...</p>
      <button onClick={() => navigate('shop')}>Shop Now</button>
    </div>
  )
}

export default Index;

// things to make this pretty: Blockier text for "Adventure is out
// there". Button transition to different color/text color on hover. The
// header and footer look kind of bad. Consider making them just in the image