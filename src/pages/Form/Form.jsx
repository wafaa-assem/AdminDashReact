import {
  Alert,
  Box,
  Button,
  MenuItem,
  Snackbar,
  Stack,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "./../../Components/Head";

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };
  const data = [
    {
      value: "Admin",
      label: "Admin",
    },
    {
      value: "Manager",
      label: "Manager",
    },
    {
      value: "User",
      label: "User",
    },
  ];
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <>
      <Head title={"CREATE USER"} subtitle={"Create a New User Profile"} />
      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      >
        <Stack direction="row" spacing={2}>
          <TextField
            error={errors.firstName}
            helperText={
              errors.firstName ? "This filed is required & min 3 charcters" : ""
            }
            {...register("firstName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
          <TextField
            error={errors.lastName}
            helperText={
              errors.lastName ? "This filed is required & min 3 charcters" : ""
            }
            {...register("lastName", { required: true, minLength: 3 })}
            sx={{ flex: 1 }}
            label="First Name"
            variant="filled"
          />
        </Stack>
        <TextField
          error={errors.email}
          helperText={
            errors.email ? "Please provide a valid email address" : ""
          }
          {...register("email", {
            required: true,
            pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
          })}
          label="Email"
          variant="filled"
        />
        <TextField
          error={errors.phone}
          helperText={errors.phone ? "Please provide a valid phone number" : ""}
          {...register("phone", {
            required: true,
            pattern: /^(010|011|012|015)[0-9]{8}$/,
          })}
          label="Contact Number"
          variant="filled"
        />

        <TextField label="Address 1" variant="filled" />
        <TextField label="Address 2" variant="filled" />
        <TextField select label="Role" variant="filled" defaultValue="User">
          {data.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ ml: "auto" }}>
          <Button
            type="submit"
            variant="contained"
            sx={{ textTransform: "capitalize" }}
          >
            Create New User
          </Button>

          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
          >
            <Alert
              onClose={handleClose}
              severity="info"
              variant="filled"
              sx={{ width: "100%" }}
            >
              Account created successfully
            </Alert>
          </Snackbar>
        </Box>
      </Box>
    </>
  );
}
