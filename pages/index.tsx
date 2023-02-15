
import HeaderComponents from './../src/components/mainPage/Header/HeaderComponents';
import HeroComponents from './../src/components/mainPage/Hero/HeroComponents';
import FindTripComponent from '../src/components/mainPage/FindTrip/FindTripComponent';
import TravelerPoint from '../src/components/mainPage/TravelerPoint/TravelerPointComponent';



export default function Home() {
  return (
    <main>
      <HeaderComponents/>
      <HeroComponents />
      <FindTripComponent />
      <TravelerPoint/>
    </main>
  )
}
