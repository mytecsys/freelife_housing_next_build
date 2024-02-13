import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import Typography from "@mui/material/Typography";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function ImageGallary() {
  return (
    <ImageList
      sx={{ width: "100%", height: 410 }}
      variant="quilted"
      cols={12} // Adjust the number of columns for desktop view
      rowHeight={200}
      gap={8}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <div
            className="overlay"
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(0, 0, 0, 0.5)", // Adjust the darkness here
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
            }}
          >
            <Typography variant="h6" style={{ fontSize: "13px" }}>
              {item.title}
            </Typography>
          </div>
          <img
            {...srcset(item.img, 150, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: "https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    title: "Independent hosue",
    rows: 1,
    cols: 3,
  },
  {
    img: "https://framerusercontent.com/images/7br4uRjIjL8CyFscubgDfE3cg.jpeg",
    title: "Plots",
    rows: 1,
    cols: 3,
  },
  {
    img: "https://cdn.discordapp.com/attachments/1100301796913721437/1202505681710751845/Mask_group_1.png?ex=65cdb3af&is=65bb3eaf&hm=d351e1bad35269701be2be2b4fccd39c4128becc27e5155e588b985d2ab40696&",
    title: "Flats",
    rows: 2,
    cols: 6,
  },
  {
    img: "https://cdn.discordapp.com/attachments/1100301796913721437/1202505510335553566/Rectangle_48.png?ex=65cdb387&is=65bb3e87&hm=f71ec660ef7f11d2875a9a1e9569a510b6354f0cce18ce50ab7bf51489b383ec&",
    title: "Agricultural Land",
    rows: 1,
    cols: 6,
  },
];
