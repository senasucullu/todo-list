import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container:{
        flex:1,
        margin:16,
    },
    title:{
        fontSize:30,
        marginTop:25,

    },
    subtitle:{
        fontSize:20,
        marginTop:4,
        color:"grey",
    },
    input:{
        paddingVertical:12,
        paddingHorizontal:16,
        borderRadius:6,
        borderWidth:1,
        borderColor:"#ddd",
        fontSize:18,
        marginTop:32,

    },
    buttonContainer:{
        paddingVertical:12,
        paddingHorizontal:16,
        borderRadius:6,
        backgroundColor:"lightblue",
        alignSelf:"flex-end",
        alignItems:"center",
        marginTop:8,
    },
    buttonText:{
        fontSize:18,
    },
    divider:{
        height:1,
        backgroundColor:"#ddd",
        marginVertical:32,
    },
    taskContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:1,
        borderColor:"#ddd",  
        paddingVertical:12,
    },
    taskText:{
        fontSize:18,
    },
    taskDelete:{
        width: 63,
        height: 30,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"firebrick",
        borderRadius:4,
    },
    taskDeleteText:{
        fontSize:18,
        color:"white",
    },
});
