import React, { memo } from "react";
import {
  makeStyles,
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Collapse,
} from "@material-ui/core";

import {
  MoveToInbox as InboxIcon,
  Drafts as DraftsIcon,
  Send as SendIcon,
  ExpandLess,
  ExpandMore,
  StarBorder,
} from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const MobileNestedList = ({
  value = "",
  listIndex = "",
  label = "",
  listMenus = "",
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  console.log(listMenus);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      key={`${value}-${listIndex}`}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        Boolean(label) && (
          <ListSubheader component="div" id="nested-list-subheader">
            {label}
          </ListSubheader>
        )
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon>
          <SendIcon />
        </ListItemIcon>
        <ListItemText primary="Sent mail" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <DraftsIcon />
        </ListItemIcon>
        <ListItemText primary="Drafts" />
      </ListItem>
      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
};

export default memo(MobileNestedList);
