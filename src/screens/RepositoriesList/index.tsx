import React, { useState } from 'react';

import { ActivityIndicator, Dimensions, FlatList } from 'react-native';

import { RepositoryItem } from '@components/RepositoryItem';
import { Searchbar } from '@components/Searchbar';
import { EmptyRepositoriesList } from '@components/EmptyRepositoriesList';

import {
    Container,
    Header,
    Title,
    Main
} from './styles';

import { useDispatch, useSelector } from 'react-redux';

import { ReduxState } from '@store/index';
import { fetchRepositoriesRequest } from '@store/modules/repositories/actions';
import { RepositoriesState } from '@store/modules/repositories/types';

const REPOSITORY_ITEM_SIZE = 74;

export function RepositoriesList() {
    const { items: repositories, isLoading } = useSelector<ReduxState, RepositoriesState>(state => state.repositories)
    const [searchTerm, setSearchTerm] = useState('');
    const [page, setPage] = useState(1);

    const dispatch = useDispatch();

    const itemsPerView = Math.round(Dimensions.get('screen').height / REPOSITORY_ITEM_SIZE + 3);

    async function getRepositories(isUpdating = false) {
        if(isLoading) {
            return;
        }

        let newPage = page;

        if(isUpdating) {
            newPage += 1;
            setPage(newPage);
        }

        dispatch(fetchRepositoriesRequest({
            isUpdating,
            itemsPerView,
            page: newPage,
            searchTerm
        }))
    }

    return (
        <Container>
            <Header>
                <Title>Repositórios</Title>

                <Searchbar
                    onChangeText={setSearchTerm}
                    onBlur={() => getRepositories(false)}
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
                        getRepositories(true)
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