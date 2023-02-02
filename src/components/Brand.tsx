import google from "../assets/google.png";
import atlassian from "../assets/atlassian.png";
import dropbox from "../assets/dropbox.png";
import shopify from "../assets/shopify.png";
import slack from "../assets/slack.png";

export const Brand = () => {
  return (
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-6 py-8 px-5">
      <div>
        <img loading="lazy" src={google} alt="google" />
      </div>
      <div>
        <img loading="lazy" src={atlassian} alt="atlassian" />
      </div>
      <div>
        <img loading="lazy" src={dropbox} alt="dropbox" />
      </div>
      <div>
        <img loading="lazy" src={shopify} alt="shopify" />
      </div>
      <div>
        <img loading="lazy" src={slack} alt="slack" />
      </div>
    </div>
  );
};
