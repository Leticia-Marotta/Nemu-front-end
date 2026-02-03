import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const LoadingModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: any;
}) => {
  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box sx={style.modal}>
        <Typography variant="h6">Carregando...</Typography>
      </Box>
    </Modal>
  );
};

const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "#FFF",
    borderRadius: 2,
    boxShadow: 24,
    p: 5,
  },
};

export default LoadingModal;
