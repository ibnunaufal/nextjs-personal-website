"use client";
import {
  FacebookIcon,
  FacebookShareButton,
  LinkedinIcon,
  LinkedinShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";
import React, { PropsWithChildren } from "react";

interface ShareProps {
  title: string;
  url: string;
}
const ShareButton: React.FC<PropsWithChildren<ShareProps>> = ({
  title,
  url,
}) => {
  return (
    <div className="flex my-3">
      <div className="mr-2">
        <FacebookShareButton url={url} quote={title} hashtag={"#naufall"} className=" mr-1">
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      </div>
      <div className="mr-2">
        <TelegramShareButton url={url} title={title} className=" mr-1">
        <TelegramIcon size={32} round />
      </TelegramShareButton>
      </div>
      <div className="mr-2">
        <TwitterShareButton url={url} title={title} className=" mr-1">
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      </div>
      <div className="mr-2">
        <WhatsappShareButton url={url} title={title} separator=":: " className=" mr-1">
        <WhatsappIcon size={32} round />
      </WhatsappShareButton>
      </div>
      <div className="mr-2">
        <LinkedinShareButton url={url} className=" mr-1">
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      </div>
    </div>
  );
};
export default ShareButton;
