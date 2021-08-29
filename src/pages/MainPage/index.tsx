import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import PrimarySearchAppBar from "../../components/MiniAppBar";
import GridResultCards from "../../components/gridResultCard";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <PrimarySearchAppBar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <GridResultCards />
      </main>
    </div>
  );
}
