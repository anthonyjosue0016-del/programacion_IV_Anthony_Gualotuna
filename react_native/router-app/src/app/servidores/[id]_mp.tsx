import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Stack, useLocalSearchParams } from 'expo-router'

interface Plato {
  nombre: string
  categoria: string
  descripcion: string
  ingredientes: string
  precio: string
  tiempo: string
}

const MENU: Record<string, Plato> = {
  '1': {
    nombre: 'Hamburguesa de la casa',
    categoria: 'Favorito de la casa',
    descripcion: 'Carne a la parrilla con queso, vegetales frescos y papas doradas.',
    ingredientes: 'Carne de res, queso cheddar, lechuga, tomate y pan artesanal',
    precio: '$8.50',
    tiempo: '15-20 min',
  },
  '2': {
    nombre: 'Pasta al pesto',
    categoria: 'Pasta',
    descripcion: 'Pasta servida con pesto de albahaca fresca y parmesano.',
    ingredientes: 'Pasta, albahaca, parmesano, ajo y aceite de oliva',
    precio: '$10.00',
    tiempo: '20 min',
  },
  '3': {
    nombre: 'Ensalada de temporada',
    categoria: 'Opcion vegetariana',
    descripcion: 'Una combinacion ligera de vegetales frescos con aderezo de la casa.',
    ingredientes: 'Lechuga, tomate, pepino, aguacate y vinagreta',
    precio: '$7.25',
    tiempo: '10 min',
  },
  '4': {
    nombre: 'Pizza artesanal',
    categoria: 'Especialidad',
    descripcion: 'Masa artesanal horneada con salsa de tomate y queso mozzarella.',
    ingredientes: 'Masa, tomate, mozzarella, oregano y albahaca',
    precio: '$11.50',
    tiempo: '25 min',
  },
  '5': {
    nombre: 'Limonada natural',
    categoria: 'Bebida',
    descripcion: 'Limonada refrescante preparada al momento.',
    ingredientes: 'Limones frescos, agua y un toque de azucar',
    precio: '$3.00',
    tiempo: '5 min',
  },
}

export default function DetallePlatoMp() {
  const { id } = useLocalSearchParams<{ id: string }>()
  const plato = MENU[id ?? '']
  const [agregado, setAgregado] = useState(false)

  if (!plato) {
    return (
      <View style={styles.centrado}>
        <Stack.Screen options={{ title: 'Plato no encontrado' }} />
        <Text style={styles.error}>No encontramos este plato en el menu.</Text>
      </View>
    )
  }

  return (
    <ScrollView style={styles.scroll} contentContainerStyle={styles.contenido}>
      <Stack.Screen
        options={{
          title: plato.nombre,
          headerStyle: { backgroundColor: '#5d4037' },
          headerTintColor: '#fff8ef',
        }}
      />

      <View style={styles.encabezado}>
        <Text style={styles.etiqueta}>{plato.categoria.toUpperCase()}</Text>
        <Text style={styles.nombre}>{plato.nombre}</Text>
        <Text style={styles.descripcion}>{plato.descripcion}</Text>
        <Text style={styles.precio}>{plato.precio}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>INGREDIENTES</Text>
        <Text style={styles.textoSeccion}>{plato.ingredientes}</Text>
      </View>

      <View style={styles.seccion}>
        <Text style={styles.tituloSeccion}>PREPARACION</Text>
        <Text style={styles.textoSeccion}>Tiempo estimado: {plato.tiempo}</Text>
      </View>

      <Pressable
        accessibilityRole="button"
        accessibilityState={{ selected: agregado }}
        onPress={() => setAgregado((anterior) => !anterior)}
        style={({ pressed }) => [
          styles.boton,
          agregado && styles.botonAgregado,
          pressed && styles.botonPresionado,
        ]}
      >
        <Text style={styles.textoBoton}>
          {agregado ? 'Agregado al pedido' : `Agregar al pedido · ${plato.precio}`}
        </Text>
      </Pressable>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: { flex: 1, backgroundColor: '#fff8ef' },
  contenido: { padding: 16, gap: 16 },
  centrado: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff8ef',
  },
  error: { color: '#8d3c24', fontSize: 16, textAlign: 'center' },
  encabezado: {
    backgroundColor: '#5d4037',
    borderRadius: 16,
    padding: 22,
    gap: 10,
  },
  etiqueta: { color: '#ffcc80', fontSize: 12, fontWeight: '700', letterSpacing: 1.2 },
  nombre: { color: '#fff8ef', fontSize: 26, fontWeight: '700' },
  descripcion: { color: '#f5e9df', fontSize: 15, lineHeight: 22 },
  precio: { color: '#ffcc80', fontSize: 22, fontWeight: '700' },
  seccion: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 18,
    gap: 8,
    shadowColor: '#3e2723',
    shadowOpacity: 0.08,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  tituloSeccion: { color: '#8d6e63', fontSize: 12, fontWeight: '700', letterSpacing: 1 },
  textoSeccion: { color: '#3e2723', fontSize: 15, lineHeight: 22 },
  boton: {
    alignItems: 'center',
    backgroundColor: '#c65d32',
    borderRadius: 10,
    marginTop: 4,
    marginBottom: 24,
    padding: 16,
  },
  botonAgregado: { backgroundColor: '#558b2f' },
  botonPresionado: { opacity: 0.8 },
  textoBoton: { color: '#fff', fontSize: 16, fontWeight: '700' },
})
