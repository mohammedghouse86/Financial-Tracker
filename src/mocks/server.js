// src/mocks/server.js
import { setupServer } from 'msw/node';
import { handlers } from './handlers'; // Ensure this path is correct

export const server = setupServer(...handlers);
