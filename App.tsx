import { BackdropFilter, Blur, Canvas, ColorMatrix, Image, useImage } from "@shopify/react-native-skia";
import { ActivityIndicator, Dimensions } from "react-native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height

export default function App() {

  const blackWhite = [0, 1, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 1, 0, 0, 0,
    0, 1, 0, 1, 0]

  const cyan = [1, 0, 0, 1.9, -2.2,
    0, 1, 0, 0.0, 0.3,
    0, 0, 1, 0, 0.5,
    0, 0, 0, 1, 0.2]

  const sepium = [1.3, -0.3, 1.1, 0, 0,
    0, 1.3, 0.2, 0, 0,
    0, 0, 0.8, 0.2, 0,
    0, 0, 0, 1, 0]

  const coldLife = [1, 0, 0, 0, 0,
    0, 1, 0, 0, 0,
    -0.2, 0.2, 0.1, 0.4, 0,
    0, 0, 0, 1, 0]

  const oldTime = [1, 0, 0, 0, 0,
    -0.4, 1.3, -0.4, 0.2, -0.1,
    0, 0, 1, 0, 0,
    0, 0, 0, 1, 0]

  const image = useImage(require('./assets/chicago.jpg'))

  if (!image) {
    return <ActivityIndicator />
  }
  return (
    <Canvas style={{ flex: 1, width: width, height: height }}>
      <Image
        image={image}
        fit="fill"
        x={0}
        y={0}
        height={height}
        width={width}>
        {/* <Blur blur={10} mode="clamp">
          <ColorMatrix
            matrix={blackWhite} />
        </Blur> */}


      </Image>
      <BackdropFilter
        clip={{ x: 0, y: height / 2, width: height, height: height / 2 }}
        filter={
        <ColorMatrix
          matrix={blackWhite} />
      } />

<BackdropFilter
        clip={{ x: 0, y: 0, width: height, height: height / 2 }}
        filter={
        <ColorMatrix
          matrix={cyan} />
      } />
    </Canvas>
  );
}
