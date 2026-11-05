import { useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

export default function Paso1Mp() {
  const [cantidad, setCantidad] = useState<number>(0)

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Menú · Hamburguesa de la casa</Text>
      <View style={styles.tarjeta}>
        <Text style={styles.nombre}>Hamburguesa artesanal</Text>
        <Text style={styles.detalle}>Carne, queso, lechuga y papas · $8.50</Text>
        <Text style={styles.cantidad}>En tu pedido: {cantidad}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.presionado]}
        onPress={() => setCantidad(c => c + 1)}
      >
        <Text style={styles.textoBoton}>Agregar al pedido</Text>
      </Pressable>
      <Pressable style={styles.botonSecundario} onPress={() => setCantidad(0)}>
        <Text style={styles.textoSecundario}>Vaciar pedido</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff8ef',
    gap: 16,
  },
  titulo: { fontSize: 22, fontWeight: '700', color: '#4e342e', textAlign: 'center' },
  tarjeta: { width: '100%', padding: 18, borderRadius: 12, backgroundColor: '#fff', gap: 8 },
  nombre: { fontSize: 18, fontWeight: '700', color: '#3e2723' },
  detalle: { fontSize: 14, color: '#666' },
  cantidad: { fontSize: 15, color: '#2e7d32', fontWeight: '600' },
  boton: { width: '100%', padding: 14, borderRadius: 8, alignItems: 'center', backgroundColor: '#c65d32' },
  presionado: { opacity: 0.75 },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 15 },
  botonSecundario: { padding: 10 },
  textoSecundario: { color: '#8d4a2f', fontSize: 14 },
})
