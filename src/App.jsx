import "./styles.css";
import React from "react";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
} from "react-share";
import { WhatsappShareButton } from "react-share";
import { WhatsappIcon } from "react-share";
import { PinterestShareButton } from "react-share";
import { PinterestIcon } from "react-share";

export default function App() {
  const shareUrl =
    "http://localhost:8000/collections/-diwali2024-festivaloflights-171164928705515?utm_source=whatsapp&utm_medium=messaging&utm_campaign=Diwali2024%E2%9C%A8FestivalOfLights%20&utm_id=294645409187152464857914849268904412369";
  const title = "Unthink shop";
  const hashtag = ["unthink"];
  const mediaUrl =
    "https://media.istockphoto.com/id/1284671318/photo/meadows-in-the-snow-peak-mountains-of-himalaya.jpg?s=1024x1024&w=is&k=20&c=r-dL9kirCzRqWZHlkKOf3y4IS0rI8EmYZKI3ytTo_Iw=";
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px",
        }}
      >
        <FacebookShareButton hashtags={hashtag} url={shareUrl} quote={title}>
          <FacebookIcon size={25} round={true} />
        </FacebookShareButton>

        <TwitterShareButton hashtags={hashtag} url={shareUrl} title={title}>
          <TwitterIcon size={25} round={true} />
        </TwitterShareButton>

        <WhatsappShareButton hashtags={hashtag} url={shareUrl} title={title}>
          <WhatsappIcon size={25} round={true} />
        </WhatsappShareButton>

        <PinterestShareButton
          url={shareUrl}
          media={mediaUrl}
          description="Check out this image!"
        >
          <PinterestIcon size={25} round={true} />
        </PinterestShareButton>

        <LinkedinShareButton
          hashtags={hashtag}
          url={shareUrl}
          title={title}
          summary="This is the summary"
          source="YourSource"
        >
          <LinkedinIcon size={25} round={true} />
        </LinkedinShareButton>
      </div>
    </div>
  );
}
