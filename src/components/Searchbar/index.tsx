import React from 'react';
import { Ionicons } from  '@expo/vector-icons';

import { Container, SearchBarInput } from './styles';
import { TextInputProps } from 'react-native';

export function Searchbar({...rest}: TextInputProps) {
    return (
        <Container>
            <Ionicons
                name="search-sharp"
                color="rgba(60, 60, 67, 0.6)"
                size={18}
            />
            <SearchBarInput
                placeholder='Busca por repositórios'
                {...rest}
            />
        </Container>
    );
}