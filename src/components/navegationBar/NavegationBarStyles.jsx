export const styles = {
  appBar: { backgroundColor: "black", pt: 2, pb: 2 },
  toolbar: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    alignItems: { xs: "stretch", sm: "center" },
    gap: 2,
  },
  leftContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: { xs: 2, sm: 5 },
    alignItems: { xs: "flex-start", sm: "center" },
    width: "100%",
  },
  filtersContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    gap: 2,
    width: { xs: "100%", sm: "auto" },
  },
  title: { fontWeight: "bold", color: "white", mb: { xs: 1, sm: 0 } },
  textField: {
    "& input": { color: "white" },
    "& label": { color: "white" },
    "& .MuiOutlinedInput-root": {
      "& fieldset": { borderColor: "white" },
      "&:hover fieldset": { borderColor: "white" },
      "&.Mui-focused fieldset": { borderColor: "white" },
    },
    width: { xs: "100%", sm: "auto" },
  },
  formControl: { minWidth: 120, width: { xs: "100%", sm: "auto" } },
  inputLabel: { color: "white" },
  select: {
    color: "white",
    ".MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: "white" },
  },
  favoriteIcon: { color: "white", mt: { xs: 2, sm: 0 } },
};
