import { TextInputProps } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
    align-items: center;
    background-color: rgba(118, 118, 128, 0.12);
    border-radius: 10px;
    padding: 7px 8px;
    height: 36px;
`;

export const SearchBarInput = styled.TextInput.attrs<TextInputProps>({
    placeholderTextColor: "rgba(60, 60, 67, 0.6)"
  })`
    flex: 1;
    font-size: 17px;
    margin-left: 6px
`;