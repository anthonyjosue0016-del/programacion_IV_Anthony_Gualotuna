import { useEffect, useState } from 'react'
import { Pressable, StyleSheet, Text, View } from 'react-native'

type EstadoPedido = 'pendiente' | 'preparando' | 'listo' | 'inactivo'

export default function Paso2Mp() {
  const [activo, setActivo] = useState<boolean>(false)
  const [estado, setEstado] = useState<EstadoPedido>('inactivo')
  const [actualizaciones, setActualizaciones] = useState<number>(0)

  useEffect(() => {
    if (!activo) return

    const intervalo = setInterval(() => {
      setActualizaciones(n => n + 1)
      setEstado(actualizaciones % 3 === 2 ? 'listo' : 'preparando')
    }, 2000)

    return () => clearInterval(intervalo)
  }, [activo, actualizaciones])

  const colorEstado =
    estado === 'listo' ? '#2e7d32' : estado === 'preparando' ? '#ef6c00' : '#757575'

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Seguimiento de tu pedido</Text>
      <View style={styles.tarjeta}>
        <Text style={[styles.estado, { color: colorEstado }]}>{estado.toUpperCase()}</Text>
        <Text style={styles.detalle}>Pedido #104 · Mesa 4</Text>
        <Text style={styles.detalle}>Actualizaciones: {actualizaciones}</Text>
      </View>
      <Pressable
        style={({ pressed }) => [styles.boton, activo ? styles.detener : styles.iniciar, pressed && styles.presionado]}
        onPress={() => {
          setActivo(a => !a)
          setEstado(activo ? 'inactivo' : 'pendiente')
        }}
      >
        <Text style={styles.textoBoton}>{activo ? 'Pausar seguimiento' : 'Seguir pedido'}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 24, backgroundColor: '#fff8ef', gap: 16 },
  titulo: { fontSize: 22, fontWeight: '700', color: '#4e342e', textAlign: 'center' },
  tarjeta: { width: '100%', padding: 18, borderRadius: 12, backgroundColor: '#fff', gap: 10 },
  estado: { fontSize: 16, fontWeight: '700' },
  detalle: { fontSize: 14, color: '#555' },
  boton: { width: '100%', padding: 14, borderRadius: 8, alignItems: 'center' },
  iniciar: { backgroundColor: '#c65d32' },
  detener: { backgroundColor: '#757575' },
  presionado: { opacity: 0.75 },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 15 },
})
