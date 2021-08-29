import React from "react";
import clsx from "clsx";
import {
  alpha,
  useTheme,
  makeStyles,
  Theme,
  createStyles,
} from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import NightsStay from "@material-ui/icons/NightsStay";
import Brightness7 from "@material-ui/icons/Brightness7";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { useActions } from "../../redux/actions";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/reducers";
import * as ThemeActions from "../../redux/actions/theme";
import * as SearchActions from "../../redux/actions/search";
import * as MenuActions from "../../redux/actions/menu.action";
import AppleIcon from "@material-ui/icons/Apple";
import BookIcon from "@material-ui/icons/Book";
import MovieIcon from "@material-ui/icons/Movie";
import DeveloperModeIcon from "@material-ui/icons/DeveloperMode";
import CastConnectedIcon from "@material-ui/icons/CastConnected";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import MusicVideoIcon from "@material-ui/icons/MusicVideo";
import FeaturedPlayListIcon from "@material-ui/icons/FeaturedPlayList";
import MovieFilterIcon from "@material-ui/icons/MovieFilter";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SelectAllIcon from "@material-ui/icons/SelectAll";

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    hide: {
      display: "none",
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: "nowrap",
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: "hidden",
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    search: {
      position: "relative",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: alpha(theme.palette.common.black, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      marginRight: theme.spacing(2),
      marginLeft: 0,
      width: "100%",
      [theme.breakpoints.up("sm")]: {
        marginLeft: theme.spacing(3),
        width: "auto",
      },
    },
    searchIcon: {
      padding: theme.spacing(0, 0.5),
      height: "100%",
      position: "absolute",
      pointerEvents: "none",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    inputRoot: {
      color: "inherit",
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "35ch",
      },
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("md")]: {
        display: "flex",
      },
    },
    sectionMobile: {
      display: "flex",
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    grow: {
      flexGrow: 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    themeChanger: {
      color: theme.palette.tertiary.main,
    },
    appleIcon: {
      margin: "0 8px",
    },
  })
);

export default function MiniDrawer() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [searchInput, setSearchInput] = React.useState("");
  const themeActions = useActions(ThemeActions);
  const searchActions = useActions(SearchActions);
  const menuActions = useActions(MenuActions);

  const iconsCreator = (type: string, selected: boolean) => {
    switch (type) {
      case "ebook":
        return <BookIcon color={selected ? "secondary" : "action"} />;
      case "movie":
        return <MovieIcon color={selected ? "secondary" : "action"} />;
      case "software":
        return <DeveloperModeIcon color={selected ? "secondary" : "action"} />;
      case "podcast":
        return <CastConnectedIcon color={selected ? "secondary" : "action"} />;
      case "music":
        return <MusicNoteIcon color={selected ? "secondary" : "action"} />;
      case "musicVideo":
        return <MusicVideoIcon color={selected ? "secondary" : "action"} />;
      case "audiobook":
        return (
          <FeaturedPlayListIcon color={selected ? "secondary" : "action"} />
        );
      case "shortFilm":
        return <MovieFilterIcon color={selected ? "secondary" : "action"} />;
      case "tvShow":
        return <LiveTvIcon color={selected ? "secondary" : "action"} />;
      default:
        return <h6>No match</h6>;
    }
  };

  const isDarkTheme = useSelector(
    (state: RootState) => state.theme.isDarkTheme
  );
  const menuType = useSelector(
    (state: RootState) => state.menuReducer.menuType
  );

  const handleCategoryClicked = (e: any) => {
    console.log(e);
    setOpen(false);
    menuActions.selectMenu(e);
  };

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSearchKeyPress = async (e:any) => {
    if (e.key === "Enter") {
      console.log("enter press here! ");
      e.preventDefault();
      console.log("searchInput", searchInput);
      await searchActions.getSearch(searchInput);
    }
  };

  return (
    <>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>

          <AppleIcon
            className={classes.appleIcon}
            fontSize="large"
            color="action"
          />
          <Typography variant="h6" noWrap>
            Apple Search Appication
          </Typography>

          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <IconButton
                color="inherit"
                aria-label="theme changer"
                className={classes.themeChanger}
                onClick={async () => {
                  console.log("searchInput", searchInput);
                  await searchActions.getSearch(searchInput);
                }}
              >
                <SearchIcon color="primary" />
              </IconButton>
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              onChange={(e) => {
                setSearchInput((e.target as any).value);
                console.log("searchInput", searchInput);
              }}
              type="input"
              id="searchInput"
              onKeyPress={handleSearchKeyPress}
              inputProps={{ "aria-label": "search" }}
            />
          </div>

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton
              color="inherit"
              aria-label="theme changer"
              className={classes.themeChanger}
              onClick={() => themeActions.toggleTheme()}
            >
              {!isDarkTheme ? <Brightness7 /> : <NightsStay />}
            </IconButton>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="theme changer"
              className={classes.themeChanger}
              onClick={() => themeActions.toggleTheme()}
            >
              {!isDarkTheme ? <Brightness7 /> : <NightsStay />}
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {["all"].map((text, index) => (
            <ListItem
              button
              onClick={() => handleCategoryClicked(text)}
              key={text}
            >
              <ListItemIcon>
                {index % 2 === 0 ? (
                  <SelectAllIcon
                    color={menuType === "all" ? "secondary" : "action"}
                  />
                ) : (
                  <MailIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            "ebook",
            "movie",
            "software",
            "podcast",
            "music",
            "musicVideo",
            "audiobook",
            "shortFilm",
            "tvShow",
          ].map((text, index) => (
            <ListItem
              button
              selected={menuType !== undefined && text === menuType}
              onClick={() => {
                handleCategoryClicked(text);
              }}
              key={text}
            >
              <ListItemIcon color={"error"}>
                {iconsCreator(
                  text,
                  menuType !== undefined && text === menuType
                )}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
