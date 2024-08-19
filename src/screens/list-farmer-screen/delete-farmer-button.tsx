import useDeleteFarmerById from '../../api-hooks/farmers/use-delete-farmer-by-id';
import Button from '../../components/button';
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
    <div>
      <Button
        onClick={() => {
          deleteFarmer(farmer?.id);
        }}
      >
        Delete
      </Button>
    </div>
  );
}

export default DeleteFarmerButton;
