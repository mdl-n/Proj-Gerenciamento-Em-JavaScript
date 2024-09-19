
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Login from "./Login";
import Cadastro from "./Cadastro";
import EsqueceuSenha from "./EsqueceuSenha";
import OpcoesGerenciamento from "./OpcoesGerenciamento";
import OpcoesMenu from "./OpcoesMenu";
import AddTurmas from "./AddTurmas";
import LiberarTurmas from "./LiberarTurmas";
import RemoverTurmas from "./RemoverTurmas";
import VisualizarTurmas from "./VisualizarTurmas";


export default function AppNavigation(){

    const Stack =createNativeStackNavigator();

    return (
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name ="VisualizarTurmas" component ={VisualizarTurmas} />
             <Stack.Screen name ="Login" component ={Login} />
            <Stack.Screen name="AddTurmas" component={AddTurmas} />
             <Stack.Screen name ="LiberarTurmas" component = {LiberarTurmas} />
            <Stack.Screen name ="RemoverTurmas" component = {RemoverTurmas} />
            <Stack.Screen name ="OpcoesGerenciamento" component ={OpcoesGerenciamento} />
            <Stack.Screen name ="OpcoesMenu" component ={OpcoesMenu} />
            <Stack.Screen name = "Cadastro" component={Cadastro}/>
            <Stack.Screen name = "EsqueceuSenha" component={EsqueceuSenha}/>
          </Stack.Navigator>
      );
}