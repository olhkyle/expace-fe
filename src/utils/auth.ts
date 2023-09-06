import { User } from '../store/useAuth';

const isLoggedIn = (user: User) => Object.values(user).every(value => value);

export { isLoggedIn };
