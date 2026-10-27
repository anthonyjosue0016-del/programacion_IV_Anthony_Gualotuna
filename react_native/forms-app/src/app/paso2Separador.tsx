import { View, StyleSheet } from "react-native";


export function Paso2Separador(){
    return <View style={style2.separador} />
}

const style2 = StyleSheet.create({

    separador: {
        height: 1,
        backgroundColor: '#e0e0e0',
        marginHorizontal: 12,
    }
})