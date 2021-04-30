import Avatar from "@material-ui/core/Avatar";

import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import GoogleLogo from "../images/google.svg";
import AirbnbLogo from "../images/airbnb.jpg";
import FacebookLogo from "../images/facebook.svg";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(4),
      height: theme.spacing(4),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

type CompanyAvatarProps = {
  name: string;
};

const CompanyAvatar = ({ name }: CompanyAvatarProps) => {
  const classes = useStyles();
  switch (name) {
    case "Google":
      return <Avatar alt="Google" src={GoogleLogo} className={classes.small} />;
      break;
    case "Airbnb":
      return <Avatar alt="Airbnb" src={AirbnbLogo} className={classes.small} />;
      break;
    case "Facebook":
      return (
        <Avatar alt="Facebook" src={FacebookLogo} className={classes.small} />
      );
      break;
    default:
      return <Avatar alt={name} className={classes.small} src={name} />;
  }
};

export default CompanyAvatar;
