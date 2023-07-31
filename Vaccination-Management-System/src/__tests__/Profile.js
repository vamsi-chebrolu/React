import { useNavigate } from 'react-router-dom';
import { Profile } from '../Profile';

test('navigates to update profile page on edit icon click', () => {
  // Create a mock navigate function
  const mockNavigate = jest.fn();
  jest.spyOn(require('react-router-dom'), 'useNavigate').mockReturnValue(mockNavigate);

  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );

  // Click the edit icon
  const editIcon = screen.getByTestId('edit-icon');
  userEvent.click(editIcon);

  // Ensure that the user is navigated to the updateProfile page
  expect(mockNavigate).toHaveBeenCalledWith('/updateProfile');
});