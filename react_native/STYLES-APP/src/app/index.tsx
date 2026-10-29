// app/index.tsx
import { Text, View, StyleSheet } from 'react-native'
import { Paso1Simpsons } from './paso1Simpsons'
import { Paso2 } from './paso2'
import { Paso3 } from './paso3'
import { Paso4 } from './paso4'
import { Paso5 } from './paso5'
import { Paso6 } from './paso6'

// ┌──────────────────────────────────────────────────────────────────┐
// │  Cambia este número y guarda (Ctrl+S) para navegar entre pasos. │
// │  1  Paso 1  Flexbox — flexDirection, justify, align, gap        │
// │  2  Paso 2  Unidades dp y la excepción del '%'                  │
// │  3  Paso 3  Dimensions vs useWindowDimensions — grid responsivo │
// │  4  Paso 4  Platform.OS y Platform.select — sombras             │
// │  5  Paso 5  useColorScheme — tema claro/oscuro                  │
// │  6  Paso 6  SafeAreaView y useSafeAreaInsets                    │
// │  7  Paso 7  Dashboard responsivo combinado                      │
// └──────────────────────────────────────────────────────────────────┘
const PASO = 4

export default function Index() {
  switch (PASO) {
    case 1:
      return <Paso1 />
    case 2:
      return <Paso1Simpsons />
    case 3:
      return <Paso2 />
    case 4:
      return <Paso3 />
    case 5:
      return <Paso4 />
    case 6:
      return <Paso5 />
    case 7:
      return <Paso6 />
      default:
    
      return (
        <View style={estilos.centrado}>
          <Text>Paso {PASO}: crea la pantalla primero</Text>
        </View>
      )
  }
}

function Paso1() {
  return (
    <View style={estilos.centrado}>
      <Text style={estilos.titulo}>Módulo 5 — Estilos y Layout</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
  centrado: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  titulo:   { fontSize: 18, fontWeight: '600' },
})