import { Tabss } from "../tabs/tabs.jsx";

function Dashboard() {
  return (
    <section className="px-10 w-full flex flex-col gap-2 mt-[3rem] lg:mt-[4rem]">
      <h2 className="text-3xl font-bold text-gray-900 font-serif mb-8">
        Hi, Mark Wonah
      </h2>

      <Tabss />
    </section>
  );
}

export default Dashboard;
