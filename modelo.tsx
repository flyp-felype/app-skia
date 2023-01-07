import { Canvas, ColorMatrix, Image, useImage, Blur, DisplacementMap, Turbulence, BackdropFilter } from '@shopify/react-native-skia';
import React from 'react';
import { Dimensions } from 'react-native';
const windowHeight = Dimensions.get('window').height
const windowWidth = Dimensions.get('window').width
export default function App() {

  const image = useImage(require('./assets/chicago.jpg'));
  const blackWhite = [0, 1, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 1, 0, 1, 0]

  const yellow = [1, 0, 0, 0, 0,
    -0.2, 1.0, 0.3, 0.1, 0,
    -0.1, 0, 1, 0, 0,
    0, 0, 0, 1, 0]

  const cyan = [1, 0, 0, 1.9, -2.2,
    0, 1, 0, 0.0, 0.3,
    0, 0, 1, 0, 0.5,
    0, 0, 0, 1, 0.2,]

  const sepium = [1.3, -0.3, 1.1, 0, 0,
    0, 1.3, 0.2, 0, 0,
    0, 0, 0.8, 0.2, 0,
    0, 0, 0, 1, 0,]
    
    if (!image) {
      return null;
    }
    
  return (
    <Canvas style={{ flex: 1, width: windowWidth, height: windowHeight  }}>

        <Image
          image={image}
          fit="fill"
          x={0}
          y={0}
          width={windowWidth}
          height={windowHeight}
        >
          {/* <Blur blur={2} mode="clamp">
            <ColorMatrix
              matrix={cyan}
            />
          </Blur>

          <DisplacementMap channelX="g" channelY="a" scale={20}>
            <Turbulence freqX={0.01} freqY={0.05} octaves={2} seed={2} />
          </DisplacementMap> */}


        </Image>
        <BackdropFilter
          clip={{ x: 0, y: windowHeight /2, width: windowWidth, height: windowHeight /2}}
          filter={<ColorMatrix matrix={blackWhite} />}
        />
     
    </Canvas>
  );
}

