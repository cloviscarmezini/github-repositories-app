import React from 'react';

import {
    Container,
    Text,
    Title
} from './styles';

export function EmptyRepositoriesList() {
    return (
        <Container>
            <Title>Pesquise um repositório</Title>
            <Text>na barra de pesquisas acima para começar</Text>
        </Container>
    );
}