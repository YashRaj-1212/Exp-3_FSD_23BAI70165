import { Container } from 'react-bootstrap';
import Navigation from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import CardComponent from '../components/CardComponent';
import Footer from '../components/Footer';

const Home = () => (
  <>
    <Navigation />
    <HeroSection />
    <Container className="py-5">
      <h2 className="text-center fw-bold mb-5">Premium Features</h2>
      <CardComponent />
    </Container>
    <Footer />
  </>
);
export default Home;