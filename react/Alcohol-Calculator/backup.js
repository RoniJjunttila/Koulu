import { StatusBar } from 'expo-status-bar';
import {ScrollView, Text, TextInput, View, Button } from 'react-native';
import React, {useState} from 'react';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import NumericInput from 'react-native-numeric-input'
import { Switch } from "react-native";
import StyleSheet from './styles';
import {useFonts} from 'expo-font';

export default function App() {

  //todo: fontit, buttonsize, custom color all round(eg. dark inputs colors are too dark, weight input vielä kysymysmerkki ehkä vielä toinen fontti

  const [weight, setWeight] = useState('');
  const [bottles, setBottles] = useState('');
  const [hours, setHours] = useState('');
  const [gender, setGender] = useState('male');
  const [result, setResult] = useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const [ResultColor, setResultColor] = useState('');
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
 
  const [loaded] = useFonts({
    'Ubuntu-Light': require('./assets/fonts/Ubuntu-Regular.ttf')
  })

  if(!loaded) {
    return null;
  }

  const genders = [
    {label: 'Male', value: 'male'},
    {label: 'Female', value: 'female'}
  ];

  function calculate() {
    setResultColor(isEnabled ? StyleSheet.darkfield : StyleSheet.lightfield)
    if(weight === '' || weight === '0' || weight === '00' || weight === '000') {
      setResult('Weight is empty or zero')
    }
    else {
      const liters = bottles * 0.33;
      let grams = liters * 8 * 4.5;
      const burning = weight / 10;
      grams = grams - burning * hours;
      let total = 0;

      if(gender === 'male') {
        total = (grams / (weight * 0.7)).toFixed(2);
        if (total < 0){
          setResult(0);
        } else {
          setResult(total);
        }
      }
      else if(gender === 'female') {
          total = (grams / (weight * 0.6)).toFixed(2);
          if (total < 0){
            setResult(0);
          } else {
            setResult(total);
          }
      }
      if(total < 0.5) {
        setResultColor(StyleSheet.drunkennesslevelgreen);
      }
      else if (total < 0.7) {
        setResultColor(StyleSheet.drunkennesslevelyellow);
      }
      else {
        setResultColor(StyleSheet.drunkennesslevelred);
      }
    }
  }

  return (
    <View style={[isEnabled ? StyleSheet.bgcolordark : StyleSheet.bgcolorlight]}>
      <ScrollView>
        <Text style={[isEnabled ? StyleSheet.darkfield : StyleSheet.lightfield, StyleSheet.alcoholmeter]}>Alcometer</Text>
        <View style={[isEnabled ? StyleSheet.darkfield : StyleSheet.lightfield, StyleSheet.switchColor]}>
              <Switch
              value={isEnabled}
              onValueChange={toggleSwitch}
              />
        </View>
        <Text style={isEnabled ? StyleSheet.darkfield : StyleSheet.lightfield}>Weight</Text>
        <View style={[isEnabled ? StyleSheet.lightcontainer : StyleSheet.darkcontainer, StyleSheet.field]}>
          <TextInput 
          value={weight} 
          onChangeText={text => setWeight(text)}
          style={isEnabled ? 
          {color:StyleSheet.darkfield.color, borderWidth: 1, borderColor: StyleSheet.darkfield.color} 
          : 
          {color:StyleSheet.lightfield.color, borderWidth: 1, borderColor: StyleSheet.lightfield.color}}
          keyboardType = 'number-pad'
          maxLength={3}
          />
        </View> 
        <Text style={isEnabled ? StyleSheet.darkfield : StyleSheet.lightfield}>Bottles</Text>
        <View style={StyleSheet.numericinput}>
          <NumericInput onChange={value => setBottles(value)} 
           textColor={isEnabled ? StyleSheet.darkfield.color : StyleSheet.lightfield.color}
           rightButtonBackgroundColor={isEnabled ? StyleSheet.lightfield.color : StyleSheet.darkfield.color} 
           leftButtonBackgroundColor={isEnabled ? StyleSheet.lightfield.color : StyleSheet.darkfield.color}
           iconStyle={{color: isEnabled ? StyleSheet.darkfield.color : StyleSheet.lightfield.color}}/>
        </View>
        <Text style={isEnabled ? StyleSheet.darkfield : StyleSheet.lightfield}>Hours</Text>
        <View style={StyleSheet.numericinput}>
          <NumericInput onChange={value => setHours(value)}
          textColor={isEnabled ? StyleSheet.darkfield.color : StyleSheet.lightfield.color}
          rightButtonBackgroundColor={isEnabled ? StyleSheet.lightfield.color : StyleSheet.darkfield.color}
          leftButtonBackgroundColor={isEnabled ? StyleSheet.lightfield.color : StyleSheet.darkfield.color}
          iconStyle={{color: isEnabled ? StyleSheet.darkfield.color : StyleSheet.lightfield.color}}/>
        </View>
        <View style={[StyleSheet.radiobuttons]}>
          <RadioForm
          selectedLabelColor={isEnabled ? StyleSheet.darkfield.color : StyleSheet.lightfield.color}
          labelColor={isEnabled ? StyleSheet.darkfield.color : StyleSheet.lightfield.color}
          buttonSize = {10}
          radio_props={genders}
          initial={0}
          onPress={(value) => {setGender(value)}}
          ></RadioForm>
        </View>
        <Text style={[isEnabled ? 
          {color: StyleSheet.darkfield.color, textAlign: StyleSheet.textToCenter.textAlign} 
          : 
          {color:StyleSheet.lightfield.color, textAlign: StyleSheet.textToCenter.textAlign}, 
          ResultColor]}>{result}</Text>
        <View style={StyleSheet.button}> 
          <Button onPress={calculate} title={"Calculate"}></Button>
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </View>
  );
}

