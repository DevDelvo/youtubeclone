import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// import InboxIcon from '@material-ui/icons/MoveToInbox';
// import DraftsIcon from '@material-ui/icons/Drafts';
// import StarIcon from '@material-ui/icons/Star';
// import SendIcon from '@material-ui/icons/Send';
// import MailIcon from '@material-ui/icons/Mail';
// import DeleteIcon from '@material-ui/icons/Delete';
// import ReportIcon from '@material-ui/icons/Report';

import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home'
import WhatsHotIcon from '@material-ui/icons/Whatshot'
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'
import HistoryIcon from '@material-ui/icons/History'
import WatchLaterIcon from '@material-ui/icons/WatchLater'
import ThumbUpIcon from '@material-ui/icons/ThumbUp'
import PlaylistPlayIcon from '@material-ui/icons/PlaylistPlay'
import KeyBoardArrowDown from '@material-ui/icons/KeyboardArrowDown'

import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import LocalMoviesIcon from '@material-ui/icons/LocalMovies'
import LiveTvIcon from '@material-ui/icons/LiveTv'

import SettingsIcon from '@material-ui/icons/Settings'
import FlagIcon from '@material-ui/icons/Flag'
import HelpIcon from '@material-ui/icons/Help'
import FeedbackIcon from '@material-ui/icons/Feedback'

const styles = {
  footerLinks: {
    display: 'flex',
    padding: '5px, 5px',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    marginRight: '8px',
  },
  copyright: {
    padding: '24px 27px',
    fontSize: '1rem',
    fontWeight: 500,
    lineWeight: '2.1rem',
  }
}
const playLists = [
  'Shit.',
  'Coding',
  'Knight stuff',
  'Berserk',
  'JoJo\'s Bizarre Adventure',
];

const playListDisplay = (playLists) => {
  return playLists.length <= 3 
  ? playLists.map(playList =>( 
    <ListItem button>
      <ListItemIcon>
      <PlaylistPlayIcon />
      </ListItemIcon>
      <ListItemText primary={playList} />
    </ListItem>
    ))
  : <div>
      <ListItem button>
        <ListItemIcon>
        <PlaylistPlayIcon />
        </ListItemIcon>
        <ListItemText primary={playLists[0]} />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
        <KeyBoardArrowDown />
        </ListItemIcon>
        <ListItemText primary="Show more" />
      </ListItem>
    </div>
};


const subscriptions = [
  {
    name: "freeCodeCamp",
    isLive: true,
  },
  {
    name: "Geek & Sundry",
    isLive: true,
  },
  {
    name: "ChilledCow",
    isLive: true,
  },
  {
    name: "Poki ASMR",
    isLive: false,
  },
  {
    name: "techsith",
    isLive: false,
    newVids: 2,
  },
  {
    name: "Jocko Podcast",
    isLive: false,
    newVids: 2,
  },
  {
    name: "DaymanOurSavior",
    isLive: false,
    newVids: 1,
  },
  {
    name: 'Balls',
    isLive: false,
    newVids: 3,
  },
  {
    name: 'Deeznuts',
    isLive: false,
    newVids: 1
  },
  {
    name: 'WubLubDubDub',
    isLive: false,
  }
];

const subscriptionsDisplay = (subscriptions) => {
  if (subscriptions.length > 6) {

  } else {
    
  }
};

export const youTubeListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <MenuIcon />
      </ListItemIcon>
      <ListItemText primary="YouTube" />
    </ListItem>

    <Divider />

    <ListItem button>
      <ListItemIcon>
        <HomeIcon />
      </ListItemIcon>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WhatsHotIcon />
      </ListItemIcon>
      <ListItemText primary="Trending" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <SubscriptionsIcon />
      </ListItemIcon>
      <ListItemText primary="Subscriptions" />
    </ListItem>

    <Divider />

    <ListItem button>
      <ListItemText primary="LIBRARY" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HistoryIcon />
      </ListItemIcon>
      <ListItemText primary="History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <WatchLaterIcon />
      </ListItemIcon>
      <ListItemText primary="Watch Later" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <ThumbUpIcon />
      </ListItemIcon>
      <ListItemText primary="Liked Videos" />
    </ListItem>
    {playListDisplay(playLists)}

    <Divider />
    <ListItem button>
      <ListItemText primary="SUBSCRIPTIONS" />
    </ListItem>
    {/* {subscriptionsDisplay(subscriptions)} */}
    <Divider />

    <ListItem button>
      <ListItemText primary="MORE FROM YOUTUBE" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PlayArrowIcon />
      </ListItemIcon>
      <ListItemText primary="YouTube Premium" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LocalMoviesIcon />
      </ListItemIcon>
      <ListItemText primary="Movies & Shows" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <LiveTvIcon/>
      </ListItemIcon>
      <ListItemText primary="Live" />
    </ListItem>
    
    <Divider />

    <ListItem button>
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Settings" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FlagIcon />
      </ListItemIcon>
      <ListItemText primary="Report History" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <HelpIcon />
      </ListItemIcon>
      <ListItemText primary="Help" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <FeedbackIcon />
      </ListItemIcon>
      <ListItemText primary="Send feedback" />
    </ListItem>

    <Divider />
    <div>
      <div style={styles.footerLinks}>
        <a>About</a>
        <a>Press</a>
        <a>Copyright</a>
        <a>Developers</a>
        <a>+YouTube</a>
      </div>
      <div style={styles.footerLinks}>
        <a>Terms</a>
        <a>Privacy</a>
        <a>Policy & Safety</a>
        <a>Test new features</a>
      </div>
    </div>
    <Divider />

    <div className='copyright' style={styles.copyright}>© 2018 YouTube, LLC</div>
  </div>
)