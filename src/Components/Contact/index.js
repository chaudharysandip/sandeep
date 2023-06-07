import React from 'react';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import PermPhoneMsgOutlinedIcon from '@mui/icons-material/PermPhoneMsgOutlined';
import {Container, Grid, Typography} from '@mui/material';
import {makeStyles} from '@mui/styles';
import ContactForm5 from './Contact-form';
import {ToastContainer} from 'react-toastify';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .contact': {
			'& .MuiGrid-root': {
				'& .MuiGrid-item': {
					width: '100%',
					'& .contact-form-holder': {
						background: 'rgb(0 0 0 / 20%)',
						border: '1px solid rgba(255,255,255,.25)',
						padding: theme.spacing(10, 6),
						borderRadius: "15px",
						'& .contact-title': {
							fontSize: theme.typography.h1,
							fontWeight: theme.typography.fontWeightBold,
							color: '#fff',
						},
						'& .description': {
							color: '#fff',
							lineHeight: 1.7,
							fontWeight: theme.typography.fontWeightMedium,
						},
					},
					'& .contact-address-holder': {
						marginBottom: theme.spacing(6),
						'& li': {
							display: 'flex',
							alignItems: 'center',
							gap: '10px',
							'&:not(:last-child)': {
								marginBottom: theme.spacing(5),
							},
							'&:nth-child(2)': {
								'& .icon-holder': {
									background:
										'linear-gradient(to right, #ff0844 0%, #ffb199 100%)',
								},
							},
							'&:nth-child(3)': {
								'& .icon-holder': {
									background:
										'linear-gradient(to left, #43e97b 0%, #38f9d7 100%)',
								},
							},
							'& .icon-holder': {
								background:
									'radial-gradient(circle 248px at center, #16d9e3 0%, #30c7ec 47%, #46aef7 100%)',
								height: '60px',
								width: '60px',
								borderRadius: '50%',
								display: 'grid',
								placeItems: 'center',
								color: '#fff',
							},
							'& .divider': {
								'& .contact-info-title': {
									fontSize: theme.typography.h4,
									color: '#cfcfcf',
									fontWeight: theme.typography.fontWeightMedium,
								},
								'& a': {
									color: '#fff',
									fontWeight: theme.typography.fontWeightMedium,
									fontSize: theme.typography.h3,
								},
							},
						},
					},
					"& iframe":{
						borderRadius: "15px",
					},
				},
			},
		},
		'@media(max-width: 600px)': {
			paddingBottom: theme.spacing(10),
		},
		'@media(min-width: 768px)': {
			paddingBottom: theme.spacing(10),
		},
		'@media(min-width: 992px)': {
			paddingBottom: theme.spacing(20),
		},
	},
}));

const profile ={
	address: "Kathmandu, Nepal",
	email: "devs.sandeepchy@gmail.com",
	phone: "9860509044",
}
const Contact = () => {
	const classes = useStyles();

	return (
		<section className={classes.root} id="contact-us">
			<Container className="contact">
				<Grid container spacing={6}>
					<Grid item lg={7} md={12} sm={12}>
						<Typography component="div" className="contact-form-holder">
							<Typography variant="h1" className="contact-title" mb={2}>
								Let's Talk?
							</Typography>
							<Typography className="description" mb={6}>
								It's all about the humans behind a brand and those experiencing
								it, br we're right there. In the middle performance quick.
							</Typography>
							<ContactForm5 />
						</Typography>
					</Grid>
					<Grid item lg={5} md={12} sm={12}>
						<Typography component="ul" className="contact-address-holder">
							<li>
								<Typography component="div" className="icon-holder">
									<MailOutlineRoundedIcon />
								</Typography>
								<Typography component="div" className="divider">
									<Typography variant="span" display="block" className="contact-info-title">
										Email
									</Typography>
									<a href={`mailto: ${profile.email}`}>{profile.email}</a>
								</Typography>
							</li>
							<li>
								<Typography component="div" className="icon-holder">
									<LocationOnOutlinedIcon />
								</Typography>
								<Typography component="div" className="divider">
									<Typography variant="span" display="block" className="contact-info-title">
										Address
									</Typography>
									<a href="#">{profile.address}</a>
								</Typography>
							</li>
							<li>
								<Typography component="div" className="icon-holder">
									<PermPhoneMsgOutlinedIcon />
								</Typography>
								<Typography component="div" className="divider">
									<Typography variant="span" display="block" className="contact-info-title">
										Phone
									</Typography>
									<a href={`tel: ${profile.phone}`}>
										{profile.phone}
									</a>
								</Typography>
							</li>
						</Typography>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14133.189959105963!2d85.33556682080668!3d27.67719887742847!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f2804a02bf%3A0x85468199859b2d8d!2sKoteshwor%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1675942740983!5m2!1sen!2snp"
							width="100%"
							height="535"
							style={{border: 0}}
							allowFullScreen
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Sandeeps Location"
						/>
					</Grid>
				</Grid>
				<ToastContainer />
			</Container>
		</section>
	);
};

export default Contact;
