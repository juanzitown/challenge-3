import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';
import useFarms from '../../api-hooks/farms/use-farms';

function TotalByCropBoard() {
  const { data: farms } = useFarms();

  const data = useMemo(() => {
    const crops = farms?.flatMap((farm) => farm?.crops || []);
    const map = crops?.reduce((acc, cropObject: any) => {
      const crop = cropObject?.label;
      return {
        ...acc,
        [crop]: (acc?.[crop] || 0) + 1,
      };
    }, {} as any);

    const data = Object.entries(map).map(([key, value]) => {
      return { id: key, label: key, value };
    });
    return data;
  }, [farms?.length]);

  const isNonIdealState = !farms?.length;

  return (
    <div className="flex flex-col flex-1 max-w-[400px] py-4 rounded-md bg-white border gap-2">
      <div className="text-lg font-medium text-center text-gray-700">
        Total por Cultura
      </div>
      {isNonIdealState && (
        <div className="text-sm text-center font-medium text-gray-700">
          Nenhuma informação encontrada
        </div>
      )}
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

export default TotalByCropBoard;
