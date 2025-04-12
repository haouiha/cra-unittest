import { setupServer } from 'msw/node';
import { usersHanlders } from './handlers';

const handlers = [...usersHanlders];

export const server = setupServer(...handlers);
