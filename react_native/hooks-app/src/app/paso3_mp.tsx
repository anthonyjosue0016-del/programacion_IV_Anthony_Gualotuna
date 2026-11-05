import { useEffect, useRef, useState } from 'react'
import { Pressable, StyleSheet, Text, TextInput, type TextInputInstance, View } from 'react-native'

export default function Paso3Mp() {
  const notaRef = useRef<TextInputInstance>(null)
  const cambiosRef = useRef<number>(0)
  const [nota, setNota] = useState<string>('')
  const [ultimaNota, setUltimaNota] = useState<string>('Sin instrucciones especiales')

  useEffect(() => {
    notaRef.current?.focus()
  }, [])

  function guardarNota() {
    cambiosRef.current += 1
    setUltimaNota(nota.trim() || 'Sin instrucciones especiales')
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Personaliza tu pedido</Text>
      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Nota para cocina</Text>
        <TextInput
          ref={notaRef}
          style={styles.input}
          value={nota}
          onChangeText={setNota}
          placeholder="Ej.: sin cebolla"
          placeholderTextColor="#888"
          returnKeyType="done"
          onSubmitEditing={guardarNota}
        />
      </View>
      <Pressable
        style={({ pressed }) => [styles.boton, pressed && styles.presionado]}
        onPress={guardarNota}
      >
        <Text style={styles.textoBoton}>Guardar nota</Text>
      </Pressable>
      <View style={styles.resultado}>
        <Text style={styles.etiqueta}>Instrucciones guardadas</Text>
        <Text style={styles.detalle}>{ultimaNota}</Text>
      </View>
      <Text style={styles.ayuda}>useRef cuenta los guardados sin provocar un render.</Text>
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
  detalle: { fontSize: 14, color: '#555' },
  ayuda: { fontSize: 13, color: '#666' },
})
