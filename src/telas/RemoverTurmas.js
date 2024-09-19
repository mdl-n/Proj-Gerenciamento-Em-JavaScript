import { useNavigation } from '@react-navigation/native';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';


export default function RemoverTurmas(){
    const Navigation = useNavigation();
    return (
        <View style={{flex:1, padding:20, justifyContent:'center'}}>
            
        <Image source={require('../logo/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
            <Text style={{
            alignSelf:'center', 
            fontWeight:'bold', 
            fontSize:20, 
            color:'gray', 
            marginTop:'3%'}}>
            Remoção de Turmas
            </Text>

            <View style={{
                backgroundColor:'white',
                borderRadius:8,
                elevation:5,
                borderWidth:1,
                borderColor:'#ccc',
                shadowOpacity:3,
                marginTop:'10%'
            }}>
                <View style={{padding:10}}>
                <Text style={{color:'blue', alignSelf:'center', fontWeight:'bold', fontSize:18}}>
                    Remover turmas individuais
                </Text>

                <Text style={{fontWeight:'bold', marginTop:'2%'}}>
                    Informe a turma que deseja remover:
                </Text>

                <TextInput style={{
                    borderWidth:1,
                    padding:3,
                    borderRadius:6,
                    borderColor:'#ccc',
                    elevation:5,
                    backgroundColor:'white',
                    marginTop:'2%'
                }}
                placeholder='Ex. 3000'/>

                 <TouchableOpacity
                style={{
                    backgroundColor:'blue',
                    borderRadius:9,
                    marginTop:'4%',
                    height:35,
                    justifyContent:'center',
                    width:'100%',
                    alignSelf:'center',
                    marginBottom:'1%'
                }}
                >
                    <Text
                    style={{
                        fontSize:16,
                        color:'white',
                        fontWeight:'bold',
                        alignSelf:'center'
                    }}
                    >
                        Remover turma
                    </Text>
                    
                    </TouchableOpacity>
             </View>
             
            </View>

            <View style={{
                marginTop:'10%',
                borderWidth:1,
                borderColor:'#ccc',
                elevation:5,
                backgroundColor:'white',
                borderRadius:8,
                shadowOpacity:3,
                padding:10
            }}>
                <Text style={{
                    color:'blue', 
                    fontWeight:'bold',
                    fontSize:16,
                    alignSelf:'center',
                    
                    }}>
                    Remover todas as turmas em um clique
                </Text>

                <TouchableOpacity style={{
                    marginTop:'3%',
                    backgroundColor:'red',
                    padding:5,
                    borderRadius:9
                }}>
                    <Text style={{
                    color:'white', 
                    fontWeight:'bold',
                    fontSize:16,
                    alignSelf:'center',
                    
                    }}> Remover TODAS as turmas</Text>
                </TouchableOpacity>
                </View>

                <TouchableOpacity
                    style={{
                        marginTop:'10%',
                        backgroundColor:'blue',
                        borderRadius:9,
                        justifyContent:"center",
                        backgroundColor:'gray',
                    }}
                    onPress={()=>Navigation.navigate('OpcoesMenu')}
                    >
                        <Text
                        style={{
                            fontSize:16,
                            color:'white',
                            fontWeight:'bold',
                            alignSelf:'center',
                            padding:6,

                        }}
                        >Voltar</Text>
                    </TouchableOpacity>

        </View>
    )
}