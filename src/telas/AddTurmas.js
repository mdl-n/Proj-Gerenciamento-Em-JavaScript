import { useNavigation } from '@react-navigation/native';
import { View, Image, Text, TouchableOpacity, TextInput, Alert } from 'react-native';
import { db } from '../cfg/firebaseConfig';
import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';

export default function AddTurmas(){
    const Navigation = useNavigation();

    const [turma, setTurma] = useState('');
    const [turno, setTurno] = useState('');
    const [liberada, setLiberada] = useState(false);
    
    const [btn1Turno, setBtn1Turno] = useState(false);
    const [btn2Turno, setBtn2Turno] = useState(false);
    const [btn3Turno, setBtn3Turno] = useState(false);

    function apertouBtn1Turno() {
        const novoEstado = !btn1Turno;
        setBtn1Turno(novoEstado);
        setBtn2Turno(false);
        setBtn3Turno(false);

        setTurno(novoEstado ? 'Manhã' : '');
    }
    
    function apertouBtn2Turno() {
        const novoEstado = !btn2Turno;
        setBtn2Turno(novoEstado);
        setBtn1Turno(false);
        setBtn3Turno(false);
    
        setTurno(novoEstado ? 'Tarde' : '');
    }
    
    function apertouBtn3Turno() {
        const novoEstado = !btn3Turno;
        setBtn3Turno(novoEstado);
        setBtn1Turno(false);
        setBtn2Turno(false);
    
        setTurno(novoEstado ? 'Noite' : '');
    }

    const adicionarTurma = async () => {

        if(!turno.trim() || !turma.trim()){
            Alert.alert('', 'Preencha os campos!')
            return;
        }
        
        try {
            await addDoc(collection(db, 'turmas'),{
                turma,
                turno,
                liberada:false
            });
            
            Alert.alert('','Turma adicionada com sucesso!')
        } catch (error) {
            console.log(error.code)
        }
    }
    
    return (
        <View style={{flex:1, width:'100%', justifyContent:'center', padding:20}}>
            <Image source={require('../logo/brasaoEstadual.png')} style={{width:110, height:110, resizeMode:'contain', alignSelf:'center'}}/>
            <Text style={{alignSelf:'center', fontWeight:'bold', fontSize:20, color:'gray', marginTop:'3%'}}
            >Adicionar Turmas</Text>

            <View style={{padding:10, backgroundColor:'#f2f2f2',elevation:5, marginTop:"10%", borderRadius:9,
                shadowRadius:3,
                borderWidth:1,
                borderColor:'white',
            }}>
                     
                    <Text style={{alignSelf:'center', color:'blue', fontWeight:'bold', fontSize:18}}>
                        Informe o turno da turma:</Text>

                    <View style={{flexDirection:'row', justifyContent:"center", marginTop:'3%', padding:3}}>
                        <TouchableOpacity 
                            onPress={()=>apertouBtn1Turno()}
                            style={{
                            backgroundColor: btn1Turno ? 'green' : 'blue', borderRadius:7, padding:5, width:'22%'}}
                            >
                            <Text style={{color:'white', fontSize:16}}>1° Turno</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=>apertouBtn2Turno()}
                        style={{marginLeft:'5%', backgroundColor: btn2Turno ? 'green' : 'blue', borderRadius:7, padding:5, width:'22%'}}>
                            <Text style={{color:'white', fontSize:16}}>2° Turno</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                        onPress={()=>apertouBtn3Turno()}
                        style={{marginLeft:'5%', backgroundColor:btn3Turno ? 'green' : 'blue', borderRadius:7, padding:5, width:'22%'}}>
                            <Text style={{color:'white', fontSize:16}}>3° Turno</Text>
                        </TouchableOpacity>
                </View>

                <Text 
            style={{
                fontSize:16,
                color:'gray',
                fontWeight:'bold',
                marginTop:'9%'
            }}
            >Digite o numero da turma:</Text>

            <TextInput
            style={{
                borderWidth:1,
                padding:3,
                height:30,
                borderColor:'#ccc',
                borderRadius:9,
                elevation:1,
                marginTop:'1%',
                backgroundColor:'white',

            }}
            placeholder='Ex. 3000' placeholderTextColor={'gray'}
            value={turma}
            onChangeText={setTurma}
            />

<TouchableOpacity
                    style={{
                        marginTop:'10%',
                        backgroundColor:'blue',
                        borderRadius:9,
                        justifyContent:"center",
                        backgroundColor:'blue',
                    }}
                    onPress={adicionarTurma}
                    >
                        <Text
                        style={{
                            fontSize:16,
                            color:'white',
                            fontWeight:'bold',
                            alignSelf:'center',
                            padding:6,

                        }}
                        >Adicionar turma</Text>
                    </TouchableOpacity>

            <TouchableOpacity
                    style={{
                        marginTop:'4%',
                        backgroundColor:'blue',
                        borderRadius:9,
                        justifyContent:"center",
                        backgroundColor:'gray',
                    }}
                    onPress={()=>Navigation.navigate('OpcoesGerenciamento')}
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
            
        </View>   
    )
}         