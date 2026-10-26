import { ScrollView, StyleSheet, Text, View, useColorScheme, useWindowDimensions } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const platos = [
  { nombre: 'Hamburguesa de la casa', detalle: 'Carne, queso y papas', precio: '$8.50' },
  { nombre: 'Pasta al pesto', detalle: 'Albahaca fresca y parmesano', precio: '$10.00' },
  { nombre: 'Ensalada de temporada', detalle: 'Vegetales frescos y aderezo', precio: '$7.25' },
  { nombre: 'Limonada natural', detalle: 'Hecha al momento', precio: '$3.00' },
]

export default function Paso4Mp() {
  const { width, height, scale, fontScale } = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const oscuro = useColorScheme() === 'dark'
  const colores = {
    fondo: oscuro ? '#211a16' : '#fff8ef',
    tarjeta: oscuro ? '#332720' : '#fff',
    texto: oscuro ? '#f5e9df' : '#3e2723',
    detalle: oscuro ? '#d7c3b5' : '#666',
  }
  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  return (
    <ScrollView style={[styles.scroll, { backgroundColor: colores.fondo }]} contentContainerStyle={[styles.contenedor, { paddingTop: insets.top + 16, paddingBottom: insets.bottom + 16 }]}>
      <Text style={[styles.titulo, { color: colores.texto }]}>Menú del restaurante</Text>
      <Text style={[styles.detalle, { color: colores.detalle }]}>
        Pantalla: {Math.round(width)} × {Math.round(height)} dp · escala: {scale.toFixed(1)} · texto: {fontScale.toFixed(1)}
      </Text>
      <View style={styles.grid}>
        {platos.map(plato => (
          <View key={plato.nombre} style={[styles.tarjeta, { width: anchoTarjeta, backgroundColor: colores.tarjeta }]}>
            <Text style={[styles.nombre, { color: colores.texto }]}>{plato.nombre}</Text>
            <Text style={[styles.detalle, { color: colores.detalle }]}>{plato.detalle}</Text>
            <Text style={styles.precio}>{plato.precio}</Text>
          </View>
        ))}
      </View>
      <Text style={[styles.detalle, { color: colores.detalle }]}>
        Área segura: arriba {Math.round(insets.top)} dp · abajo {Math.round(insets.bottom)} dp
      </Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: { flex: 1 },
  contenedor: { alignItems: 'center', padding: 24, gap: 16 },
  titulo: { fontSize: 22, fontWeight: '700', textAlign: 'center' },
  detalle: { fontSize: 14, lineHeight: 20, textAlign: 'center' },
  grid: { width: '100%', flexDirection: 'row', flexWrap: 'wrap', gap: 12 },
  tarjeta: { padding: 16, borderRadius: 12, gap: 8 },
  nombre: { fontSize: 16, fontWeight: '700' },
  precio: { fontSize: 15, fontWeight: '700', color: '#c65d32' },
})
