import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { Divider } from "react-native-elements";


export default function VisualizarTurmas(){
    const Navigation = useNavigation();

    const [btn1TurnoClicado, setBtn1TurnoCLicado] = useState(false);
    const [btn2TurnoClicado, setBtn2TurnoCLicado] = useState(false);
    const [btn3TurnoClicado, setBtn3TurnoCLicado] = useState(false);

    function apertouBtn1Turno(){

        setBtn1TurnoCLicado(!btn1TurnoClicado)
        setBtn2TurnoCLicado(false)
        setBtn3TurnoCLicado(false)
    }
    function apertouBtn2Turno(){

        setBtn2TurnoCLicado(!btn2TurnoClicado)
        setBtn1TurnoCLicado(false)
        setBtn3TurnoCLicado(false)
    }
    function apertouBtn3Turno(){

        setBtn3TurnoCLicado(!btn3TurnoClicado)
        setBtn1TurnoCLicado(false)
        setBtn2TurnoCLicado(false)
    }

    return(
        <View style={{flex:1, padding:20, justifyContent:'center'}}>
        <Image source={require('../logo/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'3%'}}
        >Visualização das Turmas</Text>
        
            <View style={{backgroundColor:'#f2f2f2', 
                elevation:5, 
                justifyContent:'center', 
                marginTop:'10%', 
                padding:10, 
                borderRadius:9,
                borderWidth:1,
                borderColor:'white',
                shadowRadius:3
                }}
                >
                    <Text style={{alignSelf:'center', color:'blue', fontWeight:'bold', fontSize:18}}>
                        Buscar turmas gerais</Text>

                    <Text style={{fontSize:15, color:'black', marginTop:'3%'}}>Escolha uma opção:</Text>
                <View style={{flexDirection:'row', justifyContent:"center", marginTop:'3%'}}>
                    <TouchableOpacity 
                    onPress={()=>{apertouBtn1Turno()}}
                    style={{
                    backgroundColor: btn1TurnoClicado ? 'green' : 'blue', borderRadius:7, padding:5, width:'26%'}}
                    >
                        <Text style={{color:'white', fontSize:16, alignSelf:'center'}}>1° Turno</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=> apertouBtn2Turno()}
                    style={{
                        marginLeft:'5%', backgroundColor: btn2TurnoClicado ? 'green' : 'blue', borderRadius:7, padding:5, width:'26%'}}>
                        <Text style={{color:'white', fontSize:16, alignSelf:'center'}}>2° Turno</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>apertouBtn3Turno()}
                    style={{
                        marginLeft:'5%', backgroundColor: btn3TurnoClicado? 'green' : 'blue', borderRadius:7, padding:5, width:'26%'}}>
                        <Text style={{color:'white', fontSize:16, alignSelf:'center'}}>3° Turno</Text>
                    </TouchableOpacity>
                </View>
                {btn1TurnoClicado && (
                <View>
                    <Text style={{marginTop: 20, textAlign: 'center'}}>Conteúdo para 1° Turno</Text>

                    <View>
                        <Text>
                            1° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                    <View>
                        <Text>
                            2° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                    <View>
                        <Text>
                            3° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                </View>
            )}
            
            {btn2TurnoClicado && (
                <View>
                    <Text style={{marginTop: 20, textAlign: 'center'}}>Conteúdo para 2° Turno</Text>
                    <View>
                        <Text>
                            1° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                    <View>
                        <Text>
                            2° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                    <View>
                        <Text>
                            3° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                </View>
            )}
            
            {btn3TurnoClicado && (
                <View>
                    <Text style={{marginTop: 20, textAlign: 'center'}}>Conteúdo para 3° Turno</Text>
                    <View>
                        <Text>
                            1° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                    <View>
                        <Text>
                            2° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                    <View>
                        <Text>
                            3° Ano:
                        </Text>
                    </View>
                    <Divider style={{borderColor:'black'}}/>
                </View>
            )}

            </View>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'12%'}}
        >Ou</Text>

<View style={{backgroundColor:'#f2f2f2', 
                elevation:5, 
                justifyContent:'center', 
                marginTop:'10%', 
                padding:10, 
                borderRadius:9
                
                }}>
                    <Text style={{alignSelf:'center', color:'blue', fontWeight:'bold', fontSize:18}}>
                        Buscar turmas com mais detalhes</Text>

                        <Text style={{fontSize:15, color:'black', marginTop:'3%'}}>Informe o numero da turma:</Text>
                        
                        <View style={{flexDirection:'row', padding:4}}>
                            <TextInput placeholder="Ex. 3000"
                            style={{marginTop:'2%',
                                backgroundColor:'white', 
                                borderWidth:1, 
                                borderColor:'#ccc', 
                                borderRadius:9,
                                elevation:2,
                                padding:1,
                                textAlign:'center',
                                width:'60%',
                                marginRight:'6%',
                                marginLeft:'2%'
                            }}
                            />
                            <TouchableOpacity style={{marginTop:'2%',
                                backgroundColor:'blue', 
                                borderRadius:9,
                                padding:4,
                                width:'30%',
                                alignItems:'center',
                                justifyContent:'center'
                                }}>
                                <Text style={{color:'white'}}>Buscar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
                <TouchableOpacity style={{ marginTop: '9%', backgroundColor: 'gray', padding: 10, borderRadius: 9 }}
                onPress={()=>Navigation.goBack()}
                >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Voltar</Text>
      </TouchableOpacity>

        </View>

    

    )
}