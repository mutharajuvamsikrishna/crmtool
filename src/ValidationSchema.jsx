// ValidationSchema.js
import * as yup from 'yup';

export const loginSchema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup
    .string()
    .required('Password is required')
    .matches(
      /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[*&@#]).{6,}/,
   
        'Password must meet the following requirements:\n' +
          '1. Have at least one uppercase and one lowercase letter\n' +
          '2. Contain at least one numeric digit\n' +
          '3. Contain at least one special character (@, &, *, #)\n' +
          '4. Have a minimum length of 6 characters'
      ),
    
});
