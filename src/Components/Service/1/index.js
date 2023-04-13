import React from 'react';
import {Link} from 'react-router-dom';
import Image from 'Assets/Images/sandeep.png';
import {makeStyles} from '@mui/styles';
import {Container, Grid} from '@mui/material';
import Typography from '@mui/material/Typography';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .service-block-22': {
			'& .text-holder': {
				position: 'relative',
				'& .sub-title': {
					textTransform: 'uppercase',
					fontSize: theme.typography.h3.fontSize,
					fontWeight: theme.typography.fontWeightSemiBold,
					background:
						'linear-gradient(-225deg, #A445B2 0%, #D41872 52%, #FF0066 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
				},
				'& .title': {
					color: '#fff',
					fontSize: theme.typography.customFont2,
					fontWeight: theme.typography.fontWeightSemiBold,
				},
			},
			'& .MuiGrid-root': {
				'& .MuiGrid-item': {
					width: '100%',
					'& .service-block-list': {
						background: 'rgba(255,255,255,.25)',
						border: '1px solid rgba( 255, 255, 255, 0.18 )',
						padding: theme.spacing(2),
						borderRadius: '15px',
						'& .img-holder': {
							height: '300px',
							width: '100%',
							position: 'relative',
							overflow: 'hidden',
							borderRadius: '15px',
							'& .bg-stretch': {
								height: '100%',
								width: '100%',
								transition: theme.transitions.easing.easeOut,
								backgroundPosition: 'top center',
								transform: 'scale(1.2)',
							},
							'& .content-holder': {
								position: 'absolute',
								bottom: '-71px',
								left: 0,
								opacity: 0,
								visibility: 'hidden',
								width: '100%',
								background: theme.palette.primary.main,
								padding: theme.spacing(2),
								transition: theme.transitions.easing.easeOut,
								'& .content-divider': {
									'& .sub-title': {
										color: '#fff',
										fontWeight: theme.typography.fontWeightSemiBold,
									},
									'& .service-title': {
										'& a': {
											color: '#fff',
											fontSize: theme.typography.h3.fontSize,
											fontWeight: theme.typography.fontWeightBold,
										},
									},
								},
								'& .read-more': {
									height: '30px',
									width: '30px',
									borderRadius: '50%',
									background: '#fff',
									display: 'flex',
									alignItems: 'center',
									justifyContent: 'center',
									color: '#434343',
									'& .MuiSvgIcon-root': {
										fontSize: theme.typography.h3.fontSize,
									},
								},
							},
							'&:hover': {
								'& .bg-stretch': {
									transform: 'scale(1)',
								},
								'& .content-holder': {
									opacity: 1,
									visibility: 'visible',
									bottom: 0,
								},
							},
						},
					},
				},
			},
		},
		'@media(max-width: 600px)': {
			padding: theme.spacing(0, 0, 20),
		},
		'@media(min-width: 768px)': {
			padding: theme.spacing(0, 0, 20),
		},
		'@media(min-width: 992px)': {
			padding: theme.spacing(0, 0, 20),
		},
	},
}));
const event = [
	{
		title: "Recent Work Expertise",
		image: Image,
		externalLink: "",
	},
];

const ServiceBlock = () => {
	const classes = useStyles();

	return event && event.length ? (
		<section className={classes.root}>
			<Container className="service-block-22">
				<Typography
					component="div"
					className="text-holder"
					align="left"
					mb={10}
				>
					<Typography variant="h6" className="sub-title">
						Recent Work Expertise
					</Typography>
					<Typography variant="h1" className="title">
						Look at my portfolio and <br/> give me your feedback
					</Typography>
				</Typography>
				<Grid container spacing={6}>
					{event.map((item, i) => {
						return (
							<Grid item lg={4} md={12} sm={12} key={i + '__'}>
								<Typography component="div" className="service-block-list">
									<Typography component="div" className="img-holder">
										<Typography
											component="div"
											className="bg-stretch background-image"
											style={{
												backgroundImage: `url('${item.image}')`,
											}}
										/>
										<Typography
											component="div"
											className="content-holder"
											display="flex"
											alignItems="center"
											justifyContent="space-between"
										>
											<Typography component="div" className="content-divider">
												<Typography component="div" className="sub-title">
													{item.summary}
												</Typography>
												<Typography component="div" className="service-title">
													{item.externalLink ? (
														<a
															href={item.externalLink}
															target="_blank"
															rel="noreferrer"
														>
															{item.title}
														</a>
													) : (
														<Link to="#">{item.title}</Link>
													)}
												</Typography>
											</Typography>
											{item.externalLink ? (
												<a
													href={item.externalLink}
													className="read-more"
													target="_blank"
													rel="noreferrer"
												>
													<ArrowForwardRoundedIcon/>
												</a>
											) : (
												<Typography component="div" className="read-more">
													<ArrowForwardRoundedIcon/>
												</Typography>
											)}
										</Typography>
									</Typography>
								</Typography>
							</Grid>
						);
					})}
				</Grid>
			</Container>
		</section>
	) : null;
};

export default ServiceBlock;