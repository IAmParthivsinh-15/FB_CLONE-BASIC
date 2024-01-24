import { Box } from "@mui/material";
import { styled } from "@mui/system";

const UserImg = ({ image, size = "60px" }) => {
  return (
    <Box width={size} height={size}>
      <img
        style={{ objectFit: "cover", borderRadius: "50%" }}
        width={size}
        height={size}
        alt="user"
        src={`http://localhost:3001/assets/${image}`}
      ></img>
    </Box>
  );
};

export default UserImg;
