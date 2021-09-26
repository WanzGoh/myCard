import React from 'react'
import "../css/Container.css"
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';

import myAvatar from "../images/IMG_1113.JPG"


const style = {
		width: '100%',
		maxWidth: 360,
		bgcolor: 'background.paper',
}


function Container() {
	return (
		<div className="container">
			<div className="avatar"><Avatar alt="Avatar" src={myAvatar} sx={{ width: 56, height: 56 }}/></div>
			<div className="container_wapper">
			<div className="Name">Yuwan Go</div>
			<div className="jobtitle">Web Developer</div>
			<div className="list">
			<List sx={style} component="nav" aria-label="mailbox folders">
				<ListItem button href="tel:236-865-0512"><ListItemText primary="Phone" />236-865-0512</ListItem>
				<Divider />
				<ListItem button divider><ListItemText primary="Email" /><p>danielgo512@gmail.com</p></ListItem>
				<ListItem button><ListItemText primary="WebSite" /><p>www.devyuwan.ga</p></ListItem>
				<Divider light />
				<ListItem button><ListItemText primary="KaKaoTalk" /><p>danielgo512</p></ListItem>
				</List>
			</div>
			</div>
		</div>
	)
}

export default Container
