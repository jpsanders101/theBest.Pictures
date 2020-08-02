import axios from 'axios';

const login = async (emailAndPassword) => {
  let response;
  try {
    response = await axios.post('/auth/login', emailAndPassword);
  } catch (err) {
    console.log(`[login] Error logging in ${err.message}`);
  }
  console.log('login successful');
};

export default login;
