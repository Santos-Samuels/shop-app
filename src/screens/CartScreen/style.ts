import styled from 'styled-components/native';

export const TotalAmountCart = styled.View`
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  elevation: 5;
  shadow-radius: 10;
  padding: 10px;
  border-radius: 10;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20;
`

export const TotalAmountText = styled.Text`
  font-size: 20;
  font-weight: 600;
`