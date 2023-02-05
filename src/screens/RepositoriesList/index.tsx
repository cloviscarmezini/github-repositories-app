import React, { useState } from 'react';

import axios from 'axios';
import { ActivityIndicator, Alert, Dimensions, FlatList } from 'react-native';

import { RepositoryDTO } from '@dtos/RepositoryDTO';
import { RepositoryItem } from '@components/RepositoryItem';
import { Searchbar } from '@components/Searchbar';
import { EmptyRepositoriesList } from '@components/EmptyRepositoriesList';

import {
    Container,
    Header,
    Title,
    Main
} from './styles';

const REPOSITORY_ITEM_SIZE = 74;

export function RepositoriesList() {
    const [repositories, setRepositories] = useState<RepositoryDTO[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const itemsPerView = Math.round(Dimensions.get('screen').height / REPOSITORY_ITEM_SIZE + 3);

    async function fetchRepositories(page = 1) {
        try {
            setIsLoading(true);
            const response = await axios.get(`https://api.github.com/search/repositories?q=${searchTerm}&per_page=${itemsPerView}&page=${page}&order=asc`);

            return response.data.items.reverse() as RepositoryDTO[];
        } catch(error) {
            throw error;
        } finally {
            setIsLoading(false);
        }
    }

    async function getRepositories() {
        if(!searchTerm) {
            return setRepositories([]);
        }

        const repositories = await fetchRepositories().catch(error=> {
            Alert.alert('Ocorreu um erro ao buscar os repositórios')
        });

        if(repositories) {
            setRepositories(repositories)
        }
    }

    async function getRepositoriesNextPages() {
        if(isLoading) {
            return;
        }

        const newPage = page + 1;
        
        const newRepositories = await fetchRepositories(newPage).catch(error=> {
            Alert.alert('Ocorreu um erro ao buscar os repositórios')
        });

        if(newRepositories) {
            const withDuplicatesList = [...repositories, ...newRepositories];
    
            const withoutDuplicatesList = new Map(
                withDuplicatesList.map(value=> [value['id'], value])
            )
    
            setRepositories(Array.from(withoutDuplicatesList.values()))
        }

        setPage(newPage);
    }

    return (
        <Container>
            <Header>
                <Title>Repositórios</Title>

                <Searchbar
                    onChangeText={setSearchTerm}
                    onBlur={getRepositories}
                />
            </Header>
            <Main>
                <FlatList
                    keyboardShouldPersistTaps="never"
                    data={repositories}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item })=><RepositoryItem repository={item}/>}
                    showsVerticalScrollIndicator={false}
                    onEndReached={({ distanceFromEnd }) => {
                        if (distanceFromEnd < 0) return;
                        getRepositoriesNextPages()
                    }}
                    onEndReachedThreshold={0}
                    contentContainerStyle={{
                        paddingBottom: 200,
                        height: repositories.length ? 'auto' : '100%'
                    }}
                    ListFooterComponent={isLoading ? <ActivityIndicator size={24} /> : null}
                    ListEmptyComponent={<EmptyRepositoriesList />}
                />
            </Main>
        </Container>
    );
}