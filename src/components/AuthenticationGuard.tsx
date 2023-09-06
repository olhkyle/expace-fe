import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { verify } from '../api/auth';
import { Navigate } from 'react-router-dom';

interface AuthenticationGuardProps {
	redirectTo: string;
	element: React.ReactNode;
}

const AuthenticationGuard = ({ redirectTo, element }: AuthenticationGuardProps) => {
	const { isFetched, error } = useQuery({
		queryKey: ['isAuthenticated'],
		queryFn: verify,
		retry: false,
		staleTime: 1000,
	});

	// reservation 페이지에서 error가 있으면, toast 띄우기

	return isFetched ? error === null ? element : <Navigate to={redirectTo} /> : null;
};

export default AuthenticationGuard;
