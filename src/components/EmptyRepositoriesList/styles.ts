import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    margin: 60px;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.Text`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 1px;
    text-align: center;
`;

export const Text = styled.Text`
    font-size: 16px;
    font-weight: 400;
    text-align: center;
`;