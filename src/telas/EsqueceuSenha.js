import { useNavigation } from "@react-navigation/native";
import { Image, View, Text, TextInput, TouchableOpacity} from "react-native";

export default function EsqueceuSenha(){
    const Navigation = useNavigation();
    return(
        <View style={{flex:1, padding:20, justifyContent:'center'}}>
            <Image source={require('../logo/brasaoEstadual.png')} 
            style={{resizeMode:'contain', 
                width:130, 
                height:130,
                alignSelf:'center'
            }}
            />
            <Text
        style={{
          fontSize:22,
          fontWeight:'bold',
          color:'gray',
          alignSelf:'center',
          marginTop:'7%'
        }}
        >Recuperação de Senha</Text>

<Text
        style={{
          fontSize:18,
          color:'gray',
          fontWeight:'bold',
          marginTop:'15%'
        }}
        >
          Informe o E-Mail cadastrado
        </Text>
<TextInput
        placeholder='E-Mail'
        style={{
          fontSize:16,
          elevation:5,
          borderWidth:1,
          borderColor:'#ccc',
          elevation:5,
          backgroundColor:'white',
          padding:5,
          borderRadius:8,
          marginTop:'1%',
        }}
        cursorColor={'gray'}
        />
        <TouchableOpacity style={{backgroundColor:'blue', marginTop:'13%', borderRadius:30}}>
          <Text style={{
            alignSelf:'center', 
            fontSize:16, 
            color:'white', 
            fontWeight:'bold', 
            height:40, 
            justifyContent:'center',
            padding:8,
          }}
            >Enviar E-Mail de Recuperação de Senha</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'gray', marginTop:'6%', borderRadius:30, width:'50%', alignSelf:'center'}} onPress={() => Navigation.navigate('Login')}>
          <Text style={{
            alignSelf:'center', 
            fontSize:16, 
            color:'white', 
            fontWeight:'bold', 
            height:40, 
            justifyContent:'center',
            padding:8,
          }}
            >Voltar</Text>
        </TouchableOpacity>
        </View>
    )
}