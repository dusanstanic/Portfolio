import { ContactMe } from "../ContactMe/ContactMe";
import { ISocialsProps, Socials } from "../Socials/Socials";

import classes from "./SayHello.module.scss";

export interface ISayHelloProps extends ISocialsProps {
  text: string;
  email: string;
}

export const SayHello = ({ email, socialLinks, text }: ISayHelloProps) => {
  return (
    <div className={classes.body}>
      <Socials socialLinks={socialLinks} />
      <p className={classes.description}>{text}</p>
      <ContactMe email={email} />
    </div>
  );
};
