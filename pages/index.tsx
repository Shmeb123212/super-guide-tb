
import HeaderComponents from '../src/components/Header/HeaderComponents';
import HeroComponents from './../src/components/mainPage/Hero/HeroComponents';
import FindTripComponent from '../src/components/mainPage/FindTrip/FindTripComponent';
import TravelerPoint from '../src/components/mainPage/TravelerPoint/TravelerPointComponent';
import DestinationComponent from '../src/components/mainPage/Destination/DestinationComponent';
import AboutComponent from '../src/components/mainPage/About/AboutComponent';
import Footer from '../src/components/Footer/Footer';
import ReviewsComponent from '../src/components/mainPage/Reviews/ReviewsComponent';



export default function Home() {
  return (
    <main>
      <HeaderComponents isMain={true}/>
      <HeroComponents />
      <FindTripComponent />
      <TravelerPoint/>
      <DestinationComponent />
      <AboutComponent/>
      <ReviewsComponent />
      <Footer/>
    </main>
  )
}
