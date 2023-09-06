import axios from 'axios';

const verify = () => axios.get('/api/auth/verify');

const signin = async ({ email, password }: { email: string; password: string }) => axios.post('/api/auth/signin', { email, password });

const signout = async () => axios.get('/api/auth/signout');

export { verify, signin, signout };
