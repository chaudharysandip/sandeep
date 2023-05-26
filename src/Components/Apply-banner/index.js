import React from "react";
import {makeStyles} from "@mui/styles";
import {Box, Button, Container, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
	root: {
		"& .apply-banner": {
			"& .text-holder": {
				background: "linear-gradient(to left, #434343 0%, #000 100%)",
				padding: theme.spacing(10),
				borderRadius: "15px",
				position: "relative",
				overflow: "hidden",
				"& .status":{
					position: "absolute",
					top: "17px",
					background: "linear-gradient(to right, #43e97b 0%, #38f9d7 100%)",
					padding: theme.spacing(1),
					color: "#fff",
					width: "100%",
					fontWeight: theme.typography.fontWeightMedium,
					fontSize: theme.typography.h3,
					transform: "rotate(-45deg)",
				},
				"& .title": {
					color: "#fff",
					fontWeight: theme.typography.fontWeightBold,
					margin: "0 auto",
				},
				"& .MuiButtonBase-root": {
					borderRadius: "30px",
					padding: theme.spacing(3, 4),
					minWidth: "200px",
					boxShadow: "none",
					fontWeight: theme.typography.fontWeightMedium,
					fontSize: theme.typography.h3,
					transition: theme.transitions.easing.easeOut,
					color: "#fff",
					marginTop: theme.spacing(6),
					"&:hover": {
						background: theme.palette.secondary.main,
					},
				},
			},
		},
		"@media(max-width: 600px)":{
			paddingBottom: theme.spacing(10),
			"& .apply-banner": {
				"& .text-holder": {
					"& .status":{
						left: "-160px",
					},
					"& .title":{
						fontSize: theme.typography.h1,
					},
				},
			},
		},
		"@media(min-width: 768px)":{
			paddingBottom: theme.spacing(10),
			"& .apply-banner": {
				"& .text-holder": {
					"& .status":{
						left: "-330px",
					},
					"& .title":{
						fontSize: theme.typography.customFont2,
					},
				},
			},
		},
		"@media(min-width: 992px)":{
			paddingBottom: theme.spacing(20),
			"& .apply-banner": {
				"& .text-holder": {
					"& .status":{
						left: "-520px",
					},
					"& .title":{
						fontSize: theme.typography.customFont3,
						width: "60%",
						lineHeight: 1,
					},
				},
			},
		},
		"@media(min-width: 1920px)":{
			"& .apply-banner": {
				"& .text-holder": {
					"& .status":{
						left: "-545px",
					},
				},
			},
		},
	},
}));

const ApplyBanner = () => {
	const classes = useStyles();

	return (
		<section className={classes.root}>
			<Container className="apply-banner">
				<Box component="div" className="text-holder" align="center">
					<Typography component="div" className="status">
						<Typography variant="span">
							Available
						</Typography>
					</Typography>
					<Typography variant="h1" className="title">
						I'm Available For
						Freelance Work
					</Typography>
					<Button variant="contained" component="a" href="#contact">
						Hire Me Now
					</Button>
				</Box>
			</Container>
		</section>
	)
}

export default ApplyBanner;