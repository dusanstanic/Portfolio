import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { openInNewTab } from "@/utils/navigation";

import { Link } from "@/components/Link/Link";

import classes from "./Socials.module.scss";

export interface ISocialsProps {
  socialLinks: { linkedInUrl: string };
}

export const Socials = ({ socialLinks }: ISocialsProps) => {
  return (
    <div
      className={classes.social}
      onClick={() => openInNewTab(socialLinks.linkedInUrl)}
      style={{ cursor: "pointer" }}
    >
      <span>Say Hello</span>
      <ul className={classes.brands}>
        <li className={classes.iconWrapper}>
          <Link>
            <FontAwesomeIcon icon={faLinkedin} className={classes.icon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};
