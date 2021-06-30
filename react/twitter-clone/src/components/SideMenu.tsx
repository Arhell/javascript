import {Button, IconButton, Typography} from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import {useHomeStyles} from "../pages/Home";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>
}

export const SideMenu: React.FC<SideMenuProps> = ({classes}: SideMenuProps):React.ReactElement => {
  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <IconButton color="primary" className={classes.logo}>
          <TwitterIcon className={classes.logoIcon} />
        </IconButton>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListIcon} />
          <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsNoneIcon className={classes.sideMenuListIcon} />
          <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <MailOutlineIcon className={classes.sideMenuListIcon} />
          <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkBorderIcon className={classes.sideMenuListIcon} />
          <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListAltIcon className={classes.sideMenuListIcon} />
          <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PersonOutlineIcon className={classes.sideMenuListIcon} />
          <Typography variant="h6" className={classes.sideMenuListLabel}>Lorem</Typography>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button className={classes.sideMenuTweetButton} variant="contained" fullWidth color="primary">Tweet</Button>
      </li>
    </ul>
  )
}