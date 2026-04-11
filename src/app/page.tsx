import { myFont } from '../../public/fonts/local';
import NavBar from './components/NavBar/NavBar';
import HeroSection from './components/HeroSection/HeroSection';


export default function Home() {
  return (
    <div className='w-full h-full'>
      <NavBar />
      <HeroSection />
    </div>

  );
}
