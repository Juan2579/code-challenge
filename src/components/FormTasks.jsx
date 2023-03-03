import { Button, Stack, TextField } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useContext  } from "react";
import { TaskContext } from "../context/TasksContext";

export const FormTasks = () => {
  const { createTask, task, setTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(task);
    setTask({
      name: "",
      description: "",
      date: new Date().toLocaleDateString(),
    });
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <form onSubmit={handleSubmit}>
        <Stack spacing={2} sx={{ width: "60%", marginTop: "15px" }}>
          <TextField
            name="name"
            value={task?.name}
            onChange={(e) => setTask({ ...task, name: e.target.value })}
            size="small"
            variant="outlined"
            label="Task Name"
            color="secondary"
            required
          />
          <TextField
            name="description"
            value={task?.description}
            onChange={(e) => setTask({ ...task, description: e.target.value })}
            size="small"
            variant="outlined"
            label="Task Description"
            color="secondary"
            required
          />
          <DatePicker
            name="date"
            label="Task Date"
            openTo="day"
            views={["year", "month", "day"]}
            value={task?.date}
            onChange={(newDate) => {
              const date = new Date(newDate);
              setTask({ ...task, date: date.toLocaleDateString() });
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                size="small"
                variant="outlined"
                color="secondary"
                required
              />
            )}
          />
          <Button type="submit" sx={{ width: "50%" }} variant="contained">
            Create task
          </Button>
        </Stack>
      </form>
    </LocalizationProvider>
  );
};
