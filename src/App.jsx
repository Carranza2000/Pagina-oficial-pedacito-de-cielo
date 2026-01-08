import Header from './Components/Header.jsx'
import Aliances from "./Components/Aliances.jsx";
import Brands from "./Components/Brands.jsx";
import Figures from "./Components/Figures.jsx";
import VideoInfo from "./Components/VideoInfo.jsx";
import Vision from "./Components/Vision.jsx";
import Mission from "./Components/Mission.jsx";
import Donations from "./Components/Donations.jsx";
import Slider from  "./Components/Slider.jsx";
import Team from './Components/Team.jsx';
import Activities from './Components/Activities.jsx';

export default function App(){
    return (
        <>
            <Header/>
            <Aliances/>
            <Brands/>
            <Figures/>
            <VideoInfo/>
            <Vision/>
            <Mission/>
            <Donations/>
            <Slider/>
            <Team/>
            <Activities/>
        </>
    )
}