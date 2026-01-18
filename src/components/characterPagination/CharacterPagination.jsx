import React from "react";
import { Pagination } from "@mui/material";
import { styles } from "./CharacterPaginationStyles";
const CharacterPagination = ({ page, setPage, totalPages }) => {

  return (
    <div className="flex justify-center">
      <Pagination
        count={totalPages || 1}
        page={page}
        onChange={(e, value) => {
          setPage(value);
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        size="large"
        color="primary"
        showFirstButton
        showLastButton
        sx={styles}
      />
    </div>
  );
};

export default CharacterPagination;
