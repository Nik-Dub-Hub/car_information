export const CLIENT_ROUTES = {
  MAIN: '/',
  STOCK: '/Stock',
} as const;

export type CLIENT_ROUTESType  = typeof CLIENT_ROUTES[keyof typeof CLIENT_ROUTES];