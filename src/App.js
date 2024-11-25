import './App.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {Header} from './components/home/Header';
import { Banner } from './components/home/Banner';
import { HospitalList } from './components/home/HospitalList';
import { SpecialtyList } from './components/home/SpecialtyList';
import { DoctorList } from './components/home/Doctors';
import { Footer} from './components/home/Footer';
function App() {
  return (
    <><Header />
    <div className="flex flex-col">
  <Banner />
  <div className="mt-60">
    <HospitalList />
  </div>
  <div className="mt-20">
   <SpecialtyList/>
  </div>
  <div className="mt-20">
   
  </div>
  <div className="mt-20">
   <Footer/>
  </div>
</div>
    </>
  );
}

export default App;
