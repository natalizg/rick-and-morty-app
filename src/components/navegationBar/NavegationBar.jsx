import React from "react";
import { useNavigate } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  IconButton,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { styles } from "./NavegationBarStyles";

const NavegationBar = ({ onSearchChange, onGenderChange }) => {
  const genders = ["female", "male", "genderless", "unknown"];
  const navigate = useNavigate();

  return (
    <AppBar position="sticky" sx={styles.appBar}>
      <Toolbar sx={styles.toolbar}>
        <Box sx={styles.leftContainer}>
          <Typography variant="h4" sx={styles.title}>
            Rick and Morty App
          </Typography>
          <Box sx={styles.filtersContainer}>
            <TextField
              label="Search by name"
              variant="outlined"
              size="small"
              sx={styles.textField}
              onChange={(e) => onSearchChange(e.target.value)}
            />

            <FormControl size="small" sx={styles.formControl}>
              <InputLabel sx={styles.inputLabel}>Gender</InputLabel>
              <Select
                label="Gender"
                defaultValue=""
                sx={styles.select}
                onChange={(e) => onGenderChange(e.target.value)}
              >
                <MenuItem value="">All</MenuItem>
                {genders.map((g) => (
                  <MenuItem key={g} value={g}>
                    {g.charAt(0).toUpperCase() + g.slice(1)}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
        <Box>
          <IconButton
            color="inherit"
            sx={styles.favoriteIcon}
            onClick={() => navigate("/favorites")}
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default NavegationBar;
