import { rest } from 'msw';

export const usersHanlders = [
	rest.get('https://api.example.com/users/:userId', (req, res, ctx) => {
		const { userId } = req.params;
		if (userId === '1') {
			return res(
				ctx.json({
					name: 'John Doe',
					email: 'john.doe@example.com',
				})
			);
		}
		return res(ctx.status(404), ctx.json({ message: 'User not found' }));
	}),
];
