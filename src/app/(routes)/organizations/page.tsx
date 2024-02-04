import { DataTable } from '@/components/independent/GenericTable';
function Organizations() {
  return (
    <div className="flex flex-col space-y-10 m-10 ml-20">
      <h4>This is Organizations page</h4>

      <div className="flex flex-row m-9">
        <DataTable />
      </div>
    </div>
  );
}

export default Organizations;
