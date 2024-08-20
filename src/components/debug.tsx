import useFarms from '../api-hooks/farmers/use-farms';

function Debug() {
  const { data: farmers } = useFarms();

  return (
    <div className="flex flex-col gap-0.5">
      {farmers?.map?.((farmer) => {
        return (
          <div className="text-sm" key={farmer?.id}>
            {farmer?.name}
          </div>
        );
      })}
    </div>
  );
}

export default Debug;
