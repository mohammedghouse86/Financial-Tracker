import '@testing-library/jest-dom';
setupFiles: ['<rootDir>/setup-jest.js']
/*
import {server} from './src/mocks/server';
import { afterAll, afterEach, beforeAll } from 'node:test';

before(()=>{
    server.listen();
});

afterEach(()=>{
    server.resetHandlers();
});

after(()=>{
    server.close();
});

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
*/