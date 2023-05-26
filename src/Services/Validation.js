import * as yup from 'yup';

let contactSchema = yup.object().shape({
	name: yup.string().required('Please enter your name'),
	email: yup.string().email('Enter Valid Email').required('Please enter your email'),
	phone: yup.number().integer().required('Please enter your phone number'),
	subject: yup.string().required('Please enter your subject'),
	message: yup.string().required('Please enter your message'),
});

export {contactSchema};
