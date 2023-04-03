import React from 'react';
import { View, Text } from 'react-native';
import IconVector from 'react-native-vector-icons/FontAwesome5';

export default class ClipElement extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return <View style={{flex:1,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:20,}}>{this.props.title}</Text>
            <IconVector name="clipboard" size={40} />
        </View>;
    }
}