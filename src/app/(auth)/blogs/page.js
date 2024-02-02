import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

export default function Blog() {
  const recentRealstate = [
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506059860942889/Rectangle_39.png?ex=65cdb40a&is=65bb3f0a&hm=f521059e20bb878f415248847f650788dc72390a3353133732d1338366637fc4&",
      title: "Top 10 best appreciating condos in Orlando",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506060141699082/Rectangle_41.png?ex=65cdb40a&is=65bb3f0a&hm=da3869d4d81273a499c92a1d2660d1ff30a9f73790a5a3373945395ed2ef5b18&",
      title: "These were the most expensive Orlando hou...",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506060422975488/Rectangle_43.png?ex=65cdb40a&is=65bb3f0a&hm=f7c9b4c4a04eda46d91d17e38a31d9f3eee679bcaaaf988073afe65d646e974e&",
      title: "The top 5 most livable Orlando neighbourho...",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506059860942889/Rectangle_39.png?ex=65cdb40a&is=65bb3f0a&hm=f521059e20bb878f415248847f650788dc72390a3353133732d1338366637fc4&",
      title: "Top 10 best appreciating condos in Orlando",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506060141699082/Rectangle_41.png?ex=65cdb40a&is=65bb3f0a&hm=da3869d4d81273a499c92a1d2660d1ff30a9f73790a5a3373945395ed2ef5b18&",
      title: "These were the most expensive Orlando hou...",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506060422975488/Rectangle_43.png?ex=65cdb40a&is=65bb3f0a&hm=f7c9b4c4a04eda46d91d17e38a31d9f3eee679bcaaaf988073afe65d646e974e&",
      title: "The top 5 most livable Orlando neighbourho...",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506059860942889/Rectangle_39.png?ex=65cdb40a&is=65bb3f0a&hm=f521059e20bb878f415248847f650788dc72390a3353133732d1338366637fc4&",
      title: "Top 10 best appreciating condos in Orlando",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506060141699082/Rectangle_41.png?ex=65cdb40a&is=65bb3f0a&hm=da3869d4d81273a499c92a1d2660d1ff30a9f73790a5a3373945395ed2ef5b18&",
      title: "These were the most expensive Orlando hou...",
      text: "March 21, 2022",
    },
    {
      imgpath:
        "https://cdn.discordapp.com/attachments/1100301796913721437/1202506060422975488/Rectangle_43.png?ex=65cdb40a&is=65bb3f0a&hm=f7c9b4c4a04eda46d91d17e38a31d9f3eee679bcaaaf988073afe65d646e974e&",
      title: "The top 5 most livable Orlando neighbourho...",
      text: "March 21, 2022",
    },
  ];

  return (
    <>
      <Box style={{ marginTop: "100px", padding: "30px", color: "#535353" }}>
        <Grid container spacing={3} marginTop={"20px"}>
          {recentRealstate.map((developer, index) => (
            <Grid item xs={12} sm={3} key={index}>
              <Card
                style={{
                  padding: "10px",
                  border: "1px solid #202020",
                  boxShadow: "none",
                }}
              >
                <CardMedia
                  sx={{ height: 170 }}
                  image={developer.imgpath}
                  title="green iguana"
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h6"
                    component="div"
                    style={{ fontSize: "1rem", fontWeight: "600" }}
                  >
                    {developer.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {developer.text}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Box style={{ marginTop: "12px", marginLeft: "10px" }}>
                    <Link
                      href="/singleblog"
                      style={{
                        textDecoration: "none",
                        color: "#3D3D3D",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      Read more
                      <ArrowForwardIcon
                        style={{
                          marginLeft: "7px",
                          height: "15px",
                          width: "15px",
                        }}
                      />
                    </Link>
                  </Box>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
