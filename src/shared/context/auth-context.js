import { createContext } from 'react';

export const AuthContext = createContext({
  isLoggedIn: false,
  userId: null,
  products: null,
  productsCart: null,
  categories: null,
  updateProducts: () => {},
  updateCategories: () => {},
  login: () => {},
  logout: () => {}
});
// TODO: seperate contexts
