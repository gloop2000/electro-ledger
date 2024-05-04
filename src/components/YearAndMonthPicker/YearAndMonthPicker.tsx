import React, { useState } from "react";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  IconButton,
  MenuItem,
  TextField,
  Typography,
} from "@mui/material";
import { ArrowCircleLeft, ArrowCircleRight } from "@mui/icons-material";
import "./YearAndMonthPicker.css";

const YearAndMonthPicker: React.FC = () => {
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [showForm, setShowForm] = useState<boolean>(false);
  const [month, setMonth] = useState<string>("");
  const [salary, setSalary] = useState<number | "">("");

  const handleMonthChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setMonth(event.target.value as string);
  };

  const handleSalaryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSalary(event.target.value as unknown as number);
  };

  const handleSubmit = () => {
    // Handle form submission, e.g., send data to backend or perform validation
    console.log(`Selected Month: ${month}, Salary: ${salary}`);
    // Optionally, you can reset the form fields and hide the form after submission
    setMonth("");
    setSalary("");
    setShowForm(false);
  };

  const incrementYear = () => {
    setYear(year + 1);
  };

  const decrementYear = () => {
    setYear(year - 1);
  };

  return (
    <div className="container">
      <h3>Pick your year</h3>
      <div className="year-picker">
        <IconButton onClick={decrementYear} aria-label="decrement year">
          <ArrowCircleLeft className="icon" />
        </IconButton>
        <Typography variant="body1">{year}</Typography>
        <IconButton onClick={incrementYear} aria-label="increment year">
          <ArrowCircleRight className="icon" />
        </IconButton>
      </div>
      <h3>Pick your month</h3>
      <div className="month-picker">
        {/* Display action to click to add month */}
        <Card>
          <CardActionArea onClick={() => setShowForm(true)}>
            <CardContent>
              <h1>Click to add month</h1>
            </CardContent>
          </CardActionArea>
        </Card>

        {/* On click show form. Move to separate component */}
        {showForm && (
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 999,
            }}
          >
            <Card>
              <CardContent>
                <Typography variant="h6">Enter Salary Details</Typography>
                <form onSubmit={handleSubmit}>
                  <TextField
                    select
                    fullWidth
                    label="Select Month"
                    value={month}
                    onChange={handleMonthChange}
                    variant="outlined"
                    style={{ marginBottom: 20 }}
                  >
                    <MenuItem value="January">January</MenuItem>
                    <MenuItem value="February">February</MenuItem>
                    {/* Add other months as needed */}
                  </TextField>
                  <TextField
                    fullWidth
                    label="Enter Salary"
                    value={salary}
                    onChange={handleSalaryChange}
                    variant="outlined"
                    type="number"
                    inputProps={{ min: 0 }}
                    style={{ marginBottom: 20 }}
                  />
                  <Button type="submit" variant="contained" color="primary">
                    Submit
                  </Button>
                </form>
              </CardContent>
            </Card>
          </Box>
        )}
      </div>
    </div>
  );
};

export default YearAndMonthPicker;
