import Button from './button';

type ConfirmDialogProps = {
  title: string;
  message: string;
  visible: boolean;
  onClose: () => void;
  onConfirm: () => void;
};

function ConfirmDialog({
  visible,
  onClose,
  onConfirm,
  title,
  message,
}: ConfirmDialogProps) {
  if (!visible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="flex flex-col bg-white px-6 pt-6 pb-4 rounded-xl shadow-lg gap-6">
        <h2 className="flex flex-col mx-auto items-center justify-center w-[220px] min-h-[40px] text-lg text-white text-center font-semibold bg-gray-700 rounded-xl -mt-[40px]">
          {title}
        </h2>
        <div className="text-base">{message}</div>
        <div className="flex flex-row items-center justify-end gap-4">
          <Button onClick={onClose}>Cancel</Button>
          <Button variant="danger" onClick={onConfirm}>
            Confirm
          </Button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmDialog;
