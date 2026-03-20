import { ContactMe } from '../ContactMe/ContactMe';
import { Props as SocialProps, Socials } from '../Socials/Socials';

import classes from './SayHello.module.scss';

export interface Props extends SocialProps {
  text: string;
  email: string;
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
