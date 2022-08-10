import { render, screen } from '@tests-utils';
import userEvent from '@testing-library/user-event';
import { ToDo } from './ToDo';

describe('todo test', () => {
  it('should create task', async () => {
    const user = userEvent.setup();
    render(<ToDo />);
    const input = screen.getByPlaceholderText(/What need to be done\?/i);
    await user.type(input, 'my great task{enter}');
    const newTask = screen.getByText('my great task');
    expect(newTask).toBeInTheDocument();
  });
});
