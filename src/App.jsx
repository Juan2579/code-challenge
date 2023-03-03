import { Box } from "@mui/material"
import { CardGenerator } from "./containers/CardGenerator"
import { CardsList } from "./containers/CardsList"
import { TasksProvider } from "./context/TasksContext"

export const App = () => {
  
  return (
    <TasksProvider>
      <Box 
        component="main"
        sx={{
        width: "100%",
        height: "100%",
        padding: "50px 0px",
        backgroundColor: "#151538",
      }}>
        <CardGenerator />
        <CardsList  />
      </Box>
    </TasksProvider>
  )
}
