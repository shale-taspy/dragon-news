import Catagories from "../components/shared/Catagories";


export default function Home() {
  return (
    <div className="grid grid-cols-12 gap-2 container mx-auto my-12">
      <div className="font-bold   col-span-3 ">
        <p className="text-lg">All Catagories</p>
        <Catagories></Catagories>
      </div>
      <div className="font-bold text-3xl bg-red-200 col-span-6">All News</div>
      <div className="font-bold text-3xl bg-cyan-200 col-span-3">All Scoial</div>
    </div>
  );
}
