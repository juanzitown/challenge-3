import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';
import useFarms from '../../api-hooks/farms/use-farms';

function TotalFarmsByStateBoard() {
  const { data: farms } = useFarms();

  const data = useMemo(() => {
    const map = farms?.reduce((acc, farm) => {
      return {
        ...acc,
        [farm?.state]: (acc?.[farm?.state] || 0) + 1,
      };
    }, {} as any);

    const data = Object.entries(map).map(([key, value]) => {
      return { id: key, label: key, value };
    });
    return data;
  }, [farms?.length]);

  return (
    <div className="flex flex-col max-w-[600px] flex-1 py-4 rounded-md bg-white border gap-2">
      <div className="text-lg font-medium text-center text-gray-700">
        Total por Estado
      </div>
      <div style={{ height: 160 }}>
        <ResponsivePie
          data={data}
          margin={{ top: 30, right: 20, bottom: 30, left: 20 }}
          animate={true}
        />
      </div>
    </div>
  );
}

export default TotalFarmsByStateBoard;
