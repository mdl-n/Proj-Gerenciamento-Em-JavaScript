import { Alert, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { auth } from "../cfg/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";

export default function Cadastro() {
    const Navigation = useNavigation();

    const [senha, setSenha] = useState('');
    const [senha1, setSenha1] = useState('');
    const [email, setEmail] = useState('');

const criacaoConta = async () => {

    if (senha.length === 0 || email.length === 0 || senha1.length === 0){
        Alert.alert('', 'Não deixe campos vazios!')
        return;
    }
    if (senha !== senha1){
        Alert.alert('', 'As senhas precisam ser iguais!')
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, senha);
        Alert.alert('', 'Conta criada com sucesso.',
          [
          {
            Text: 'Ok',
            onPress: ()=> Navigation.navigate('Login')
          }
        ]
        )
    } catch (error) {
        console.log(error.code)
        if(error.code == 'auth/invalid-email'){
            Alert.alert('', 'O E-Mail tem que ser válido!')
            return;
        }
        if (error.code == 'auth/weak-password'){
            Alert.alert('', 'A senha é muito curta!')
            return;
        }
        if (error.code == 'auth/email-already-in-use'){
            Alert.alert('', 'Este E-Mail já é cadastrado!')
            return;
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

<TextInput placeholder="Confirme a senha" 
      style={{marginTop:'5%', 
      padding:7,
      height:'5%',
      backgroundColor:'#f2f2f2', 
      borderWidth:1,
      borderColor:'#ccc',
      borderRadius:7, elevation:5}} placeholderTextColor={'gray'}
      value={senha1}
      onChangeText={setSenha1}
      secureTextEntry={true}
      />
      
      <TouchableOpacity style={{ 
        marginTop: 30, backgroundColor: 'blue', padding: 10, borderRadius: 9 }}
        onPress={criacaoConta}
        >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Criar conta</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={{ 
        marginTop: '4%', backgroundColor: 'gray', padding: 10, borderRadius: 9 }}
        onPress={()=>Navigation.navigate('Login')}
        >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Voltar</Text>
      </TouchableOpacity>

    </View>
  );
}
