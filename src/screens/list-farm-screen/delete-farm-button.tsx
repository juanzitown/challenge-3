import useDeleteFarmById from '../../api-hooks/farms/use-delete-farm-by-id';
import IconButton from '../../components/icon-button';
import FarmType from '../../types/farm-type';

type DeleteFarmButtonProps = {
  farm: FarmType;
};

function DeleteFarmButton({ farm }: DeleteFarmButtonProps) {
  const { fetch: deleteFarm } = useDeleteFarmById({
    onSuccess() {},
  });
  return (
    <IconButton
      icon="delete"
      onClick={() => {
        deleteFarm(farm?.id);
      }}
    />
  );
}

export default DeleteFarmButton;
