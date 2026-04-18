import { ContactMe } from '../ContactMe/ContactMe';
import { Socials } from '../Socials/Socials';

import classes from './SayHello.module.scss';

interface Props {
  text: string;
  email: string;
  socialLinks: { linkedInUrl: string };
}

export const SayHello = ({ email, socialLinks, text }: Props) => {
  return (
    <div className={classes.container}>
      <Socials socialLinks={socialLinks} />
      <p className={classes.description}>{text}</p>
      <ContactMe email={email} />
    </div>
  );
};
