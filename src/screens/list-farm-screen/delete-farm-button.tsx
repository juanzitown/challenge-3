import { useState } from 'react';
import useDeleteFarmById from '../../api-hooks/farms/use-delete-farm-by-id';
import ConfirmDialog from '../../components/confirm-dialog';
import IconButton from '../../components/icon-button';
import FarmType from '../../types/farm-type';

type DeleteFarmButtonProps = {
  farm: FarmType;
};

function DeleteFarmButton({ farm }: DeleteFarmButtonProps) {
  const [showModal, setShowModal] = useState(false);

  const { fetch: deleteFarm } = useDeleteFarmById({
    onSuccess() {},
  });

  return (
    <>
      <IconButton
        icon="delete"
        onClick={() => {
          setShowModal(true);
        }}
      />
      <ConfirmDialog
        visible={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={() => deleteFarm(farm?.id)}
        title="Deletar Fazenda"
        message="Tem certeza que deseja deletar a fazenda?"
      />
    </>
  );
}

export default DeleteFarmButton;
