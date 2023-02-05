import React from 'react';
import { render, screen } from '@testing-library/react-native';

import repositoryMock from '../../mocks/repository.json';
import { RepositoryItem } from '.';
import { NavigationContainer } from '@react-navigation/native';

describe('RepositoryItem Suite Tests', () => {
    test('Shoud render repository properties on screen', () => {
        const component = (
            <NavigationContainer>
                <RepositoryItem repository={repositoryMock} />
            </NavigationContainer>
        );

        const { getByTestId } = render(component);

        const repositoryName = getByTestId('repository-name');
        const repositoryOwner = getByTestId('owner-name');
        const repositoryAvatar = getByTestId('owner-avatar');
        const stargazersCount = getByTestId('repository-stars');

        expect(repositoryName).toBeOnTheScreen();
        expect(repositoryOwner).toBeOnTheScreen();
        expect(stargazersCount).toBeOnTheScreen();
        expect(repositoryAvatar).toBeOnTheScreen();
    })

    test('Given a repository it shoud render the correct values', () => {
        const component = (
            <NavigationContainer>
                <RepositoryItem repository={repositoryMock} />
            </NavigationContainer>
        );

        const { getByTestId } = render(component);

        const repositoryName = getByTestId('repository-name');
        const repositoryOwner = getByTestId('owner-name');
        const repositoryAvatar = getByTestId('owner-avatar');
        const stargazersCount = getByTestId('repository-stars');

        expect(repositoryName).toHaveTextContent(repositoryMock.name);
        expect(repositoryOwner).toHaveTextContent(repositoryMock.owner.login);
        expect(stargazersCount).toHaveTextContent(String(repositoryMock.stargazers_count));
        expect(repositoryAvatar.props.source).toEqual({
            uri: repositoryMock.owner.avatar_url
        });
    })
})