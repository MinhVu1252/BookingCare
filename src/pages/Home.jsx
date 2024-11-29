import { Banner } from "../components/home/Banner";
import { HospitalList } from "../components/home/HospitalList";
import { SpecialtyList } from "../components/home/SpecialtyList";

export function Home() {
  return (
    <div>
      <div className="flex flex-col">
        <Banner />
        <div className="mt-60">
          <HospitalList />
        </div>
        <div className="mt-20">
          <SpecialtyList />
        </div>
        <div className="mt-20"></div>
      </div>
    </div>
  );
}
