import useDeleteFarmerById from '../../api-hooks/farmers/use-delete-farmer-by-id';
import IconButton from '../../components/icon-button';
import FarmerType from '../../types/farmer-type';

type DeleteFarmerButtonProps = {
  farmer: FarmerType;
};

function DeleteFarmerButton({ farmer }: DeleteFarmerButtonProps) {
  const { fetch: deleteFarmer, pending: pendingDeleteFarmer } =
    useDeleteFarmerById({
      onSuccess() {},
    });
  return (
    <IconButton
      icon="delete"
      onClick={() => {
        deleteFarmer(farmer?.id);
      }}
    />
  );
}

export default DeleteFarmerButton;
