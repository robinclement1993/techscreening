import React from "react";
import {
  AppBar,
  AppBarSection,
  AppBarSpacer,
  Drawer,
  DrawerItem,
  DrawerItemProps,
} from "@progress/kendo-react-layout";
import { SvgIcon } from "@progress/kendo-react-common";
import { caretDoubleAltRightIcon, gridIcon } from "@progress/kendo-svg-icons";
import { createUseStyles } from "react-jss";
import logo from "../images/logo.png";
import { DrawerSelectEvent } from "@progress/kendo-react-layout/dist/npm/drawer/interfaces/DrawerSelectEvent";
import { Button } from "@progress/kendo-react-buttons";
import { Link } from "react-router-dom";

const useStyles = createUseStyles({
  appBar: {
    marginBottom: 10,
    backgroundColor: "#232323",
  },
  appBarTitle: {
    composes: ["k-h1", "k-color-light"],
    margin: 0,
  },
  appBarLogo: {
    width: 110,
  },
  appBarButton: {
    composes: ["k-text-light"],
  },
  icon: {
    fontSize: 28,
    float: "right",
  },
  link: {
    textDecoration: "inherit",
    color: "inherit",
    width: "100%",
  },
  drawerText: {
    composes: ["k-item-text"],
    lineHeight: 2,
  },
});

const Header = (): JSX.Element => {
  const classes = useStyles();

  const items = [
    {
      id: 1,
      text: "Alle nummers",
      svgIcon: caretDoubleAltRightIcon,
      selected: true,
      route: "/",
    },
    {
      id: 2,
      text: "Mijn Playlist",
      svgIcon: caretDoubleAltRightIcon,
      route: "/playlist",
    },
  ];

  const [expanded, setExpanded] = React.useState<boolean>(false);
  const [selectedId, setSelectedId] = React.useState<number>(1);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  const onSelect = (e: DrawerSelectEvent) => {
    setSelectedId(e.itemTarget.props.id);
    handleClick();
  };

  const CustomItem = (props: DrawerItemProps) => {
    const { svgIcon, ...others } = props;
    return (
      <DrawerItem {...others}>
        <Link to={props.route} className={classes.link}>
          <span className={classes.drawerText}>{props.text}</span>
          <SvgIcon icon={svgIcon} size="medium" className={classes.icon} />
        </Link>
      </DrawerItem>
    );
  };

  return (
    <>
      <AppBar themeColor="inherit" className={classes.appBar}>
        <AppBarSection>
          <Button look="clear" onClick={handleClick}>
            <SvgIcon
              icon={gridIcon}
              size="medium"
              className={classes.appBarButton}
            />
          </Button>
          <Drawer
            mini={false}
            mode="overlay"
            expanded={expanded}
            items={items.map((item) => ({
              ...item,
              selected: item.id === selectedId,
            }))}
            item={CustomItem}
            onSelect={onSelect}
            onOverlayClick={handleClick}
          />
        </AppBarSection>
        <AppBarSpacer />
        <AppBarSection className={classes.appBarTitle}>
          <span>Rockstars Music Library</span>
        </AppBarSection>
        <AppBarSpacer />
        <AppBarSection>
          <img src={logo} className={classes.appBarLogo} />
        </AppBarSection>
      </AppBar>
    </>
  );
};

export default Header;
