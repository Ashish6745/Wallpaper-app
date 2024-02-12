import React from 'react'
import {Text, View,ScrollView,Image, Pressable } from 'react-native'

function Liked({liked ,remove}) {
    
  return (
    <>
      <Text style={{fontSize:24,fontWeight:'bold',color:'midnightblue',marginLeft:10}}>Liked Images</Text>
      <ScrollView horizontal={true}>
   {
    liked.length ? 
    liked.map((items,index) =>
   <View key={index} style={{margin:20,borderWidth:2,padding:10}} >
   <Image source={{uri: items.url}} style={{width:80,height:80,borderWidth:2,borderColor:'midnightblue',borderRadius:100,}} />
    <Pressable style={{position: 'absolute', right: -15, top:-10}} onPress={()=>remove(index)}>
    <Text style={{backgroundColor:'midnightblue',padding:10,fontWeight:'bold',color:'white'}}>X</Text>
    </Pressable>
   </View>
    ) : null
  }
   </ScrollView> 
   </>
  )
  
}

export default Liked
