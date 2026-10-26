import { useMemo, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

interface ItemPedido {
  nombre: string
  precio: number
  cantidad: number
}

export default function Paso7Mp() {
  const [pedido, setPedido] = useState<ItemPedido[]>([
    { nombre: 'Hamburguesa de la casa', precio: 8.5, cantidad: 2 },
    { nombre: 'Pasta al pesto', precio: 10, cantidad: 1 },
    { nombre: 'Limonada natural', precio: 3, cantidad: 2 },
  ])
  const [contador, setContador] = useState<number>(0)
  const total = useMemo(
    () => pedido.reduce((suma, item) => suma + item.precio * item.cantidad, 0),
    [pedido],
  )

  function agregarPostre() {
    setPedido(actual => [...actual, { nombre: 'Tarta de chocolate', precio: 5.5, cantidad: 1 }])
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Resumen de cuenta</Text>
      {pedido.map((item, indice) => (
        <View key={`${item.nombre}-${indice}`} style={styles.fila}>
          <Text style={styles.nombre}>{item.nombre} × {item.cantidad}</Text>
          <Text style={styles.precio}>${(item.precio * item.cantidad).toFixed(2)}</Text>
        </View>
      ))}
      <View style={styles.linea} />
      <Text style={styles.total}>Total: ${total.toFixed(2)}</Text>
      <Text style={styles.detalle}>Contador: {contador}</Text>
      <Pressable style={styles.boton} onPress={() => setContador(c => c + 1)}>
        <Text style={styles.textoBoton}>Incrementar contador</Text>
      </Pressable>
      <Pressable style={styles.boton} onPress={agregarPostre}>
        <Text style={styles.textoBoton}>Agregar tarta de chocolate</Text>
      </Pressable>
      <Text style={styles.nota}>useMemo recalcula el total cuando cambia el pedido.</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff8ef', gap: 14 },
  titulo: { color: '#4e342e', fontSize: 24, fontWeight: '700' },
  fila: { flexDirection: 'row', justifyContent: 'space-between', gap: 10 },
  nombre: { flex: 1, color: '#4e342e', fontSize: 14 },
  precio: { color: '#4e342e', fontWeight: '600' },
  linea: { height: 1, backgroundColor: '#ddcfc5' },
  total: { color: '#c65d32', fontSize: 22, fontWeight: '800' },
  detalle: { color: '#76665d', fontSize: 14 },
  boton: { padding: 13, borderRadius: 8, alignItems: 'center', backgroundColor: '#c65d32' },
  textoBoton: { color: '#fff', fontWeight: '700' },
  nota: { color: '#76665d', fontSize: 12, textAlign: 'center' },
})
