import { Tabs } from "flowbite-react";
import { HiClipboardList } from "react-icons/hi";
import { NavLink } from "react-router-dom";

export function Tabss() {
  return (
    <Tabs aria-label="Tabs with underline" variant="default">
      <Tabs.Item active title="Requests" icon={HiClipboardList}>
        <div className="w-full flex items-center justify-center flex-col">
          <img src="/img/no_data.png" alt="" className="mt-20 w-[6rem]" />
          <p className="text-gray-600 mt-3">No Requests submitted yet.</p>
          <NavLink
            to="getstarted"
            className=" w-fit px-6 mt-4 py-2 lg:px-10 rounded-none uppercase font-thin bg-[#0C0748] text-white hover:bg-[#27225c] hover:text-white"
          >
            Send Request
          </NavLink>
        </div>
      </Tabs.Item>
      <Tabs.Item title="Updates" icon={HiClipboardList}>
        This is{" "}
        <span className="font-medium text-gray-800 dark:text-white">
          Dashboard tab's associated content
        </span>
        . Clicking another tab will toggle the visibility of this one for the
        next. The tab JavaScript swaps classes to control the content visibility
        and styling.
      </Tabs.Item>
    </Tabs>
  );
}
