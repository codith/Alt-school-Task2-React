import { useNavigate } from 'react-router-dom';
import './home.css';
import users from '../users.png';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home">
      <div>
        <h1>Welcome</h1>
         <p className='copy-text'>Balify technologies Click the button below to meet our amazing users all over the world</p>
        <button onClick={() => navigate('/users')}>Explore</button>
      </div>
     
    </div>
  );
};

export default Home;
