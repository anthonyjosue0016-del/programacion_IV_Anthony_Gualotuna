import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useColorScheme,
  useWindowDimensions,
} from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

type EstadoServidor = 'activo' | 'timeout'

const servidores: {
  nombre: string
  ip: string
  estado: EstadoServidor
}[] = [
  { nombre: 'web-01', ip: '10.0.2.10', estado: 'activo' },
  { nombre: 'db-01', ip: '10.0.2.20', estado: 'activo' },
  { nombre: 'cache-01', ip: '10.0.2.30', estado: 'timeout' },
  { nombre: 'backup-01', ip: '10.0.2.40', estado: 'activo' },
]

export default function Paso4() {
  const { width, height, scale, fontScale } = useWindowDimensions()
  const insets = useSafeAreaInsets()
  const esquema = useColorScheme()
  const oscuro = esquema === 'dark'

  const colores = {
    fondo: oscuro ? '#0d1b2a' : '#f5f5f5',
    tarjeta: oscuro ? '#1a2a3a' : '#fff',
    texto: oscuro ? '#e8eaed' : '#1a1a1a',
    detalle: oscuro ? '#b0b8c1' : '#666',
    borde: oscuro ? '#2d3e50' : '#e0e0e0',
  }

  const columnas = width > 500 ? 2 : 1
  const anchoTarjeta = (width - 48 - (columnas - 1) * 12) / columnas

  return (
    <ScrollView
      style={[styles.scroll, { backgroundColor: colores.fondo }]}
      contentContainerStyle={[
        styles.contenedor,
        {
          paddingTop: insets.top + 16,
          paddingBottom: insets.bottom + 8,
        },
      ]}
    >
      <Text style={[styles.titulo, { color: colores.texto }]}>
        Inventario de Servidores
      </Text>

      <View
        style={[
          styles.tarjeta,
          {
            backgroundColor: colores.tarjeta,
            borderColor: colores.borde,
          },
        ]}
      >
        <Text style={[styles.etiqueta, { color: colores.detalle }]}>
          Pantalla: {Math.round(width)} × {Math.round(height)} dp
          {'  '}·{'  '}escala: {scale.toFixed(1)}
          {'  '}·{'  '}texto: {fontScale.toFixed(1)}
          {'  '}·{'  '}tema: {esquema ?? 'sin preferencia'}
        </Text>
      </View>

      <View style={styles.grid}>
        {servidores.map(servidor => (
          <View
            key={servidor.nombre}
            style={[
              styles.tarjetaServidor,
              {
                width: anchoTarjeta,
                backgroundColor: colores.tarjeta,
                borderColor: colores.borde,
              },
            ]}
          >
            <Text style={[styles.nombreServidor, { color: colores.texto }]}>
              {servidor.nombre}
            </Text>
            <Text style={[styles.detalle, { color: colores.detalle }]}>
              {servidor.ip}
            </Text>
            <Text
              style={[
                styles.estado,
                {
                  color:
                    servidor.estado === 'activo'
                      ? oscuro
                        ? '#81c784'
                        : '#2e7d32'
                      : oscuro
                        ? '#ef9a9a'
                        : '#c62828',
                },
              ]}
            >
              {servidor.estado.toUpperCase()}
            </Text>
          </View>
        ))}
      </View>

      <View
        style={[
          styles.nota,
          { backgroundColor: colores.tarjeta, borderColor: colores.borde },
        ]}
      >
        <Text style={[styles.detalle, { color: colores.detalle }]}>
          Área segura: arriba {Math.round(insets.top)} dp · abajo{' '}
          {Math.round(insets.bottom)} dp
        </Text>
        <Text style={[styles.detalle, { color: colores.detalle }]}>
          useSafeAreaInsets() devuelve los valores top, bottom, left y right
          para posicionar elementos respetando el notch y la barra de inicio.
          </Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
  },
  contenedor: {
    alignItems: 'center',
    padding: 24,
    gap: 16,
  },
  titulo: {
    fontSize: 20,
    fontWeight: '700',
    textAlign: 'center',
  },
  tarjeta: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    gap: 8,
  },
  etiqueta: {
    fontSize: 14,
    lineHeight: 21,
  },
  grid: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  tarjetaServidor: {
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
    gap: 8,
  },
  nombreServidor: {
    fontSize: 16,
    fontWeight: '700',
  },
  detalle: {
    fontSize: 14,
    lineHeight: 20,
  },
  estado: {
    fontSize: 12,
    fontWeight: '700',
  },
  nota: {
    width: '100%',
    padding: 16,
    borderRadius: 10,
    borderWidth: 1,
  },
})
