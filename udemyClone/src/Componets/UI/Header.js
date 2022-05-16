import React from 'react'
import AccountCircle from '@mui/icons-material/AccountCircle';
import { styled } from '@mui/material/styles';
import LanguageIcon from '@mui/icons-material/Language';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from 'react-router-dom';
import './Header.css'
import $ from 'jquery'
import { Box, Typography, InputBase, FormControl, InputAdornment, Button } from '@mui/material'
// $(function () {
//     var $links = $('.dropdown-submenu span.test').on("click", function (e) {
//         var submenu = $(this).next();
//         console.log("inside", submenu)
//         $subs.not(submenu).hide();
//         submenu.toggle();
//         e.stopPropagation();
//         e.preventDefault();
//     });
//     var $subs = $links.next();
//     console.log("hai ouside", $subs)

//     $('.dropdown-toggle').on('click', function (e) {
//         $('.dropdown-submenu .dropdown-menu').hide();
//     });
// })

$(function () {
    // ------------------------------------------------------- //
    // Multi Level dropdowns
    // ------------------------------------------------------ //
    $("ul.dropdown-menu [data-toggle='dropdown']").on("click", function (event) {
        console.log("clicked")
        event.preventDefault();
        event.stopPropagation();

        $(this).siblings().toggleClass("show");
        
        // $(".outside").on("click", function (e) {
        //     console.log("outside clicked")
        //     $('.dropdown-submenu .show').removeClass("show")
        //     $("ul.dropdown-menu .show").removeClass("show")
        // })
        $(this).parents('li.nav-item.dropdown.show').on('hide.bs.dropdown', function (e) {
            console.log("hai parent")
            $('.dropdown-submenu .show').removeClass("show")
        });
    });
});

const BootstrapInput = styled(InputBase)(() => ({
    '& .MuiInputBase-input': {

        padding: "10px"
        //   transition: theme.transitions.create([
        //     'border-color',
        //     'background-color',
        //     'box-shadow',
        //   ]),
        // Use the system font instead of the default Roboto font.
        //   fontFamily: [
        //     '-apple-system',
        //     'BlinkMacSystemFont',
        //     '"Segoe UI"',
        //     'Roboto',
        //     '"Helvetica Neue"',
        //     'Arial',
        //     'sans-serif',
        //     '"Apple Color Emoji"',
        //     '"Segoe UI Emoji"',
        //     '"Segoe UI Symbol"',
        //   ].join(','),
        //   '&:focus': {
        //     boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        //     borderColor: theme.palette.primary.main,
        //   },
    },
}));

const Header = () => {
    let navigate = useNavigate()
    return (
        <>
            <div class="outside">
                {/* <AppBar position="fixed">
                <Toolbar> */}
                <Box sx={{ pl: 1, pr: 1, pt: 1, pb: 1 }}>
                    <Box sx={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <Box sx={{ display: "flex", justifyContent: "space-between" }}>

                        </Box>
                        <Box>
                            <Box style={{
                                height: "2.8rem",
                                border: "1px solid /1c1d1f",
                                borderRadius: "9999px",
                                padding: "5px",
                                backgroundColor: "/f7f9fa",
                                margin: "0 1.2rem"
                            }}>
                                <FormControl variant="standard">
                                    <BootstrapInput id="bootstrap-input" startAdornment={
                                        <InputAdornment position="start">
                                            <AccountCircle />
                                        </InputAdornment>
                                    } placeholder="search for anything" />
                                </FormControl>
                            </Box>
                        </Box>
                        <Box>
                            <Typography>Udemy Business</Typography>
                        </Box>
                        <Box>
                            <Typography>Teach on udemy</Typography>
                        </Box>
                        <Box>
                            <AddShoppingCartIcon />
                        </Box>
                        <Box>
                            <Box sx={{ border: "1px solid black", padding: "5px" }}>
                                <Button onClick={() => { navigate("/login") }} sx={{ width: "100%", background: "/fff" }} color="success">Login</Button>
                            </Box>
                        </Box>
                        <Box sx={{ border: "1px solid black", padding: "5px" }}>
                            <Button onClick={() => { navigate("/signup") }} sx={{ width: "100%", background: "/fff" }} color="success">signup</Button>
                        </Box>
                        <Box>

                            <Button>signup</Button>

                        </Box>
                        <Box>
                            <LanguageIcon />
                        </Box>
                        <div>
                            <ul className="main">
                            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-expanded="false"> Dropdown </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li className="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="http://google.com">Google</a>
                        <ul className="dropdown-menu menu1">
                            <li><a className="dropdown-item" href="/">Submenu</a></li>
                            <li><a className="dropdown-item" href="/">Submenu0</a></li>
                            <li className="dropdown-submenu"><a class="dropdown-item dropdown-toggle" href="/">Submenu 1</a>
                                <ul className="dropdown-menu menu3">
                                    <li><a className="dropdown-item" href="/">Subsubmenu1</a></li>
                                    <li><a className="dropdown-item" href="/">Subsubmenu1</a></li>
                                </ul>
                            </li>
                            <li class="dropdown-submenu"><a className="dropdown-item dropdown-toggle" href="/">Submenu 2</a>
                                <ul class="dropdown-menu menu2">
                                    <li><a className="dropdown-item" href="/">Subsubmenu2</a></li>
                                    <li><a className="dropdown-item" href="/">Subsubmenu2</a></li>
                                </ul>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
                            </ul>
                        </div>

                        
                    </Box>
                </Box>
                {/* </Toolbar>
            </AppBar> */}
            </div>
        </>
    )
}

export default Header


