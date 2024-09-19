import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { View, Image, Text, TouchableOpacity, TextInput } from "react-native";

export default function LiberarTurmas(){
    const Navigation = useNavigation();

    const [Btn1Turno, setBtn1Turno] = useState(false);
    const [Btn2Turno, setBtn2Turno] = useState(false);
    const [Btn3Turno, setBtn3Turno] = useState(false);

    function apertouBtn1Turno(){
        setBtn1Turno(!Btn1Turno);
        setBtn2Turno(false)
        setBtn3Turno(false)
    }
    function apertouBtn2Turno(){
        setBtn2Turno(!Btn2Turno);
        setBtn1Turno(false)
        setBtn3Turno(false)
    }
    function apertouBtn3Turno(){
        setBtn3Turno(!Btn3Turno);
        setBtn1Turno(false)
        setBtn2Turno(false)
    }

    return(
        <View style={{flex:1, padding:20, justifyContent:'center'}}>
        <Image source={require('../logo/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
        <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'3%'}}
        >Liberação das Turmas</Text>
        
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
                        Turmas gerais</Text>

                     <View style={{flexDirection:'row', justifyContent:"center", marginTop:'3%'}}>
                    <TouchableOpacity 
                    onPress={()=>apertouBtn1Turno()}
                    style={{
                        backgroundColor:Btn1Turno ? 'green' : 'blue', borderRadius:7, padding:5, width:'26%'}}>
                        <Text style={{color:'white', fontSize:16, alignSelf:'center'}}>1° Turno</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>apertouBtn2Turno()}
                    style={{
                        marginLeft:'5%', backgroundColor:Btn2Turno ? 'green' : 'blue', borderRadius:7, padding:5, width:'26%'}}>
                        <Text style={{color:'white', fontSize:16, alignSelf:'center'}}>2° Turno</Text>
                    </TouchableOpacity>

                    <TouchableOpacity 
                    onPress={()=>apertouBtn3Turno()}
                    style={{
                        marginLeft:'5%', backgroundColor:Btn3Turno ? 'green' : 'blue', borderRadius:7, padding:5, width:'26%'}}>
                        <Text style={{color:'white', fontSize:16, alignSelf:'center'}}>3° Turno</Text>
                    </TouchableOpacity>
                </View>

                {Btn1Turno && (
                    <View>
                        <Text style={{alignSelf:'center'}}>tela 1 turno</Text>
                    </View>
                )}

                {Btn2Turno && (
                    <View>
                        <Text style={{alignSelf:'center'}}>Tela 2 turno</Text>
                    </View>
                )}

                {Btn3Turno && (
                    <View>
                        <Text style={{alignSelf:'center'}}>
                            Tela 3 turno
                        </Text>
                    </View>
                )}

                </View>
                <TouchableOpacity style={{ marginTop: '9%', backgroundColor: 'gray', padding: 10, borderRadius: 9 }}
                onPress={()=>Navigation.navigate('GerenciamentoTurmas')}
                >
        <Text style={{ color: '#fff', textAlign: 'center' }}>Voltar</Text>
      </TouchableOpacity>
        </View>
    )
}