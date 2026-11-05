import { useState } from 'react'
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { UsuarioProvider, useUsuario } from '../context/UsuarioContext'

const sugerencias = [
  { nombre: 'Hamburguesa de la casa', precio: '$8.50' },
  { nombre: 'Pasta al pesto', precio: '$10.00' },
  { nombre: 'Limonada natural', precio: '$3.00' },
]

function MenuUsuario() {
  const { usuario, setUsuario } = useUsuario()
  const [nuevoUsuario, setNuevoUsuario] = useState<string>('')

  function actualizarUsuario() {
    const nombre = nuevoUsuario.trim()
    if (nombre) {
      setUsuario(nombre)
      setNuevoUsuario('')
    }
  }

  return (
    <ScrollView contentContainerStyle={styles.contenedor}>
      <Text style={styles.marca}>SABOR DE CASA</Text>
      <Text style={styles.titulo}>¡Hola, {usuario}!</Text>
      <Text style={styles.subtitulo}>Bienvenido al menú de hoy</Text>

      <View style={styles.seccion}>
        <Text style={styles.encabezado}>Recomendados para ti</Text>
        {sugerencias.map(plato => (
          <View key={plato.nombre} style={styles.plato}>
            <View style={styles.dibujo}>
              <Text style={styles.emoji}>🍽️</Text>
            </View>
            <View style={styles.infoPlato}>
              <Text style={styles.nombrePlato}>{plato.nombre}</Text>
              <Text style={styles.detalle}>Preparado al momento</Text>
            </View>
            <Text style={styles.precio}>{plato.precio}</Text>
          </View>
        ))}
      </View>

      <View style={styles.seccion}>
        <Text style={styles.encabezado}>¿Quién está haciendo el pedido?</Text>
        <TextInput
          style={styles.input}
          value={nuevoUsuario}
          onChangeText={setNuevoUsuario}
          placeholder="Escribe tu nombre"
          placeholderTextColor="#8c817b"
          returnKeyType="done"
          onSubmitEditing={actualizarUsuario}
        />
        <Pressable
          style={({ pressed }) => [styles.boton, pressed && styles.presionado]}
          onPress={actualizarUsuario}
        >
          <Text style={styles.textoBoton}>Actualizar nombre</Text>
        </Pressable>
      </View>
      <Text style={styles.nota}>Tu nombre se comparte con las pantallas que usan UsuarioContext.</Text>
    </ScrollView>
  )
}

export default function Paso5Mp() {
  return (
    <UsuarioProvider>
      <MenuUsuario />
    </UsuarioProvider>
  )
}

const styles = StyleSheet.create({
  contenedor: { flexGrow: 1, padding: 24, paddingTop: 48, backgroundColor: '#fff8ef', gap: 14 },
  marca: { color: '#c65d32', fontSize: 13, fontWeight: '800', letterSpacing: 2, textAlign: 'center' },
  titulo: { color: '#3e2723', fontSize: 28, fontWeight: '800', textAlign: 'center' },
  subtitulo: { color: '#76665d', fontSize: 15, textAlign: 'center', marginBottom: 8 },
  seccion: { padding: 16, borderRadius: 14, backgroundColor: '#fff', gap: 12 },
  encabezado: { color: '#4e342e', fontSize: 17, fontWeight: '700' },
  plato: { flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 6 },
  dibujo: { width: 42, height: 42, borderRadius: 10, alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff0df' },
  emoji: { fontSize: 21 },
  infoPlato: { flex: 1, gap: 3 },
  nombrePlato: { color: '#3e2723', fontSize: 14, fontWeight: '600' },
  detalle: { color: '#76665d', fontSize: 12 },
  precio: { color: '#c65d32', fontWeight: '700' },
  input: { minHeight: 48, paddingHorizontal: 12, borderRadius: 8, borderWidth: 1, borderColor: '#ddcfc5', color: '#3e2723', fontSize: 15 },
  boton: { padding: 13, borderRadius: 8, alignItems: 'center', backgroundColor: '#c65d32' },
  presionado: { opacity: 0.75 },
  textoBoton: { color: '#fff', fontWeight: '700', fontSize: 14 },
  nota: { color: '#76665d', fontSize: 12, textAlign: 'center' },
})
