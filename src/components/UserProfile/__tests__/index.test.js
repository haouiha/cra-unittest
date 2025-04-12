import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import UserProfile from '../index';

describe('UserProfile', () => {
	test('should renders loading state initially', () => {
		render(<UserProfile userId="1" />);
		expect(screen.getByText(/loading.../i)).toBeInTheDocument();
	});

	test('should renders user data when API call is successful', async () => {
		render(<UserProfile userId="1" />);
		await waitFor(() => expect(screen.getByText('John Doe')).toBeInTheDocument());
		expect(screen.getByText('Email: john.doe@example.com')).toBeInTheDocument();
	});

	test('should renders error message when API call fails', async () => {
		render(<UserProfile userId="2" />);
		await waitFor(() => expect(screen.getByText(/Failed to fetch user data/i)).toBeInTheDocument());
	});
});
