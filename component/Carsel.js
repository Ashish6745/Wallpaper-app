import React, { useState } from 'react';
import { Button, Text, View, Image, Pressable,ScrollView } from 'react-native';
import Liked from './Liked';

function Carousel() {
  const data = [ 
   
    {
      "albumId": 1,
      "id": 1,
      "title": "accusamus beatae ad facilis cum similique qui sunt",
      "url": "https://api.slingacademy.com/public/sample-photos/1.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/92c952"
    },
    {
      "albumId": 1,
      "id": 2,
      "title": "reprehenderit est deserunt velit ipsam",
      "url": "https://api.slingacademy.com/public/sample-photos/2.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/771796"
    },
    {
      "albumId": 1,
      "id": 3,
      "title": "officia porro iure quia iusto qui ipsa ut modi",
      "url": "https://api.slingacademy.com/public/sample-photos/3.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/24f355"
    },
    {
      "albumId": 1,
      "id": 4,
      "title": "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      "url": "https://api.slingacademy.com/public/sample-photos/4.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/d32776"
    },
    {
      "albumId": 1,
      "id": 5,
      "title": "natus nisi omnis corporis facere molestiae rerum in",
      "url": "https://api.slingacademy.com/public/sample-photos/5.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/f66b97"
    },
    {
      "albumId": 1,
      "id": 6,
      "title": "accusamus ea aliquid et amet sequi nemo",
      "url": "https://api.slingacademy.com/public/sample-photos/6.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/56a8c2"
    },
    {
      "albumId": 1,
      "id": 7,
      "title": "officia delectus consequatur vero aut veniam explicabo molestias",
      "url": "https://api.slingacademy.com/public/sample-photos/7.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/b0f7cc"
    },
    {
      "albumId": 1,
      "id": 8,
      "title": "aut porro officiis laborum odit ea laudantium corporis",
      "url": "https://api.slingacademy.com/public/sample-photos/8.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/54176f"
    },
    {
      "albumId": 1,
      "id": 9,
      "title": "qui eius qui autem sed",
      "url": "https://api.slingacademy.com/public/sample-photos/9.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/51aa97"
    },
    {
      "albumId": 1,
      "id": 10,
      "title": "beatae et provident et ut vel",
      "url": "https://api.slingacademy.com/public/sample-photos/10.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/810b14"
    },
    {
      "albumId": 1,
      "id": 11,
      "title": "nihil at amet non hic quia qui",
      "url": "https://api.slingacademy.com/public/sample-photos/11.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/1ee8a4"
    },
    {
      "albumId": 1,
      "id": 12,
      "title": "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      "url": "https://api.slingacademy.com/public/sample-photos/12.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/66b7d2"
    },
    {
      "albumId": 1,
      "id": 13,
      "title": "repudiandae iusto deleniti rerum",
      "url": "https://api.slingacademy.com/public/sample-photos/13.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/197d29"
    },
    {
      "albumId": 1,
      "id": 14,
      "title": "est necessitatibus architecto ut laborum",
      "url": "https://api.slingacademy.com/public/sample-photos/14.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/61a65"
    },
    {
      "albumId": 1,
      "id": 15,
      "title": "harum dicta similique quis dolore earum ex qui",
      "url": "https://api.slingacademy.com/public/sample-photos/15.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/f9cee5"
    },
    {
      "albumId": 1,
      "id": 16,
      "title": "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
      "url": "https://api.slingacademy.com/public/sample-photos/16.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/fdf73e"
    },
    {
      "albumId": 1,
      "id": 17,
      "title": "natus doloribus necessitatibus ipsa",
      "url": "https://api.slingacademy.com/public/sample-photos/17.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/9c184f"
    },
    {
      "albumId": 1,
      "id": 18,
      "title": "laboriosam odit nam necessitatibus et illum dolores reiciendis",
      "url": "https://api.slingacademy.com/public/sample-photos/18.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/1fe46f"
    },
    {
      "albumId": 1,
      "id": 19,
      "title": "perferendis nesciunt eveniet et optio a",
      "url": "https://api.slingacademy.com/public/sample-photos/19.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/56acb2"
    },
    {
      "albumId": 1,
      "id": 20,
      "title": "assumenda voluptatem laboriosam enim consequatur veniam placeat reiciendis error",
      "url": "https://api.slingacademy.com/public/sample-photos/20.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/8985dc"
    },
    {
      "albumId": 1,
      "id": 21,
      "title": "ad et natus qui",
      "url": "https://api.slingacademy.com/public/sample-photos/21.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/5e12c6"
    },
    {
      "albumId": 1,
      "id": 22,
      "title": "et ea illo et sit voluptas animi blanditiis porro",
      "url": "https://api.slingacademy.com/public/sample-photos/22.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/45601a"
    },
    {
      "albumId": 1,
      "id": 23,
      "title": "harum velit vero totam",
      "url": "https://api.slingacademy.com/public/sample-photos/23.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/e924e6"
    },
    {
      "albumId": 1,
      "id": 24,
      "title": "beatae officiis ut aut",
      "url": "https://api.slingacademy.com/public/sample-photos/24.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/8f209a"
    },
    {
      "albumId": 1,
      "id": 25,
      "title": "facere non quis fuga fugit vitae",
      "url": "https://api.slingacademy.com/public/sample-photos/25.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/5e3a73"
    },
    {
      "albumId": 1,
      "id": 26,
      "title": "asperiores nobis voluptate qui",
      "url": "https://api.slingacademy.com/public/sample-photos/26.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/474645"
    },
    {
      "albumId": 1,
      "id": 27,
      "title": "sit asperiores est quos quis nisi veniam error",
      "url": "https://api.slingacademy.com/public/sample-photos/27.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/c984bf"
    },
    {
      "albumId": 1,
      "id": 28,
      "title": "non neque eligendi molestiae repudiandae illum voluptatem qui aut",
      "url": "https://api.slingacademy.com/public/sample-photos/28.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/392537"
    },
    {
      "albumId": 1,
      "id": 29,
      "title": "aut ipsam quos ab placeat omnis",
      "url": "https://api.slingacademy.com/public/sample-photos/29.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/602b9e"
    },
    {
      "albumId": 1,
      "id": 30,
      "title": "odio enim voluptatem quidem aut nihil illum",
      "url": "https://api.slingacademy.com/public/sample-photos/30.jpeg",
      "thumbnailUrl": "https://via.placeholder.com/150/372c93"
    },
  ];

 
 const[count,setCount] = useState(0);
 const[arr,setArr] = useState([]);
 

 function fav() {
  setArr([...arr, data[count]]);
}
// The function returns true if the index of the current item is not equal to id, and false otherwise. When the function returns true, the current item is included in the new array. When it returns false, the item is not included.
function remove(id) {
  setArr(arr.filter((item, index) => index !== id));
}

  function handle(id) {
    setCount((id) => (id + 1) % data.length);
  }
 

  return (
    <ScrollView>
      <Image source={{ uri: data[count].url }} style={{ width: '100%', height: 500 ,position:'relative',borderWidth:1,borderColor:'black'}} />
      <Text style={{fontSize:30,fontWeight:'800',color:'midnightblue',textAlign:'center',position:'absolute',top:10,right:10,margin:10}}>{data[count].id}</Text>
    <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
   <View style={{width:300,margin:10}}>
   <Button title='Next' onPress={()=>handle(count)} color='midnightblue' />
   </View>
   <Pressable onPress={() =>fav(count)}>
   <Text style={{fontSize:25,marginHorizontal:20,paddingHorizontal:10,color:'midnightblue',fontWeight:'bold'}}>💙</Text>
   </Pressable>
    </View>
    <Liked liked={arr} remove={remove}/>
    </ScrollView>
  );
}


export default Carousel;
