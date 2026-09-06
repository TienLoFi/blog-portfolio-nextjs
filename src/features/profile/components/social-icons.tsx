import { FacebookIcon, MailIcon } from "lucide-react";

const iconSize = "h-6 w-6";

export const getSocialIcon = (icon: string) => {
  switch (icon) {
    case "facebook":
      return <FacebookIcon className={iconSize} />;
    case "mail":
      return <MailIcon className={iconSize} />;
    default:
      return null;
  }
};
