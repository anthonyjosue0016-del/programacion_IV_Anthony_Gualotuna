import { Text, View } from 'react-native'
import Paso1 from './paso1_mp'
import Paso2 from './paso2_mp'
import Paso3 from './paso3_mp'
import Paso3suma from './paso3suma_mp'
import Paso4 from './paso4_mp'
import Paso5 from './paso5_mp'
import Paso6 from './paso6_mp'
import Paso7 from './paso7_mp'

// Cambia este número para mostrar otro ejercicio del menú.
const PASO_MP: number = 5

export default function IndexMp() {
  switch (PASO_MP) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso2 />
    case 3:
      return <Paso3 />
    case 4:
      return <Paso4 />
    case 5:
      return <Paso5 />
    case 6:
      return <Paso6 />
    case 7:
      return <Paso7 />
    case 8:
      return <Paso3suma />
    default:
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Paso {PASO_MP}: crea la pantalla primero</Text>
        </View>
      )
  }
}
