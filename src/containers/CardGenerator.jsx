import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import { FormTasks } from '../components/FormTasks'

export const CardGenerator = () => {
  return (
    <Box
      component="section"
      sx={{
        width: "90%",
        maxWidth: "650px",
        margin: "0 auto",
        backgroundColor: "#537FE7"
      }}
    >
      <Stack spacing={2} sx={{ padding: "20px 10px"}} >
        <Typography align="center" variant="h5" sx={{fontWeight: "bold"}}>Create your task!</Typography>
        <Typography align="center" paragraph>Please fill the following inputs with your task info</Typography>
        <FormTasks />
      </Stack>
    </Box>
  )
}
