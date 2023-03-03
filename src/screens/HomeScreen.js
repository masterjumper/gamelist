import { ImageBackground, SafeAreaView, ScrollView, 
  StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import Feather from 'react-native-vector-icons/Feather'
import BannerSlider from '../components/BannerSlider'
import Carousel from 'react-native-reanimated-carousel'
import 'react-native-reanimated'
import {freeGames, paidGames, sliderData} from '../model/data'
import {windowsWidth, windowsHeigth} from '../utils/Dimensions'
import 'react-native-gesture-handler'
import CustomSwitch from '../components/CustomSwitch'
import ListItem from '../components/ListItem';

export default function HomeScreen() {
  const [gamesTab, setGamesTab] = useState(1);

  const renderBanner = ({item, index}) => {
    return <BannerSlider data={item} />;
  };

  const onSelectSwitch = value => {
    setGamesTab(value);
  };

  return (
    <SafeAreaView style={styles.areasegura}>
      <ScrollView style={styles.scrollvie}>
        <View style={styles.container}>
          <Text style={styles.texto}>
            Hola, Nombre de Usuario
          </Text>
          <ImageBackground             
            source={require('../../assets/images/user-profile.jpg')}            
            style={styles.imagen}
            imageStyle={{ borderRadius:25 }}          
          >
          </ImageBackground>          
        </View>
        <View style={styles.searchview}>
          <Feather size={20} name="search" style={styles.feather}></Feather>
          <TextInput style={styles.search} placeholder='Search'/>
        </View>
        <View style={styles.touchview}>          
          <Text style={styles.texto}>Upcoming Games</Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.seeall}>See all</Text>
          </TouchableOpacity>
        </View >
          <Carousel                                   
              mode='parallax'
              modeConfig={{
                parallaxScrollingScale: 0.95,
                parallaxScrollingOffset: 100,
              }} 
              autoPlayInterval={2000}
              //loop={true}
              width={windowsWidth}
              height={windowsWidth - 270}
              autoPlay={true}                  
              data={sliderData}                
              scrollAnimationDuration={1000}                  
              renderItem={renderBanner}
              sliderWidth={ windowsWidth }
          />
        <View>
          <CustomSwitch 
            selectionMode={1}
            option1="Free to play"
            option2="Paid games"
            onSelectSwitch={onSelectSwitch}
          />
        </View>
        <View style={{ marginTop:20 }}>
        {gamesTab == 1 &&
          freeGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        {gamesTab == 2 &&
          paidGames.map(item => (
            <ListItem
              key={item.id}
              photo={item.poster}
              title={item.title}
              subTitle={item.subtitle}
              isFree={item.isFree}
              price={item.price}
              onPress={() =>
                navigation.navigate('GameDetails', {
                  title: item.title,
                  id: item.id,
                })
              }
            />
          ))}
        </View>          
      </ScrollView>  
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  areasegura:{
    flex:1,
    backgroundColor:'#fff'
  },
  scrollvie:{
    marginTop:30,
    padding:20
  },
  container:{
    flexDirection:'row',
    justifyContent: 'space-between',
    marginBottom:50    
  },
  texto:{
    fontSize:16,
    fontWeight:'bold',
  },
  imagen:{
    width:35,
    height:35,  
    //borderRadius:25
  },
  search:{
    fontSize:16,    
  },
  feather:{    
    color:'#C6C6C6',
    marginRight:5
  },
  searchview:{
    flexDirection:'row',
    borderColor:'#C6C6C6',
    borderWidth:1,
    borderRadius:8,
    paddingHorizontal:10,
    paddingVertical:8,
  },
  touchview:{
    marginVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  touctext:{
    fontSize: 18
  },
  seeall:{
    color: '#0aada8'
  }
})