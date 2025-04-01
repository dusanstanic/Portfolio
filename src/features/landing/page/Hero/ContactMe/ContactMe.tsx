import { Button } from "@/components/Button/Button";

import classes from "./ContactMe.module.scss";

interface IContactMeProps {
  email: string;
  text?: string;
}

export const ContactMe = ({ email, text }: IContactMeProps) => {
  return (
    <div className={classes.contact}>
      <div className={classes.contactMe}>
        <Button
          size="large"
          onClick={() => {
            window.location.href = `mailto:${email}?subject=Subject&body=Hello Dusan`;
          }}
        >
          {text ? text : "Contact Me"}
        </Button>
      </div>
    </div>
  );
};
