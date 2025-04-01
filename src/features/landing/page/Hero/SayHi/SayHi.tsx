import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Button } from "@/components/Button/Button";
import { Link } from "@/components/Link/Link";

import classes from "./SayHi.module.scss";

export interface ISayHiProps {
  text: string;
  socialLinks: { linkedInUrl: string };
  email: string;
}

export const SayHi = ({ email, socialLinks, text }: ISayHiProps) => {
  return (
    <div className={classes.body}>
      <div className={classes.social}>
        <span>Say Hello</span>
        <ul className={classes.brands}>
          <li className={classes.iconWrapper}>
            <Link
              onClick={() => window.open(socialLinks.linkedInUrl, "_blank")}
            >
              <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
            </Link>
          </li>
        </ul>
      </div>
      <p className={classes.description}>{text}</p>
      <div className={classes.contact}>
        <div className={classes.contactMe}>
          <Button
            size="large"
            onClick={() => {
              window.location.href = `mailto:${email}?subject=Subject&body=Hello Dusan`;
            }}
          >
            Contact Me
          </Button>
        </div>
      </div>
    </div>
  );
};
