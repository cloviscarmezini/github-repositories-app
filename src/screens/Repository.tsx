import React from 'react';

import { RoutesProps } from '@routes/index';

import { RouteProp, useRoute } from '@react-navigation/native';
import { WebView } from 'react-native-webview';

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