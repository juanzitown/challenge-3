import { useMemo } from 'react';
import useFarms from '../../api-hooks/farms/use-farms';

function TotalAreaSizeBoard() {
  const { data: farms } = useFarms();

  const totalSize = useMemo(() => {
    return farms?.reduce?.((acc, farm) => {
      const farmSize = Number(farm?.totalAreaSize || 0);
      return farmSize + acc;
    }, 0);
  }, [farms?.length]);

  return (
    <div className="flex flex-col pt-4 pb-2 rounded-md bg-white border">
      <div className="text-lg font-medium text-center text-gray-700">
        Total em hectare
      </div>
      <div className="text-[32px] font-bold text-center">{totalSize}</div>
    </div>
  );
}

export default TotalAreaSizeBoard;
