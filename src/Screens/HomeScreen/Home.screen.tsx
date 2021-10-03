import React, { useEffect } from 'react'
import { Text, FlatList, Image } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import { RootState } from '../../Reducers/store';
import { addProductList, removeProduct } from '../../Reducers/Product/Products.slice'

import { PRODUCT } from '../../../assets/fixtures/Products.data';

const _renderItem = (props) => {
  const { productName, productImage, price, stock } = props?.item;

  return (
    <>
      <Image source={{ uri: productImage }} style={{ height: 200, width: 200 }} resizeMode='contain' />
      <Text>{productName}</Text>
      <Text>{price}</Text>
      <Text>{stock}</Text>
    </>
  )
}

const HomeScreen = () => {
  const state = useSelector((state: RootState) => ({
    productList: state.products.productList
  }))
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(addProductList(PRODUCT))
  }, [])

  return (
    <FlatList
      style={{ flex:1, backgroundColor: 'white' }}
      data={state?.productList}
      renderItem={_renderItem}
    />
  )
}

export default HomeScreen
