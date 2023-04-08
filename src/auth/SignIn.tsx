import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';


export default class SignIn extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.signInFunction = this.signInFunction.bind(this);
    }

    async signInFunction() {
    }

    updateUsername(event: any) {
        this.setState({username: event.target.value});
    }

    updatePassword(event: any) {
        this.setState({password: event.target.value});
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text>Sign In</Text>
                <TextInput placeholder="Pseudo" value={this.state.username} onChange={this.updateUsername}/>
                <TextInput placeholder="Mot de Passe" value={this.state.password} onChange={this.updatePassword}/>
                <Button title="Sign In" onPress={this.signInFunction} />
            </View>
        );
    }
}