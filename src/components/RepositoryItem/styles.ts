import styled from 'styled-components/native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';

export const Container = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
    padding-top: 16px;
`;

export const Main = styled.View`
    flex: 1;
    border-bottom-width: 1px;
    border-bottom-color: #EBEBEB;
    padding: 0px 2px 12px 2px;
`;

export const Title = styled.Text`
    font-size: 16px;
    font-weight: 600;
    margin-bottom: 1px;
`;

export const OwnerName = styled.Text`
    color: #48484A;
    font-size: 14px;
    font-weight: 400;
`;

export const Avatar = styled.Image`
    height: 52px;
    width: 52px;
    border-radius: 26px;
    background-color: #D9D9D9;
    margin-right: 12px;
`;

export const Stars = styled.Text`
    color: #48484A;
    font-size: 14px;
    font-weight: 400;
`;

export const Line = styled.View`
    justify-content: space-between;
    flex-direction: row;
`;