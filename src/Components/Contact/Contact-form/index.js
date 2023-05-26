import React, {useState} from 'react';
import {contactSchema} from 'Services/Validation';
import {makeStyles, useTheme} from '@mui/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button, FormHelperText, Grid} from '@mui/material';
import {Formik} from 'formik';
import toast from 'Services/Notification';
import axios from 'axios';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const useStyles = makeStyles((theme) => ({
	contactFormBg: {
		position: 'relative',
		'& .contact-form-4': {
			'& .MuiGrid-root': {
				'& .MuiGrid-item': {
					width: '100%',
					'& .MuiTextField-root': {
						width: '100%',
						margin: 0,
					},
					'& .MuiOutlinedInput-root': {
						color: '#fff',
						fontFamily: "unset",
						borderRadius:"8px",
						"& .MuiInputBase-input":{
							borderRadius:"8px",
						},
						'& .MuiOutlinedInput-notchedOutline': {
							borderColor: '#fff',
						},
						'&.Mui-focused': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: theme.palette.secondary.main,
							},
						},
						'&:hover': {
							'& .MuiOutlinedInput-notchedOutline': {
								borderColor: theme.palette.secondary.main,
							},
						},
					},
					'& .MuiInputLabel-root': {
						fontFamily: 'unset',
						fontSize: theme.typography.h4,
						color: '#fff',
						fontWeight: theme.typography.fontWeightMedium,
						transition: theme.transitions.easing.easeOut,
					},
					'& .MuiInput-root': {
						fontFamily: 'unset',
						color: theme.palette.primary.main,
						letterSpacing: '0',
						transition: theme.transitions.easing.easeOut,
						'&::before': {
							borderColor:
								theme.palette.mode === 'dark'
									? '#afb1b3'
									: 'rgba(0, 0, 0, 0.42)',
							transition: theme.transitions.easing.easeOut,
						},
						'&::after': {
							borderColor: "#fff",
							transition: theme.transitions.easing.easeOut,
						},
					},
					'& .error-message': {
						margin: 0,
						color: '#ff0000',
						marginTop: '5px',
						fontSize: theme.typography.h5,
						fontWeight: theme.typography.fontWeightMedium,
					},
					'& textarea': {
						background: "#fff",
						borderColor: '#fff !important',
						color: '#fff !important',
						width: "92% !important",
						'&:focus-visible': {
							outline: '#fff auto 0px',
						},
					},
					'& textarea::placeholder': {
						color: '#fff !important',
					},
				},
			},
			'& .MuiButtonBase-root': {
				position: 'relative',
				boxShadow: 'none',
				fontSize: theme.typography.h4,
				overflow: 'hidden',
				transition: theme.transitions.easing.easeOut,
				borderRadius: '50px',
				padding: theme.spacing(3, 4),
				zIndex: 1,
				color: '#fff',
				fontWeight: theme.typography.fontWeightMedium,
				minWidth: '250px',
				'&::before': {
					content: "''",
					zIndex: -1,
					position: 'absolute',
					top: '50%',
					left: '50%',
					width: '1.1em',
					height: '1.1em',
					borderRadius: "8px",
					background: theme.palette.secondary.main,
					transformOrigin: 'center',
					transform: 'translate3d(-50%, -50%, 0) scale3d(0, 0, 0)',
					transition: 'transform .3s ease-out',
				},
				'& .fa': {
					marginLeft: '10px',
					fontSize: theme.typography.h3,
				},
				'&:hover': {
					color: '#fff',
					'&::before': {
						transform: 'translate3d(-50%, -50%, 0) scale3d(15, 15, 15)',
					},
				},
			},
		},
	},
}));

const ContactForm = () => {
	const [value, setValue] = useState('Controlled');
	const [eventTarget, setEventTarget] = useState();
	const [submittingForm, setSubmittingForm] = useState(false);
	const classes = useStyles();
	const theme = useTheme();

	const handleChange = (event) => {
		setValue(event.target.value);
	};

	let url = `https://sandeeptharu.com.np`;

	const handleSubmit = (values, {resetForm}) => {
		setSubmittingForm(true);
		axios.post(url, values).then(
			(res) => {
				setSubmittingForm(false);
				resetForm({
					name: '',
					email: '',
					phone: '',
					subject: '',
					message: '',
					formType: 'contact',
				});
				toast.showSuccess(res?.data?.message);
			},
			(error) => {
				toast.showError('Sent Failed');
				setSubmittingForm(false);
			}
		);
	};

	return (
		<>
			<section className={`${classes.contactFormBg}`}>
				<div className="contact-form-4">
					{submittingForm ? (
						<div
							className="full-page-loader d-flex justify-content-center align-items-center"
							style={{height: '70vh'}}
						>
							Loading...
						</div>
					) : (
						<Formik
							initialValues={{
								name: '',
								email: '',
								phone: '',
								subject: '',
								message: '',
								formType: 'contact',
							}}
							validationSchema={contactSchema}
							onSubmit={handleSubmit}
						>
							{({
								  values,
								  errors,
								  touched,
								  handleChange,
								  handleBlur,
								  handleSubmit,
								  isSubmitting,
								  /* and other goodies */
							  }) => (
								<>
									<Box
										component="form"
										noValidate
										onSubmit={(event) => {
											handleSubmit(event);
											setEventTarget(event.target);
										}}
										autoComplete="off"
									>
										<Grid container spacing={5} sx={{mb: 5}}>
											<Grid item lg={12} md={12} sm={12}>
												<TextField
													id="standard-textarea"
													label="Full Name"
													name="name"
													type="text"
													placeholder="Enter Name"
													variant="outlined"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.name}
													fullWidth
													error={errors.name && touched.name}
												/>
												{errors.name && touched.name ? (
													<div className="error-message">{errors.name}</div>
												) : null}
											</Grid>
											<Grid item lg={6} md={12} sm={12}>
												<TextField
													id="standard-email"
													label="Email"
													name="email"
													type="email"
													placeholder="Enter Email"
													variant="outlined"
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.email}
													error={errors.email && touched.email}
												/>
												{errors.email && touched.email ? (
													<div className="error-message">{errors.email}</div>
												) : null}
											</Grid>
											<Grid item lg={6} md={12} sm={12}>
												<TextField
													id="standard-phone"
													label="Phone"
													name="phone"
													placeholder="Enter Phone Number"
													type="text"
													variant="outlined"
													fullWidth
													onChange={handleChange}
													onBlur={handleBlur}
													value={values.phone}
													error={errors.phone && touched.phone}
												/>
												{errors.phone && touched.phone ? (
													<div className="error-message">{errors.phone}</div>
												) : null}
											</Grid>
											<Grid item lg={12} md={12} sm={12}>
												<TextareaAutosize
													aria-label="empty textarea"
													label="Address"
													placeholder="Enter Message"
													variant="outlined"
													style={{
														width: '100%',
														height: '200px',
														borderRadius: '15px',
														padding: 20,
														color: theme.palette.text.formLabelColor,
														background: 'transparent',
														borderColor:
															touched.message && Boolean(errors.message)
																? '#d32f2f'
																: theme.palette.text.formLabelColor,
													}}
													type="text"
													name="message"
													value={values.message}
													onChange={handleChange}
													onBlur={handleBlur}
													error={touched.message && Boolean(errors.message)}
												/>
												{errors.message && touched.message ? (
													<FormHelperText
														sx={{
															color: '#d32f2f',
															fontWeight: theme.typography.fontWeightSemiBold,
															fontSize: theme.typography.h5.fontSize,
														}}
													>
														{errors.message}
													</FormHelperText>
												) : null}
											</Grid>
										</Grid>
										<Button variant="contained" color="primary" type="submit">
											Send Message <i className="fa fa-paper-plane-o" />
										</Button>
									</Box>
								</>
							)}
						</Formik>
					)}
				</div>
			</section>
		</>
	);
};

export default ContactForm;
