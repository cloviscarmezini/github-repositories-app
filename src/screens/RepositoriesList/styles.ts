import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    margin-top: ${getStatusBarHeight() + 36}px;
    /* padding: 0 16px; */
    padding: 0 16px 31px 16px;
`;

export const Title = styled.Text`
    font-size: 34px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const Main = styled.View`
    padding: 0 16px;
`;