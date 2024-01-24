import { Box, useMediaQuery } from "@mui/material";
import NavBar from "../navbar";
import { useSelector } from "react-redux";
import UserWidget from "../widgets/UserWid";
import MyPostWidget from "../widgets/MyPostWidget";
import PostsWidgets from "../widgets/PostsWidgets";
import AdvertWidget from "../widgets/AdWid";
import FriendListWidget from "../widgets/Frndlst";

const HomePage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
  const { _id, picturePath } = useSelector((state) => state.user);
  return (
    <Box>
      <NavBar></NavBar>
      <Box
        width="100%"
        padding=" 2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} picturePath={picturePath}></UserWidget>
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath} />
          <PostsWidgets userId={_id} />
        </Box>
        {isNonMobileScreens && (
          <Box flexBasis="26%">
            <AdvertWidget></AdvertWidget>
            <Box m="2rem">
              <FriendListWidget></FriendListWidget>
            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default HomePage;
