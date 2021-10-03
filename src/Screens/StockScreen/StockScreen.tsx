import React, { Dispatch, SetStateAction, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native'
import QRCodeScanner from 'react-native-qrcode-scanner';

const HEIGHT = Dimensions.get('window').height * 0.8;

type SetState = Dispatch<SetStateAction<boolean>>

const openCamera = (setCameraOpen: SetState) => (): void => setCameraOpen(true);
const closeCamera = (setCameraOpen: SetState) => (): void => setCameraOpen(false);

const _cameraModal = (isCameraOpen: boolean, setCameraOpen: SetState, data, setData): React.ReactNode => (
  <Modal visible={isCameraOpen}>
    <QRCodeScanner
      cameraStyle={{ height: HEIGHT }}
      onRead={({data}) => setData(data)}
      topViewStyle={{ backgroundColor: 'black' }}
      bottomContent={
        <TouchableOpacity onPress={closeCamera(setCameraOpen)}>
          <Text>OK. Got it!</Text>
          <Text>{data}</Text>
        </TouchableOpacity>
      }
    />
  </Modal>
)

const StockScreen = (): React.ReactNode => {
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [data, setData] = useState('');
  return (
    <View style={{ flex:1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>STOCK SCREEN</Text>
      <TouchableOpacity onPress={openCamera(setCameraOpen)}>
        <Text>Scan QR / Barcode</Text>
      </TouchableOpacity>
      {_cameraModal(isCameraOpen, setCameraOpen, data, setData)}
    </View>
  )
}

export default StockScreen
