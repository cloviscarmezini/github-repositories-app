import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { RepositoryDTO } from '../../dtos/RepositoryDTO';

import {
    Container,
    Main,
    Title,
    OwnerName,
    Avatar,
    Stars,
    Line
} from './styles';
import { NavigatorRoutesProps } from 'src/routes';

interface RepositoryItemProps {
    repository: RepositoryDTO
}

export function RepositoryItem({ repository }: RepositoryItemProps) {
    const navigation = useNavigation<NavigatorRoutesProps>();

    function handleNavigateToRepository() {
        navigation.navigate('repository', {
            repository
        })
    }

    return (
        <Container
            onPress={handleNavigateToRepository}
        >
            <Avatar
                testID='owner-avatar'
                source={{
                    uri: repository.owner.avatar_url
                }}
            />
            <Main>
                <Line>
                    <Title testID='repository-name'>{repository.name}</Title>
                    <Stars
                        testID='repository-stars'
                    >
                        {repository.stargazers_count} stars
                    </Stars>
                </Line>
                <Line>
                    <OwnerName testID='owner-name'>{repository.owner.login}</OwnerName>
                </Line>
            </Main>
        </Container>
    );
}