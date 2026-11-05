import { memo, useCallback, useState } from 'react'
import { FlatList, Pressable, StyleSheet, Text, View } from 'react-native'

interface Plato {
  id: number
  nombre: string
  precio: number
}

interface PlatoItemProps {
  plato: Plato
  onEliminar: (id: number) => void
}

const PlatoItem = memo(function PlatoItem({ plato, onEliminar }: PlatoItemProps) {
  return (
    <View style={styles.plato}>
      <View style={styles.info}>
        <Text style={styles.nombre}>{plato.nombre}</Text>
        <Text style={styles.precio}>${plato.precio.toFixed(2)}</Text>
      </View>
      <Pressable style={styles.botonEliminar} onPress={() => onEliminar(plato.id)}>
        <Text style={styles.textoEliminar}>Quitar</Text>
      </Pressable>
    </View>
  )
})

export default function Paso6Mp() {
  const [platos, setPlatos] = useState<Plato[]>([
    { id: 1, nombre: 'Hamburguesa de la casa', precio: 8.5 },
    { id: 2, nombre: 'Pasta al pesto', precio: 10 },
  ])
  const [contador, setContador] = useState<number>(0)

  const eliminarPlato = useCallback((id: number) => {
    setPlatos(actuales => actuales.filter(plato => plato.id !== id))
  }, [])

  const agregarPlato = useCallback(() => {
    setPlatos(actuales => [
      ...actuales,
      { id: Date.now(), nombre: 'Ensalada de temporada', precio: 7.25 },
    ])
  }, [])

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Administrar menú</Text>
      <Text style={styles.detalle}>Contador de acciones: {contador}</Text>
      <Pressable style={styles.boton} onPress={() => setContador(c => c + 1)}>
        <Text style={styles.textoBoton}>Contar acción</Text>
      </Pressable>
      <Pressable style={styles.boton} onPress={agregarPlato}>
        <Text style={styles.textoBoton}>Agregar plato recomendado</Text>
      </Pressable>
      <FlatList
        style={styles.lista}
        data={platos}
        keyExtractor={plato => String(plato.id)}
        renderItem={({ item }) => <PlatoItem plato={item} onEliminar={eliminarPlato} />}
        ListEmptyComponent={<Text style={styles.detalle}>No hay platos en el menú.</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: { flex: 1, padding: 24, paddingTop: 56, backgroundColor: '#fff8ef', gap: 12 },
  titulo: { color: '#4e342e', fontSize: 24, fontWeight: '700' },
  detalle: { color: '#76665d', fontSize: 14 },
  boton: { padding: 13, borderRadius: 8, alignItems: 'center', backgroundColor: '#c65d32' },
  textoBoton: { color: '#fff', fontSize: 14, fontWeight: '700' },
  lista: { flex: 1 },
  plato: { flexDirection: 'row', alignItems: 'center', padding: 14, marginVertical: 5, borderRadius: 10, backgroundColor: '#fff', gap: 10 },
  info: { flex: 1, gap: 4 },
  nombre: { color: '#3e2723', fontWeight: '600', fontSize: 15 },
  precio: { color: '#c65d32', fontWeight: '700' },
  botonEliminar: { paddingHorizontal: 12, paddingVertical: 8, borderRadius: 7, backgroundColor: '#fbe9e7' },
  textoEliminar: { color: '#b23c24', fontWeight: '600' },
})
