import React from 'react';
import { View, Image, Text, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function HomeScreen() {
  const data = [
    { id: '1', title: 'Jr Executive', description: 'Burger King', category: 'Los Angelos,US', price: '$96,000/y', image: require('./images/env.jpg') },
    { id: '2', title: 'Product Manager', description: 'Beats', category: 'Los Angelos,US', price: '$84,000/y', image: require('./images/image 8.png') },
    { id: '3', title: 'Product Manager', description: 'Facebook', category: 'Los Angelos,US', price: '$86,000/y', image: require('./images/Group 54.png') },
    { id: '4', title: 'Product Manager', description: 'Google', category: 'Los Angelos,US', price: '$50,000/y', image: require('./images/Group 55.png') },
    { id: '5', title: 'Product Manager', description: 'Apple', category: 'Los Angelos,US', price: '$90,000/y', image: require('./images/Group 56.png') },
    { id: '6', title: 'Sponsor', description: 'EPA', category: 'Los Angelos,US', price: '$78,000/y', image: require('./images/env.jpg') },
    { id: '7', title: 'Collaborators', description: 'Walt', category: 'Los Angelos,US', price: '$67,000/y', image: require('./images/hand.jpg') },
    { id: '8', title: 'Supervisor', description: 'Open ai', category: 'Los Angelos,US', price: '80,000/y', image: require('./images/ai.jpg') },
  ];

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}> 
      <Image source={item.image} style={styles.itemImage} />
      <View style={styles.textContainer}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
        <Text style={styles.itemCategory}>{item.category}</Text>
        <Text style={styles.itemPrice}>{item.price}</Text>
      </View>
    </View>
  );
  return (
    <View style={styles.ant}>
      <Text style={styles.tan}>Kwaku Asare</Text>
      <Text style={styles.men}>asare@gmail.com</Text>
      <Image style={styles.ton} source={require('./images/Group 56.png')}></Image>
      <TextInput placeholder="Search a job or position" style={styles.input}></TextInput>
      <Ionicons name="search" style={styles.fit}></Ionicons>
      <Image style={styles.an} source={require('./images/filter.5.png')}></Image>
      <Text style={styles.man}>Featured jobs</Text>
      <Text style={styles.min}>See all</Text>
      <ScrollView horizontal={true}>
        <View style={styles.jobContainer}>
          <View style={styles.mon}>
            <Image style={styles.one} source={require('./images/Group 54.png')}></Image>
            <Text style={styles.two}>Software Engineer</Text>
            <Text style={styles.three}>Facebook</Text>
            <Text style={styles.four}>$180,00</Text>
            <Text style={styles.five}>Accra,Ghana</Text>
          </View>
          <View style={styles.mun}>
            <Image style={styles.six} source={require('./images/Group 55.png')}></Image>
            <Text style={styles.seven}>Software Engineer</Text>
            <Text style={styles.eight}>Google</Text>
            <Text style={styles.nine}>$160,00</Text>
            <Text style={styles.ten}>Accra,Ghana</Text>
          </View>
        </View>
      </ScrollView>
      <View>
      <Text style={styles.ran}>Popular Jobs</Text>
      <Text style={styles.run}>See all</Text>
      <ScrollView vertical={true}>
      <FlatList style={styles.fot} data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}/>
      </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'column',  
    padding: 10,
    margin: 5, 
    backgroundColor: 'white', 
    borderRadius: 8,
    height: '7rem',
  },
  itemImage: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  textContainer: {
    marginLeft: 10,
  },
  itemTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: '-11rem', 
    marginLeft: 70,
  },
  itemDescription: {
    fontSize: 14,
    marginBottom: 52,
    marginLeft: 70,
  },
  itemCategory: {
    fontSize: 14,
    color: 'gray',
    marginLeft: 220,
    marginTop: '3.5rem',
  },
  itemPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    marginLeft: 250,
    marginTop: '-2.5rem',
  },
  jobContainer: {
  flexDirection: 'row', 
  alignItems: 'center', 
  marginTop: '1rem',
  },
  ant: {
  backgroundColor: '#f6f7fc',
  width: '100vw',
  height: '100vh',
  },
  tan: {
  fontSize: '1.5rem',
  fontWeight: 'bold',
  marginLeft: '2rem',
  color: 'black',
  marginTop: '1rem',
  },
  men: {
  fontSize: '1rem',
  marginLeft: '2rem',
  color: 'grey',
  },
  ton: {
  marginLeft: '78vw',
  marginTop: '-4rem',
  height: '5rem',
  width: '5rem',
  },
  input: {
  marginTop: '2rem',
  width: '60vw',
  height: '2.5rem',
  marginLeft: '2rem',
  backgroundColor: '#edeaea',
  borderRadius: '7px',
  paddingLeft: '3rem',
  },
  fit: {
  marginTop: '-1.4rem',
  marginLeft: '3.5rem',
  width: '5rem',
  height: '5rem',
  },
  an: {
  marginTop: '-6rem',
  marginLeft: '82vw',
  height: '2.5rem',
  width: '2.5rem',
  backgroundColor: '#edeaea',
  },
  man: {
  fontWeight: 'bold',
  fontSize: '1.2rem',
  marginLeft: '2rem',
  marginTop: '2rem',
  },
  min: {
  fontSize: '1rem',
  marginLeft: '80vw',
  marginTop: '-1.5rem',
  color: '#edeaea',
  },
  mon: {
  height: '9rem',
  width: '15rem',
  marginLeft: '2rem',
  backgroundColor: '#5385e4',
  marginTop: '-25rem',
  borderRadius: '7px',
  },
  mun: {
  height: '9rem',
  width: '15rem',
  marginLeft: '2rem',
  backgroundColor: '#04284a',
  marginTop: '-25rem',
  borderRadius: '7px',
  },
  one: {
  width: '3rem',
  height: '3rem',
  marginTop: '1rem',
  marginLeft: '1rem',
  },
  two: {
  fontSize: '0.9rem',
  color: 'white',
  marginLeft: '5rem',
  marginTop: '-2.5rem',
  fontWeight: 'bold',
  },
  three: {
  fontSize: '0.7rem',
  color: 'white',
  marginLeft: '5rem',
  marginTop: '0.5rem',
  },
  four: {
  fontSize: '0.8rem',
  color: 'white',
  marginLeft: '2rem',
  marginTop: '3rem',
  },
  five: {
  fontSize: '0.8rem',
  color: 'white',
  marginLeft: '10rem',
  marginTop: '-1rem',
  },
  six: {
  width: '3rem',
  height: '3rem',
  marginTop: '1rem',
  marginLeft: '1rem',
  },
  seven: {
  fontSize: '0.9rem',
  color: 'white',
  marginLeft: '5rem',
  marginTop: '-2.5rem',
  fontWeight: 'bold',
  },
  eight: {
  fontSize: '0.7rem',
  color: 'white',
  marginLeft: '5rem',
  marginTop: '0.5rem',
  },
  nine: {
  fontSize: '0.8rem',
  color: 'white',
  marginLeft: '2rem',
  marginTop: '3rem',
  },
  ten: {
  fontSize: '0.8rem',
  color: 'white',
  marginLeft: '10rem',
  marginTop: '-1rem',
  },
  ran: {
  fontSize: '1rem',
  color: 'black',
  marginLeft: '2rem',
  marginTop: '-20rem',
  fontWeight: 'bold',
  },
  run: {
  fontSize: '0.8rem',
  color: 'grey',
  marginLeft: '20rem',
  marginTop: '-1rem',
  },
  fot: {
  height: '20rem',
  marginLeft: '1rem',
  },
});
