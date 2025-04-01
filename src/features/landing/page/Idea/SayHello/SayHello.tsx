import {
  ISocialsProps,
  Socials,
} from "@/features/landing/page/Hero/Socials/Socials";
import { ContactMe } from "@/features/landing/page/Hero/ContactMe/ContactMe";

import classes from "./SayHello.module.scss";

export interface ISayHelloProps extends ISocialsProps {
  text: string;
  email: string;
}

export const SayHello = ({ email, socialLinks, text }: ISayHelloProps) => {
  return (
    <div className={classes.container}>
      <Socials socialLinks={socialLinks} />
      <div className={classes.subContainer}>
        <p className={classes.description}>{text}</p>
        <ContactMe email={email} text="Drop a message" />
      </div>
    </div>
  );
};
