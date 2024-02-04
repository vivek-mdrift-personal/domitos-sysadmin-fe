import { DashboardTabs } from '@/components/dashboard/TabSwitcher';
import SimpleBarChart from '@/components/dashboard/barChart';
import { DashboardComboBox } from '@/components/independent/ComboBox';
import { DatePickerWithRange } from '@/components/independent/DateRangeSelect';

function Home() {
  return (
    <div className="container">
      <div className="flex flex-row">
        <div className="justify-items-center">
          <h2 className="text-2xl text-slate-900 ">
            mDrift Products Dashboard
          </h2>
        </div>
      </div>
      <div className="flex">
        <div className="flex-1">
          <div className="p-4">
            <DashboardComboBox />
          </div>
        </div>
        <div className="flex-1">
          <div className="p-4 flex justify-end">
            <DatePickerWithRange />
          </div>
        </div>
        <div className="border-t-4 border-gray-500 mx-4"></div>
      </div>
      <div className="flex flex-row">
        <div className="flex-col col-span-3 h-48 w-[40%] ">
          <DashboardTabs />
        </div>
        <div className="flex-col col-span-2 h-[500px] w-[60%]">
          <SimpleBarChart />
        </div>
      </div>
    </div>
  );
}

export default Home;
