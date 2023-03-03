import { Modal, Typography, Box, Stack, IconButton } from "@mui/material";
import CancelIcon from '@mui/icons-material/Cancel';
import React from "react";

export const ModalTask = ({ modal, handleCloseModal, modalInfo: task  }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#011032",
    color: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={modal}
      onClose={handleCloseModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Stack spacing={3}>
          <Typography variant="h5" sx={{fontWeight: "bold"}}>Task Information</Typography>
          <Stack>
            <Typography  sx={{ fontWeight: "bold" }}>
              Task Name: 
            </Typography>
            <Typography sx={{color: "lightGray"}}>{task.name}</Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontWeight: "bold" }}>
              Task Description: 
            </Typography>
            <Typography sx={{color: "lightGray"}} >{task.description}</Typography>
          </Stack>
          <Stack>
            <Typography sx={{ fontWeight: "bold" }}>
              Task Completion Date: 
            </Typography>
            <Typography sx={{color: "lightGray"}}>{task.date}</Typography>
          </Stack>
        </Stack>
        <IconButton onClick={handleCloseModal} sx={{right: "-85%"}}>
          <CancelIcon fontSize="large" sx={{color: "white"}} />
        </IconButton>
      </Box>
    </Modal>
  );
};
