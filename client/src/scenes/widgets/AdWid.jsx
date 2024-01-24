import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/flexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponcered
        </Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src="http://localhost:3001/assets/info4.jpeg"
        style={{
          borderRadius: "0.75rem",
          margin: "0.75rem 0",
        }}
      ></img>
      <FlexBetween>
        <Typography color={main}>WomenGarage</Typography>
        <Typography color={medium}>WomenGarage.Com</Typography>
      </FlexBetween>
      <Typography color={medium}>
        Kya Aap Ki Gadi Bhi Ho Gai He Kharab..? To Aaiye WomenGarage Me..
      </Typography>
      
    </WidgetWrapper>
  );
};

export default AdvertWidget;
