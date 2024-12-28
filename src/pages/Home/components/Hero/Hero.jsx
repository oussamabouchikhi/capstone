import { useNavigate } from 'react-router-dom';
import { Button, Heading } from '../../../../components';
import './Hero.css';

export const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="LL-Hero">
      <div className="LL-Hero-left">
        <Heading tag="h1" size="2xl">
          Little Lemon
        </Heading>
        <p className="subtitle">Oran</p>
        <p id="LL-Hero-desc">
          Welcome to Little Lemon, your destination for authentic Algerian cuisine.
        </p>
        <Button
          ariaLabel="Reserve a Table"
          id="LL-Hero-btn"
          primary
          onClick={() => navigate('/bookings')}
        >
          Reserve a Table
        </Button>
      </div>
      <div className="LL-Hero-right">
        <img
          src="https://i.ytimg.com/vi/5wsdUOxojr8/maxresdefault.jpg"
          alt="Little Lemon - Hero"
        />
      </div>
    </section>
  );
};
