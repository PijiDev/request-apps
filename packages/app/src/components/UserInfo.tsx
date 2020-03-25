import React from "react";
import Box from "@material-ui/core/Box";
import { RButton } from "request-ui";
import MetamaskIcon from "../assets/img/metamask.png";
import Dot from "./Dot";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    padding: "6px 8px",
    [theme.breakpoints.up("sm")]: {
      padding: "6px 24px",
    },
  },
  icon: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

export default ({ name, network }: { name: string; network?: number }) => {
  const classes = useStyles();
  const displayName =
    name.length <= 20 ? name : `${name.slice(0, 10)}...${name.slice(-10)}`;

  const CombinedIcon = () => {
    return (
      <Box display="flex" alignItems="center" className={classes.icon}>
        <Dot network={network} account={name} />
        <Box width={4} />
        <img src={MetamaskIcon} width={48} height={48} />
      </Box>
    );
  };
  return (
    <RButton
      color="default"
      startIcon={<CombinedIcon />}
      className={classes.button}
    >
      {displayName}
    </RButton>
  );
};
