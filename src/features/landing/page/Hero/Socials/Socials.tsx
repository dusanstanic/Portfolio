import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Link } from "@/components/Link/Link";

import classes from "./Socials.module.scss";

export interface ISocialsProps {
  socialLinks: { linkedInUrl: string };
}

export const Socials = ({ socialLinks }: ISocialsProps) => {
  return (
    <div className={classes.social}>
      <span>Say Hello</span>
      <ul className={classes.brands}>
        <li className={classes.iconWrapper}>
          <Link onClick={() => window.open(socialLinks.linkedInUrl, "_blank")}>
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
