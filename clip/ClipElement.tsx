import React from 'react';
import { View, Text, Clipboard } from 'react-native';
import IconVector from 'react-native-vector-icons/FontAwesome5';
import Toast from 'react-native-simple-toast';

export default class ClipElement extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    onCopy() {
        Clipboard.setString(this.props.title);
        Toast.show('Put "' + this.props.title + '" in clipboard', Toast.SHORT);
    }

    render(): JSX.Element {
        return <View style={{flex:1,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:20,}}>{this.props.title}</Text>
            <IconVector name="clipboard" size={40} onPress={() => this.onCopy()} />
        </View>;
    }
}