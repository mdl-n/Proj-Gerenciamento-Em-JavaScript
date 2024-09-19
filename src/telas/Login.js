import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../cfg/firebaseConfig'
export default function Login() {
    const Navigation = useNavigation();

    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const logar = async () => {

      if(!email.trim() || !senha.trim()){
        Alert.alert('', 'Não deixe campos vazios!')
        return;
      }

      try {
        await signInWithEmailAndPassword(auth, email,senha);
        Alert.alert('', 'Logado com sucesso!',[
          {
            text:'Ok',
            onPress: () => Navigation.navigate('OpcoesMenu')
          }
        ])
        
      } catch (error) {
        console.log(error.code)

        if(error.code == 'auth/invalid-email'){
          Alert.alert('', 'Insira um E-Mail válido!')
        }
        if(error.code == 'auth/invalid-credential'){
          Alert.alert('', 'E-Mail ou senha inválidos!')
        }
      }
    }

  return (
    <View style={{flex:1, padding:15,justifyContent:'center', alignContent:'center'}}>
      <Image source={require('../logo/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
      <Text style={{alignSelf:'center', fontSize:20, fontWeight:'bold', marginTop:20, color:'gray'}}>Tela de Login</Text>

      <Text style={{marginTop:'15%', marginBottom:'-3%', color:'gray', fontWeight:'bold'}} >E-Mail</Text>
      
      <TextInput 
  placeholder="Informe o E-Mail"
  style={{
    marginTop: '5%', 
    padding: 7,
    height:'5%',
    backgroundColor: '#f2f2f2', 
    borderRadius: 7, 
    borderColor: '#ccc',
    borderWidth: 1,
    
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
 
    elevation: 5
  }}
  placeholderTextColor={'gray'}
  value={email}
  onChangeText={setEmail}
/>

      <TextInput placeholder="Informe a senha" 
      style={{marginTop:'5%', 
      padding:7,
      height:'5%',
      backgroundColor:'#f2f2f2', 
      borderWidth:1,
      borderColor:'#ccc',
      borderRadius:7, elevation:5}} placeholderTextColor={'gray'}
      value={senha}
  onChangeText={setSenha}
  secureTextEntry={true}
      />
      
      <TouchableOpacity style={{ 
        marginTop: 30, backgroundColor: 'blue', padding: 10, borderRadius: 9 }}
        onPress={logar}
        >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Logar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{marginTop:20, alignItems:'center'}}
      onPress={()=>Navigation.navigate('EsqueceuSenha')}
      > 
        <Text style={{ color: 'black', textDecorationLine: 'underline', fontSize:15 }}>
          Esqueceu sua senha?
        </Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row', marginTop:5, alignSelf:'center'}}>
        <Text style={{fontSize:16}}>Ainda não tem conta? </Text>
        
        <TouchableOpacity onPress={() => Navigation.navigate("Cadastro")}>
          <Text style={{color:'blue', fontWeight:'bold', fontSize:16}}>Clique aqui</Text>
        </TouchableOpacity>
      </View>
      
      
    </View>
  );
}
