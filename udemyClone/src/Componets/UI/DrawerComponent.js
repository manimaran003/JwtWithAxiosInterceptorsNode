import React, { useState } from 'react'
import { Drawer, Divider, List, ListItemText,Box, ListItemIcon, ListItemButton, Collapse } from "@mui/material"
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useNavigate } from 'react-router-dom';
const DrawerComponent = () => {
    const drawerWidth = 240
    const navigate=useNavigate()
    const [open, setOpen] = useState(false)
    const [opens, setOpens] = useState(false)
    const [more, setMore] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }
    const subClick = () => {
        setOpens(!opens)
    }
    const moreClick = () => {
        setMore(!more)
    }
    return (
        <>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                        backgroundColor:"#c3fae8"
                    },
                }}
                variant="permanent"
                anchor="left"
            >
                <Box sx={{display:"flex",justifyContent:"center",p:2}}>
                    <img alt="sidebar img" style={{width:"100px"}} src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg"/>
                </Box>
                <Divider />
                <List>
                    <ListItemButton onClick={handleClick}>
                        <ListItemText>
                            components
                        </ListItemText>
                        <ListItemIcon>
                            {open ? <ExpandLess /> : <ExpandMore />}
                        </ListItemIcon>
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" >
                        <List component="div" disablePadding>
                            <Box sx={{background:"#ffc9c9"}}>
                            <ListItemButton sx={{ pl: 4 }} onClick={()=>navigate("/finalForm")}>
                                <ListItemText primary="FinalForm" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }}>
                                <ListItemText primary="styled" />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} onClick={subClick}>
                                <ListItemText primary="Forms" />
                                <ListItemIcon>
                                    {opens ? <ExpandMore /> : <ChevronRightIcon />}
                                </ListItemIcon>
                            </ListItemButton>
                            </Box>
                            <Collapse timeout="auto" in={opens}>
                                <List component="div" disablePadding>
                                    <Box sx={{background:"#868e96"}}>

                                  
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="Input" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }}>
                                        <ListItemText primary="select" />
                                    </ListItemButton>
                                    <ListItemButton sx={{ pl: 8 }} onClick={moreClick}>
                                        <ListItemText primary="More" />
                                        <ListItemIcon >
                                            {more ? <ExpandMore /> : <ChevronRightIcon />}
                                        </ListItemIcon>
                                    </ListItemButton>
                                    </Box>
                                    <Collapse timeout="auto" in={more}>
                                        <List component="div" disablePadding>
                                            <Box sx={{background:"#a5d8ff"}}>
                                            <ListItemButton sx={{ pl: 16 }}>
                                                <ListItemText primary="Label" />
                                            </ListItemButton>
                                            </Box>
                                        </List>
                                    </Collapse>
                                </List>
                            </Collapse>
                        </List>
                    </Collapse>
                    <ListItemButton>
                        <ListItemText>
                            charts
                        </ListItemText>
                        <ListItemIcon>
                        </ListItemIcon>
                    </ListItemButton>
                    <ListItemButton>
                        <ListItemText>
                            Ecommerce
                        </ListItemText>
                        <ListItemIcon>
                        </ListItemIcon>
                    </ListItemButton>
                </List>
                <Divider />
                
                
            </Drawer>
        </>
    )
}

export default DrawerComponent