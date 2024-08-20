import useFarms from '../api-hooks/farms/use-farms';

function Debug() {
  const { data: farms } = useFarms();

  return (
    <div className="flex flex-col gap-0.5">
      {farms?.map?.((farm) => {
        return (
          <div className="text-sm" key={farm?.id}>
            {farm?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Debug;
