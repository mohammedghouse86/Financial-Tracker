import { render, screen, waitFor } from '@testing-library/react';
import Page from '../src/app/testing/page'; // Adjust the path as needed

// Mock the global fetch function
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve([
      { id: 1, username: 'Ghouse' },
      { id: 2, username: 'Sana' },
      { id: 3, username: 'Ayesha' },
      { id: 4, username: 'Aleena' },
    ]),
  })
);

describe('Rendering the test page that displays the Ghouse Family names', () => {
  it('should display "Ghouse" name in it', async () => {
    render(<Page />);

    // Wait for the element to appear in the document
    await waitFor(() => {
      expect(screen.getByText('Ghouse')).toBeInTheDocument();
      expect(screen.getByText('Family names')).toBeInTheDocument();
    });
  });
});


