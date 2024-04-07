  import React from "react";
  import {Container,Row,Col,Form,} from "react-bootstrap";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { faSearch } from "@fortawesome/free-solid-svg-icons";
  import profile_pic from "../../utils/images/omar.jpg";
  import "./Profil.css";
  import profile_icon from "../../utils/images/profil_icon.png";
  import ProfileCard from "../../components/ProfileCard/ProfileCard";
  import VieAssociative from "../../components/ProfileCard/VieAssociative";
  import ButtonsStudent from "../../components/ProfileCard/ButtonsStudent";

  import { styled, useTheme } from '@mui/material/styles';
  import Box from '@mui/material/Box';
  import MuiDrawer from '@mui/material/Drawer';
  import MuiAppBar from '@mui/material/AppBar';
  import Toolbar from '@mui/material/Toolbar';
  import List from '@mui/material/List';
  import CssBaseline from '@mui/material/CssBaseline';
  import Typography from '@mui/material/Typography';
  import Divider from '@mui/material/Divider';
  import IconButton from '@mui/material/IconButton';
  import MenuIcon from '@mui/icons-material/Menu';
  import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
  import ChevronRightIcon from '@mui/icons-material/ChevronRight';
  import ListItem from '@mui/material/ListItem';
  import ListItemButton from '@mui/material/ListItemButton';
  import ListItemIcon from '@mui/material/ListItemIcon';
  import ListItemText from '@mui/material/ListItemText';
  import InboxIcon from '@mui/icons-material/MoveToInbox';
  import MailIcon from '@mui/icons-material/Mail';
  import ScheduleIcon from '@mui/icons-material/Schedule';
  import GradingIcon from '@mui/icons-material/Grading';
  import { Link } from 'react-router-dom';

  const drawerWidth = 240;

  const openedMixin = (theme) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  });

  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
      width: `calc(${theme.spacing(8)} + 1px)`,
    },
  });

  const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));

  const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),
    }),
  );

  const profil_exemple = {
    img: profile_pic,
    name: "Omar kassar",
    classe: "Ing. Info. 1",
    filiere: "Cycle d'ingénieur: Génie logiciel",
    date_naissance: "12/21/2002",
    stages: ["Stage d'été: web-dev chez Vermeg"],
    date_diplome: "2026",

    TD: "2",
    email: "omarkassar202@gmail.com",
    recompenses: ["Majeur de promotion 22/23", "Vainqueur IEEE-Extreme 21/22"],
    clubs: ["IEEE", "AISEC", "PsyChess"],
    certificat: ["2CN", "TOEIC", "Azur AI certificate"],
    github: "@3omarQ",
  };
  function Profil() {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
      setOpen(true);
    };

    const handleDrawerClose = () => {
      setOpen(false);
    };
    
    return (
      <div className="profile">
      <div className="entete"></div>

      <Box sx={{ display: 'flex' }} position="relative"> 
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={open ? handleDrawerClose : handleDrawerOpen}>
            {open ? (
              theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />) : (
              <MenuIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {[
            { text: 'Boîte de réception', url: '/inbox' },
            { text: 'Envoyer un email', url: '/compose' },
            { text: 'Emploi du temps', url: '/schedule' },
            { text: 'Notes', url: '/notes' }
          ].map((item, index) => (
            <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
              <Link to={item.url} style={{ textDecoration: 'none', color: 'inherit' }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? 'initial' : 'center',
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : 'auto',
                      justifyContent: 'center',
                    }}
                  >
                    {index === 0 && <InboxIcon />} {/* Use InboxIcon for the first item */}
                    {index === 1 && <MailIcon />} {/* Use MailIcon for the second item */}
                    {index === 2 && <ScheduleIcon />}
                    {index === 3 && <GradingIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
                </ListItemButton>
              </Link>
            </ListItem>
          ))}
        </List>

        <Divider />
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <div className="container mt-4 mb-4 d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <img className="icons" src={profile_icon} />
            <h1 className="fw-semibold mt-2">Votre profil</h1>
          </div>
          
          <Form inline className="ml-auto">
            <Row>
              <Col xs="auto">
                <Form.Control
                  type="text"
                  placeholder="Rechercher un étudiant"
                  className=" mr-sm-2"
                />
              </Col>
              <Col xs="auto">
                <button className="btn btn-light">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </Col>
            </Row>
          </Form>
        </div>
        <hr />
        <Container className="py-1 pt-3">
          <Row className="justify-content-right align-items-center h-100">
            <Col lg="6" className="mb-lg-0">
              <ProfileCard data={profil_exemple} />
            </Col>
            <Col>
              <Row>
                <VieAssociative data={profil_exemple} />
              </Row>
              <Row>
                {" "}
                <ButtonsStudent></ButtonsStudent>
              </Row>
            </Col>
          </Row>
        </Container>
        <hr />
      </Box>
    </Box>

      </div>
    );
  }

  export default Profil;
