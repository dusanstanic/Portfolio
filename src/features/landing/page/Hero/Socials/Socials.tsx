import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { Link } from "@/components/Link/Link";

import classes from "./Socials.module.scss";

export interface ISocialsProps {
  socialLinks: { linkedInUrl: string };
}

export const Socials = ({ socialLinks }: ISocialsProps) => {
  return (
    <Link
      to={socialLinks.linkedInUrl}
      className={classes.socials}
      aria-label="Say Hello – Open profile on LinkedIn"
    >
      <>
        <span>Say Hello</span>
        <ul className={classes.brands}>
          <li className={classes.iconWrapper}>
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          </li>
        </ul>
      </>
    </Link>
  );
};
