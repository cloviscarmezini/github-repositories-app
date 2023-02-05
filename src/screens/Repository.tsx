import { RouteProp, useRoute } from '@react-navigation/native';
import React from 'react';
import { WebView } from 'react-native-webview';
import { RoutesProps } from 'src/routes';

type RepositoryScreenRouteProp = RouteProp<RoutesProps, 'repository'>;

export function Repository() {
    const route = useRoute<RepositoryScreenRouteProp>();

    const { repository } = route.params;

    return (
        <WebView
            source={{ uri: repository.html_url }}
        />
    );
}