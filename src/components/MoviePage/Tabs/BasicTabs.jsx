import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import NoMeetingRoomIcon from '@mui/icons-material/NoMeetingRoom';

import styles from '../MoviePage.module.scss';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} className={styles.tabs} onChange={handleChange} aria-label="basic tabs example">
          <Tab icon={<MeetingRoomIcon color="secondary" disabled fontSize='large'/>} label="ОТКРЫТАЯ" {...a11yProps(0)}/>
          <Tab icon={<NoMeetingRoomIcon color="secondary" fontSize='large'/>} label="ЗАКРЫТАЯ" {...a11yProps(1)}/>
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} className={styles['room-info']}>
        <p>В открытую комнату может зайти любой пользователь</p>
      </TabPanel>
      <TabPanel value={value} index={1} className={styles['room-info']}>
        <p>В закрытую комнату могут войти только пользователи по ссылке на комнату</p>
      </TabPanel>

    </Box>
  );
}