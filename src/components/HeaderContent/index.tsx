import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { Container, Title } from './styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderContentProps {
    title: string;
}

export function HeaderContent({ title }: HeaderContentProps) {
    const navigation = useNavigation();

    function handleGoBack() {
        if(navigation.canGoBack()) {
            navigation.goBack();
        }
    }

    return (
        <Container>
            <TouchableOpacity onPress={handleGoBack}>
                <Ionicons name="chevron-back" size={32} color="#0A84FF" />
            </TouchableOpacity>
            <Title>{title}</Title>
        </Container>
    );
}