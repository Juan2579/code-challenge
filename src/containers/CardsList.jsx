import { Box, Button, Card, CardContent, Stack, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import { ModalTask } from '../components/ModalTask'
import { TaskContext } from '../context/TasksContext'

export const CardsList = () => {

  const {tasksList, deleteTask} = useContext(TaskContext)  
  const [modal, setModal] = useState(false);
  const [modalInfo, setModalInfo] = useState({})
  const handleOpenModal = (task) => {
    setModalInfo(task)
    setModal(true)
  };
  const handleCloseModal = () => setModal(false);

  return (
    <Box component="section"
    sx={{
      width: "90%",
      maxWidth: "650px",
      margin: "20px auto",
      padding: "20px 10px",
      backgroundColor: "#537FE7"
    }}>
      <Typography align="center" variant="h6" sx={{fontWeight: "bold"}}>Here you will see your tasks</Typography>
      <Stack 
        spacing={3} 
        sx={{ 
          padding: "20px 10px", 
          minHeight: "400px", 
          flexDirection: ["column", "row", "row", ], 
          flexWrap: "wrap", 
          gap: "50px", 
          margin: "0px",
          justifyContent: "center",
          alignContent: "center"
        }}
      >
        {tasksList.length > 0 ? tasksList.map((task,index) => {
          return (
            <Card key={`${task}${index}`} sx={{width: "250px", height:"250px" ,margin: "0px", backgroundColor: "#1b3e91", borderRadius: "10px"}}>
              <CardContent >
                <Stack spacing={6} sx={{alignContent:"center", justifyContent: "center", color: "white"}}>
                  <Stack>
                    <Typography align="center" sx={{fontWeight: "bold"}}>Task Name: </Typography>
                    <Typography align="center">{task?.name}</Typography>
                  </Stack>
                  <Stack>
                    <Typography align="center" sx={{fontWeight: "bold"}}>Task Completion Date:</Typography>
                    <Typography align="center">{task?.date}</Typography>
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2} sx={{paddingTop: "30px"}}>
                  <Button onClick={() => handleOpenModal(task)} sx={{width: "50%"}} variant="contained" >Preview</Button>
                  <Button onClick={() => deleteTask(task?.id)} sx={{width: "50%", backgroundColor: "red", transitionDuration: "700ms" , ":hover": {bgcolor: "white", color: "red", opacity: "0.4"}}} variant="contained">Delete</Button>
                </Stack>
              </CardContent>
                <ModalTask modalInfo={modalInfo} modal={modal} handleCloseModal={handleCloseModal}/>
            </Card>
          )
        }) : <Typography sx={{fontWeight: "bold"}} variant="h6">You haven't created tasks. Start creating one!</Typography>}
      </Stack>
    </Box>
  )
}
