import { ResponsivePie } from '@nivo/pie';
import { useMemo } from 'react';
import useFarms from '../../api-hooks/farms/use-farms';

function FarmableVersusVegetationBoard() {
  const { data: farms } = useFarms();

  const data = useMemo(() => {
    const map = farms?.reduce((acc, farm) => {
      return {
        ...acc,
        ['FARMABLE']:
          (acc?.['FARMABLE'] || 0) + Number(farm?.farmableAreaSize || 0),
        ['VEGETATION']:
          (acc?.['VEGETATION'] || 0) + Number(farm?.vegetationAreaSize || 0),
      };
    }, {} as any);

    const data = Object.entries(map).map(([key, value]) => {
      const translate = {
        FARMABLE: 'Área agricultável',
        VEGETATION: 'Vegetação',
      } as any;
      return { id: translate[key], label: translate[key], value };
    });
    return data;
  }, [farms?.length]);

  const isNonIdealState = !farms?.length;

  return (
    <div className="flex flex-col flex-1 max-w-[400px] py-4 rounded-md bg-white border">
      <div className="text-lg font-medium text-center text-gray-700">
        Uso de Solo
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

export default FarmableVersusVegetationBoard;
