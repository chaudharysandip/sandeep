import React, { useState } from "react";
import Image from "Assets/Images/css.svg";
import Image2 from "Assets/Images/react-js-img.svg";
import Image3 from "Assets/Images/html.svg";
import { makeStyles } from "@mui/styles";
import { Container, Grid } from "@mui/material";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .service-block-2": {
      "& .tab-holder": {
        border: "1px solid rgb(255,255,255,.25)",
        background: "rgb(0 0 0 / 20%)",
        borderRadius: "15px",
        "& .app-bar": {
          "& .MuiTabs-root": {
            "& .MuiTabs-scroller": {
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .MuiTabs-flexContainer": {
                "& .MuiButtonBase-root": {
                  borderRadius: "30px",
                  color: theme.palette.text.light,
                  textTransform: "uppercase",
                  fontWeight: theme.typography.fontWeightBold,
                  minWidth: "300px",
                  padding: theme.spacing(4, 3),
                  transition: theme.transitions.easing.easeOut,
                  "&.Mui-selected": {
                    color: "#fff",
                    background: theme.palette.secondary.main,
                  },
                },
              },
            },
          },
        },
        "& .MuiBox-root": {
          "& .tab-content": {
            "& .biography": {
              transition: theme.transitions.easing.easeOut,
              "& .MuiGrid-root": {
                "& .MuiGrid-item": {
                  width: "100%",
                  "& ul": {
                    "& li": {
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      color: "#fff",
                      "&:not(:last-child)": {
                        borderBottom: "1px solid rgba(255,255,255,.25)",
                        marginBottom: theme.spacing(5),
                        paddingBottom: theme.spacing(5),
                      },
                      "& h5": {
                        fontSize: theme.typography.h3,
                        fontWeight: theme.typography.fontWeightMedium,
                      },
                      "& h6": {
                        fontSize: theme.typography.h4,
                        fontWeight: theme.typography.fontWeightMedium,
                        color: "#cfcfcf",
                      },
                      "& a": {
                        fontSize: theme.typography.h4,
                        fontWeight: theme.typography.fontWeightMedium,
                        color: "#cfcfcf",
                        transition: theme.transitions.easing.easeOut,
                        "&:hover": {
                          color: theme.palette.ternary.main,
                        },
                      },
                    },
                  },
                },
              },
            },
            "& .skills": {
              transition: theme.transitions.easing.easeOut,
              "& ul": {
                "& li": {
                  "&:not(:last-child)": {
                    marginBottom: theme.spacing(6),
                  },
                  "&:nth-child(2)": {
                    "& .MuiGrid-root": {
                      "& .MuiGrid-item": {
                        width: "100%",
                        "& .icon-holder": {
                          background: "#118ab2",
                        },
                        "& .skill-progress-bar": {
                          "& .bars": {
                            "& .bars-item": {
                              animation: `$slideRight2 .7s`,
                            },
                          },
                        },
                      },
                    },
                  },
                  "&:nth-child(3)": {
                    "& .MuiGrid-root": {
                      "& .MuiGrid-item": {
                        "& .icon-holder": {
                          background: "#06d6a0",
                        },
                        "& .skill-progress-bar": {
                          "& .bars": {
                            "& .bars-item": {
                              animation: `$slideRight3 .7s`,
                            },
                          },
                        },
                      },
                    },
                  },
                  "& .MuiGrid-root": {
                    "& .MuiGrid-item": {
                      width: "100%",
                      "& .icon-holder": {
                        background: "#ef476f",
                        height: "70px",
                        width: "70px",
                        borderRadius: "50%",
                        display: "grid",
                        placeItems: "center",
                        "& img": {
                          maxHeight: "40px",
                        },
                      },
                      "& .skill-title": {
                        fontSize: theme.typography.h2,
                        fontWeight: theme.typography.fontWeightBold,
                        color: "#fff",
                      },
                      "& .skill-progress-bar": {
                        "& .bars": {
                          height: "10px",
                          borderRadius: "15px",
                          width: "100%",
                          background: "#fff",
                          position: "relative",
                          overflow: "hidden",
                          "& .bars-item": {
                            position: "absolute",
                            top: 0,
                            left: "0",
                            height: "100%",
                            background: "red",
                            transition: theme.transitions.easing.easeOut,
                            animation: `$slideRight .7s`,
                          },
                        },
                        "& .value": {
                          fontSize: theme.typography.h2,
                          fontWeight: theme.typography.fontWeightBold,
                          color: "#fff",
                        },
                      },
                    },
                  },
                },
              },
            },
            "& .education": {
              transition: theme.transitions.easing.easeOut,
              "& ul": {
                gridTemplateColumns: "1fr 1fr",
                gridColumGap: "60px",
                gridRowGap: "40px",
                "& li": {
                  borderLeft: "1px solid #00bbf9",
                  paddingLeft: "30px",
                  position: "relative",
                  "&::before": {
                    content: "''",
                    position: "absolute",
                    left: "-10px",
                    top: 0,
                    height: "20px",
                    width: "20px",
                    borderRadius: "50%",
                    background: "#00bbf9",
                  },
                  "&::after": {
                    content: "''",
                    position: "absolute",
                    left: "-5px",
                    top: "5px",
                    height: "10px",
                    width: "10px",
                    borderRadius: "50%",
                    background: "#90e0ef",
                  },
                  "& .education-title": {
                    fontSize: theme.typography.h2,
                    fontWeight: theme.typography.fontWeightBold,
                    color: "#fff",
                  },
                  "& .education-sub-title": {
                    fontSize: theme.typography.h4,
                    fontWeight: theme.typography.fontWeightSemiBold,
                    color: "#fff",
                  },
                  "& .education-year": {
                    fontSize: theme.typography.h5,
                    fontWeight: theme.typography.fontWeightMedium,
                    background: "rgba(255,255,255,.25)",
                    border: "1px solid rgba(255,255,255,.25)",
                    padding: theme.spacing(1, 4),
                    color: "#fff",
                    display: "inline-block",
                    borderRadius: "5px",
                  },
                  "& .education-description": {
                    lineHeight: 2,
                    fontWeight: theme.typography.fontWeightMedium,
                    color: "#fff",
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(max-width: 600px)": {
      padding: theme.spacing("41px", 0, 0),
      "& .service-block-2": {
        "& .tab-holder": {
          paddingTop: theme.spacing(6),
          "& .app-bar": {
            "& .MuiTabs-root": {
              "& .MuiTabs-scroller": {
                "& .MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                  "& .MuiButtonBase-root": {
                    border: "1px solid rgba(255,255,255,.25)",
                    "&:not(:last-child)": {
                      marginBottom: theme.spacing(3),
                    },
                  },
                },
              },
            },
          },
          "& .MuiBox-root": {
            padding: theme.spacing(6),
            "& .tab-content": {
              "& .education": {
                "& ul": {
                  display: "block",
                  "& li": {
                    "&:not(:last-child)": {
                      marginBottom: theme.spacing(6),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(min-width: 768px)": {
      padding: theme.spacing("41px", 0, 0),
      "& .service-block-2": {
        "& .tab-holder": {
          paddingTop: theme.spacing(6),
          "& .app-bar": {
            "& .MuiTabs-root": {
              "& .MuiTabs-scroller": {
                "& .MuiTabs-flexContainer": {
                  flexWrap: "wrap",
                  "& .MuiButtonBase-root": {
                    border: "1px solid rgba(255,255,255,.25)",
                    "&:first-child": {
                      marginRight: theme.spacing(3),
                    },
                    "&:not(:last-child)": {
                      marginBottom: theme.spacing(3),
                    },
                  },
                },
              },
            },
          },
          "& .MuiBox-root": {
            padding: theme.spacing(6),
            "& .tab-content": {
              "& .education": {
                "& ul": {
                  display: "block",
                  "& li": {
                    "&:not(:last-child)": {
                      marginBottom: theme.spacing(6),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
    "@media(min-width: 992px)": {
      padding: theme.spacing("41px", 0, 20),
      "& .service-block-2": {
        "& .tab-holder": {
          paddingTop: theme.spacing(0),
          "& .app-bar": {
            marginTop: "-41px",
            "& .MuiTabs-root": {
              "& .MuiTabs-scroller": {
                "& .MuiTabs-flexContainer": {
                  background: theme.palette.primary.main,
                  border: "1px solid rgb(255,255,255,.25)",
                  borderRadius: "50px",
                  padding: theme.spacing(2),
                  flexWrap: "nowrap",
                  "& .MuiButtonBase-root": {
                    border: "none",
                    "&:first-child": {
                      marginRight: theme.spacing(0),
                    },
                    "&:not(:last-child)": {
                      marginBottom: theme.spacing(0),
                    },
                  },
                },
              },
            },
          },
          "& .MuiBox-root": {
            padding: theme.spacing(10),
            "& .tab-content": {
              "& .education": {
                "& ul": {
                  display: "grid",
                  "& li": {
                    "&:not(:last-child)": {
                      marginBottom: theme.spacing(0),
                    },
                  },
                },
              },
            },
          },
        },
      },
    },
  },
  "@keyframes slideRight": {
    from: {
      width: "0%",
    },
    to: {
      width: "90%",
    },
  },
  "@keyframes slideRight2": {
    from: {
      width: "0%",
    },
    to: {
      width: "70%",
    },
  },
  "@keyframes slideRight3": {
    from: {
      width: "0%",
    },
    to: {
      width: "90%",
    },
  },
}));
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
        <Box sx={{ p: 10 }}>
          <Typography component="div" className="tab-content">
            {children}
          </Typography>
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
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const biography = {
  name: "Sandeep Chaudhary",
  age: "23",
  email: "devs.sandeepchy@gmail.com",
  linkedin: "https://www.linkedin.com/in/sandeep-chaudhary-5349a7193/",
  birthday: "1999-09-06",
  address: "Kathmandu, Nepal",
  phone: "9860509044",
  freelance: "Available",
};

const education = [
  {
    title: "AS - Animal Science",
    subTitle: "Nepal Adarsha Secondary School",
    year: "1999 - 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur dolorum minus modi nihil " +
      "qui tenetur velit. Laborum, officia, repudiandae?",
  },
  {
    title: "AS - Science & Information",
    subTitle: "SUPER KING COLLEGE",
    year: "1999 - 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur dolorum minus modi nihil " +
      "qui tenetur velit. Laborum, officia, repudiandae?",
  },
  {
    title: "AS - Science & Information",
    subTitle: "SUPER KING COLLEGE",
    year: "1999 - 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur dolorum minus modi nihil " +
      "qui tenetur velit. Laborum, officia, repudiandae?",
  },
  {
    title: "AS - Science & Information",
    subTitle: "SUPER KING COLLEGE",
    year: "1999 - 2023",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur dolorum minus modi nihil " +
      "qui tenetur velit. Laborum, officia, repudiandae?",
  },
];
const ServiceBlock2 = () => {
  const [value, setValue] = useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <section className={classes.root} id="resume">
      <Container className="service-block-2">
        <Typography
          component="div"
          className="tab-holder"
          sx={{ width: "100%" }}
        >
          <Typography
            component="div"
            className="app-bar"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
            >
              <Tab label="Biography ---- 01" {...a11yProps(0)} />
              <Tab label="Skills ---- 02" {...a11yProps(1)} />
              <Tab label="Education ---- 03" {...a11yProps(2)} />
            </Tabs>
          </Typography>
          <TabPanel value={value} index={0}>
            <Typography component="div" className="biography">
              <Grid container spacing={15}>
                <Grid item lg={6} md={12} sm={12}>
                  <ul>
                    <li>
                      <Typography variant="h5">Name:</Typography>
                      <Typography variant="h6">{biography.name}</Typography>
                    </li>
                    <li>
                      <Typography variant="h5">Age:</Typography>
                      <Typography variant="h6">{biography.age}</Typography>
                    </li>
                    <li>
                      <Typography variant="h5">Email:</Typography>
                      <Typography variant="h6">{biography.email}</Typography>
                    </li>
                    <li>
                      <Typography variant="h5">Linkedin:</Typography>
                      <Link
                        to={biography.linkedin}
                        target="_blank"
                        rel="norefrer"
                      >
                        Let's Connect
                      </Link>
                    </li>
                  </ul>
                </Grid>
                <Grid item lg={6} md={12} sm={12}>
                  <ul>
                    <li>
                      <Typography variant="h5">Birthday:</Typography>
                      <Typography variant="h6">{biography.birthday}</Typography>
                    </li>
                    <li>
                      <Typography variant="h5">Address:</Typography>
                      <Typography variant="h6">{biography.address}</Typography>
                    </li>
                    <li>
                      <Typography variant="h5">Phone:</Typography>
                      <Typography variant="h6">{biography.phone}</Typography>
                    </li>
                    <li>
                      <Typography variant="h5">Freelance:</Typography>
                      <Typography variant="h6">
                        {biography.freelance}
                      </Typography>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={1}>
            <Typography component="div" className="skills">
              <ul>
                <li>
                  <Grid container spacing={5} alignItems="center">
                    <Grid item lg={2} md={12} sm={12}>
                      <Typography component="div" className="icon-holder">
                        <img src={Image} alt="img" />
                      </Typography>
                    </Grid>
                    <Grid item lg={5} md={12} sm={12}>
                      <Typography variant="h2" className="skill-title">
                        CSS
                      </Typography>
                    </Grid>
                    <Grid item lg={5} md={12} sm={12}>
                      <Typography
                        component="div"
                        className="skill-progress-bar"
                        display="flex"
                        alignItems="center"
                      >
                        <Typography component="div" className="bars" mr={2}>
                          <Typography
                            variant="span"
                            className="bars-item"
                            sx={{ width: "90%" }}
                          />
                        </Typography>
                        <Typography
                          component="div"
                          className="value"
                          sx={{ minWidth: "50px" }}
                        >
                          90%
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
                <li>
                  <Grid container spacing={5} alignItems="center">
                    <Grid item lg={2} md={12} sm={12}>
                      <Typography component="div" className="icon-holder">
                        <img src={Image2} alt="img" />
                      </Typography>
                    </Grid>
                    <Grid item lg={5} md={12} sm={12}>
                      <Typography variant="h6" className="skill-title">
                        React Js
                      </Typography>
                    </Grid>
                    <Grid item lg={5} md={12} sm={12}>
                      <Typography
                        component="div"
                        className="skill-progress-bar"
                        display="flex"
                        alignItems="center"
                      >
                        <Typography component="div" className="bars" mr={2}>
                          <Typography
                            variant="span"
                            className="bars-item"
                            sx={{ width: "70%" }}
                          />
                        </Typography>
                        <Typography
                          component="div"
                          className="value"
                          sx={{ minWidth: "50px" }}
                        >
                          70%
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
                <li>
                  <Grid container spacing={5} alignItems="center">
                    <Grid item lg={2} md={12} sm={12}>
                      <Typography component="div" className="icon-holder">
                        <img src={Image3} alt="img" />
                      </Typography>
                    </Grid>
                    <Grid item lg={5} md={12} sm={12}>
                      <Typography variant="h6" className="skill-title">
                        HTML
                      </Typography>
                    </Grid>
                    <Grid item lg={5} md={12} sm={12}>
                      <Typography
                        component="div"
                        className="skill-progress-bar"
                        display="flex"
                        alignItems="center"
                      >
                        <Typography component="div" className="bars" mr={2}>
                          <Typography
                            variant="span"
                            className="bars-item"
                            sx={{ width: "90%" }}
                          />
                        </Typography>
                        <Typography
                          component="div"
                          className="value"
                          sx={{ minWidth: "50px" }}
                        >
                          90%
                        </Typography>
                      </Typography>
                    </Grid>
                  </Grid>
                </li>
              </ul>
            </Typography>
          </TabPanel>
          <TabPanel value={value} index={2}>
            <div className="education">
              <ul>
                {education.map((item, i) => {
                  return (
                    <li key={i + "__"}>
                      <Typography
                        variant="h1"
                        className="education-title"
                        mb={2}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="h5"
                        className="education-sub-title"
                        mb={3}
                      >
                        {item.subTitle}
                      </Typography>
                      <Typography
                        variant="h6"
                        className="education-year"
                        mb={3}
                      >
                        {item.year}
                      </Typography>
                      <Typography className="education-description">
                        {item.description}
                      </Typography>
                    </li>
                  );
                })}
              </ul>
            </div>
          </TabPanel>
        </Typography>
      </Container>
    </section>
  );
};

export default ServiceBlock2;
