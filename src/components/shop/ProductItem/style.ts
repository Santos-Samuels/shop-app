import styled from 'styled-components/native';

export const ProductContainer = styled.View`
  shadow-color: black;
  shadow-opacity: 0.26;
  shadow-offset: {
    width: 0;
    height: 2;
  };
  elevation: 5;
  shadow-radius: 10;
  background-color: white;
  height: 300px;
  margin: 20px;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
`

export const ProductImage = styled.Image`
  width: 100%;
  height: 60%;
  border-top-left-radius: 10;
  border-top-right-radius: 10;
  overflow: hidden;
`

export const ProductDetails = styled.View`
  align-items: center;
  height: 15%;
  padding: 10px;
`

export const ProductTitle = styled.Text`
  font-size: 18;
  margin-vertical: 4;
`

export const ProductPrice = styled.Text`
  font-size: 14;
  color: #888;
`

export const ProductActions = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 25%;
  padding-horizontal: 20;
`