import { Button } from "@/components/Button/Button";

import classes from "./ContactMe.module.scss";

interface IContactMeProps {
  email: string;
}

export const ContactMe = ({ email }: IContactMeProps) => {
  return (
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
  );
};
