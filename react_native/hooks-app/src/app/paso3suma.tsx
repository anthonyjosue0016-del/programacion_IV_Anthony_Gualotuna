import { useEffect, useRef, useState } from 'react'
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  type TextInputInstance,
  View,
} from 'react-native'

export default function Paso3suma() {
  const inputHostRef = useRef<TextInputInstance>(null)
  const inputPuertoRef = useRef<TextInputInstance>(null)
  const intentosSilenciosRef = useRef<number>(0)

  const [numero1, setNumero1] = useState<number>(0)
  const [numero2, setNumero2] = useState<number>(0)
  const [ultimaConexion, setUltimaConexion] = useState<string>('—')

  useEffect(() => {
    inputHostRef.current?.focus()
  }, [])

  function Sumar() {
    intentosSilenciosRef.current += 1
    setUltimaConexion(
      `${numero1.trim() || 'servidor'}:${numero2 || '0'} — intento #${intentosSilenciosRef.current}`,
    )
  }

  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Hacer la suma entre dos números</Text>

      <View style={styles.formulario}>
        <Text style={styles.etiqueta}>Numero 1</Text>
        <TextInput
          ref={inputHostRef}
          style={styles.input}
          value={numero1}
          onChangeText={setNumero1}
          placeholder="0"
          placeholderTextColor="#888"
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          returnKeyType="next"
          onSubmitEditing={() => inputPuertoRef.current?.focus()}
        />

        <Text style={styles.etiqueta}>Número 2</Text>
        <TextInput
          ref={inputPuertoRef}
          style={styles.input}
          value={numero2}
          onChangeText={setNumero2}
          placeholder="0"
          placeholderTextColor="#888"
          keyboardType="number-pad"
          returnKeyType="done"
          onSubmitEditing={intentarConexion}
        />
      </View>

      <Pressable
        style={({ pressed }) => [
          styles.boton,
          pressed && styles.botonPresionado,
        ]}
        onPress={intentarConexion}
      >
        <Text style={styles.textoBoton}>Sumar</Text>
      </Pressable>

      <View style={styles.resultado}>
        <Text style={styles.etiqueta}>Último intento</Text>
        <Text style={styles.detalle}>{ultimaConexion}</Text>
      </View>
      <Text style={styles.ayuda}>
        Los reintentos silenciosos no causan re-renders.
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#f5f5f5',
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1a1a1a',
    textAlign: 'center',
  },
  formulario: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    backgroundColor: '#fff',
    gap: 10,
  },
  etiqueta: {
    fontSize: 15,
    fontWeight: '600',
    color: '#333',
  },
  input: {
    width: '100%',
    minHeight: 48,
    paddingHorizontal: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#bbb',
    backgroundColor: '#fff',
    color: '#1a1a1a',
    fontSize: 16,
  },
  boton: {
    width: '100%',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    backgroundColor: '#1565c0',
  },
  botonPresionado: {
    opacity: 0.75,
  },
  textoBoton: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
  resultado: {
    width: '100%',
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#fff',
    gap: 6,
  },
  detalle: {
    fontSize: 14,
    color: '#555',
  },
  ayuda: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
  },
})
