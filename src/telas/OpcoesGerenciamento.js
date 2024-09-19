import { useNavigation } from "@react-navigation/native";
import { Animated, Image, Text, TouchableOpacity, View } from "react-native";

export default function OpcoesGerenciamento(){
    const Navigation = useNavigation();
    return (
        <View style={{flex:1, justifyContent:'center', padding:20}}>
            <Image source={require('../logo/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'3%'}}
            >Gerenciamento de Turmas</Text>
            <View style={{padding:5, backgroundColor:'#f2f2f2',elevation:5, marginTop:"10%", borderRadius:9,
                shadowRadius:3,
                borderWidth:1,
                borderColor:'#ccc'
            }}>
                <Text style={{fontSize:16, color:'blue', fontWeight:'bold', alignSelf:'center'
                }}>Opções mais usadas:</Text>
                <TouchableOpacity
                style={{
                    backgroundColor:'blue',
                    borderRadius:9,
                    marginTop:'3%',
                    height:35,
                    justifyContent:'center',
                    width:'95%',
                    alignSelf:'center'
                }}
                onPress={()=>Navigation.navigate('VisualizarTurmas')}
                >
                    <Text
                    style={{
                        fontSize:16,
                        color:'white',
                        fontWeight:'bold',
                        alignSelf:'center',
                    }}
                    >Visualizar turmas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                    backgroundColor:'blue',
                    borderRadius:9,
                    marginTop:'3%',
                    height:35,
                    justifyContent:'center',
                    width:'95%',
                    alignSelf:'center'
                }}
                onPress={()=>Navigation.navigate('LiberarTurma')}
                >
                    <Text
                    style={{
                        fontSize:16,
                        color:'white',
                        fontWeight:'bold',
                        alignSelf:'center',
                    }}
                    >Liberar turmas</Text>
                </TouchableOpacity>

                <TouchableOpacity
                style={{
                    backgroundColor:'blue',
                    borderRadius:9,
                    marginTop:'3%',
                    height:35,
                    justifyContent:'center',
                    width:'95%',
                    alignSelf:'center',
                    marginBottom:'1%'
                }}
                >
                    <Text
                    style={{
                        fontSize:16,
                        color:'white',
                        fontWeight:'bold',
                        alignSelf:'center',
                    }}
                    >Limpar todas as turmas liberadas</Text>
                </TouchableOpacity>
            </View>

            <View style={{padding:5, backgroundColor:'#f2f2f2',elevation:5, marginTop:"10%", borderRadius:9,
                borderWidth:1,
                shadowOpacity:2,
                shadowRadius:2,
                borderColor:'#ccc'
            }}>
                <Text style={{fontSize:16, color:'blue', fontWeight:'bold', alignSelf:'center'
                }}>Opções de gerenciamento:</Text>

                <TouchableOpacity
                style={{
                    backgroundColor:'blue',
                    borderRadius:9,
                    marginTop:'3%',
                    height:35,
                    justifyContent:'center',
                    width:'95%',
                    alignSelf:'center',
                    
                }}
                >
                    <Text
                    style={{
                        fontSize:16,
                        color:'white',
                        fontWeight:'bold',
                        alignSelf:'center'
                    }}
                    onPress={()=>Navigation.navigate('AddTurmas')}
                    >
                        Adicionar turma
                    </Text>
                    
                    </TouchableOpacity>

                    <TouchableOpacity
                style={{
                    backgroundColor:'blue',
                    borderRadius:9,
                    marginTop:'3%',
                    height:35,
                    justifyContent:'center',
                    width:'95%',
                    alignSelf:'center',
                    marginBottom:'1%'
                }}
                onPress={()=>Navigation.navigate('RemoverTurmas')}
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