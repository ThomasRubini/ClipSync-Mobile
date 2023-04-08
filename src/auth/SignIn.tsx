import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';


export default class SignIn extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clips: []
        }
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text>Sign In</Text>
                <TextInput placeholder="Input" />
                <Button title="Sign In" onPress={() => this.props.navigation.navigate('ClipList')} />
            </View>
        );
    }
}