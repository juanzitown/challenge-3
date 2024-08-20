import useFarms from '../../api-hooks/farms/use-farms';

function TotalFarmsBoard() {
  const { data: farms } = useFarms();
  return (
    <div className="flex flex-col flex-1 max-w-[300px] px-4 pt-4 pb-2 rounded-md bg-white border">
      <div className="text-lg font-medium text-center text-gray-700">
        Total de Fazendas
      </div>
      <div className="text-[32px] font-bold text-center">
        {farms?.length || 0}
      </div>
    </div>
  );
}

export default TotalFarmsBoard;
