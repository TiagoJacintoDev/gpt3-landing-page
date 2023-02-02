import google from "../assets/google.png";
import atlassian from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";
import shopify from "../assets/shopify.png";
import slack from "../assets/slack.png";

export const Brand = () => {
  return (
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 py-8 px-5">
      <div>
        <img src={google} alt="google" />
      </div>
      <div>
        <img src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img src={shopify} alt="shopify" />
      </div>
      <div>
        <img src={slack} alt="slack" />
      </div>
    </div>
  );
};
