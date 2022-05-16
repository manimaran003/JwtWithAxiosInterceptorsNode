import React,{useState} from "react";
import {styled } from '@mui/material/styles'
import {Menu,Button,MenuItem}from '@mui/material'
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const CustomMenuComponent=()=>{
    const [anchorEl,setAnchorEl]=useState(null)
    const open=Boolean(anchorEl)
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
      const [anchorEls,setAnchorEls]=useState(null)
      const opens=Boolean(anchorEls)
      const handleClicks = (event) => {
          setAnchorEls(event.currentTarget);
        };
        const handleCloses= () => {
          setAnchorEls(null);
        };
    return (
        <>
        <Button
         id="basic-menu"
         aria-controls={open ? 'basic-menu' : undefined}
         aria-haspopup="true"
         aria-expanded={open ? 'true' : undefined}
         variant="contained"
         disableElevation
         onClick={handleClick}
         endIcon={<KeyboardArrowDownIcon />}
        >
            options
        </Button>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem
         id="sub-menu"
         aria-controls={opens ? 'submenu' : undefined}
         aria-haspopup="true"
         aria-expanded={opens ? 'true' : undefined}
         variant="contained"
         disableElevation
         onClick={handleClicks}
         endIcon={<KeyboardArrowDownIcon />}
        >mini bar</MenuItem>
        <Menu
        id="sub-menu"
        anchorEl={anchorEls}
        open={opens}
        onClose={handleCloses}
        MenuListProps={{
          'aria-labelledby': 'Button',
        }}
      >
        <MenuItem onClick={handleCloses}>Profile</MenuItem>
        <MenuItem onClick={handleCloses}>My account</MenuItem>
        </Menu>
        <MenuItem onClick={handleCloses}>My account</MenuItem>
      </Menu>
        </>
    )
}

export default CustomMenuComponent;
