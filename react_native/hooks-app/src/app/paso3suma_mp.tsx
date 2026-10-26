import { useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, type TextInputInstance, View } from 'react-native'

export default function Paso3SumaMp() {
  const precioRef = useRef<TextInputInstance>(null)
  const [precio, setPrecio] = useState<string>('8.50')
  const [cantidad, setCantidad] = useState<string>('1')
  const [total, setTotal] = useState<number>(8.5)

  function calcularTotal() {
    const precioNumero = Number(precio)
    const cantidadNumero = Number(cantidad)
    if (Number.isFinite(precioNumero) && Number.isFinite(cantidadNumero) && precioNumero >= 0 && cantidadNumero >= 0) {
      setTotal(precioNumero * cantidadNumero)
    }
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Calcula el total del pedido</Text>
      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Precio por plato ($)</Text>
        <TextInput style={styles.input} value={precio} onChangeText={setPrecio} keyboardType="decimal-pad" returnKeyType="next" onSubmitEditing={() => precioRef.current?.focus()} />
        <Text style={styles.etiqueta}>Cantidad</Text>
        <TextInput ref={precioRef} style={styles.input} value={cantidad} onChangeText={setCantidad} keyboardType="number-pad" returnKeyType="done" onSubmitEditing={calcularTotal} />
      </View>
      <Pressable style={({ pressed }) => [styles.boton, pressed && styles.presionado]} onPress={calcularTotal}>
        <Text style={styles.textoBoton}>Calcular</Text>
      </Pressable>
      <View style={styles.resultado}>
        <Text style={styles.etiqueta}>Total</Text>
        <Text style={styles.total}>${total.toFixed(2)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#fff8ef', gap: 16 },
  titulo: { fontSize: 22, fontWeight: '700', color: '#4e342e', textAlign: 'center' },
  formulario: { width: '100%', padding: 16, borderRadius: 12, backgroundColor: '#fff', gap: 10 },
  etiqueta: { fontSize: 15, fontWeight: '600', color: '#4e342e' },
  input: { width: '100%', minHeight: 48, paddingHorizontal: 12, borderRadius: 8, borderWidth: 1, borderColor: '#bbb', color: '#1a1a1a', fontSize: 16 },
  boton: { width: '100%', padding: 14, borderRadius: 8, alignItems: 'center', backgroundColor: '#c65d32' },
  presionado: { opacity: 0.75 },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 15 },
  resultado: { width: '100%', padding: 16, borderRadius: 8, backgroundColor: '#fff', gap: 6 },
  total: { fontSize: 28, fontWeight: '700', color: '#2e7d32' },
})
