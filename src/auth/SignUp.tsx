import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';



export default class SignUp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.signUpFunction = this.signUpFunction.bind(this);
    }

    async signUpFunction() {
        const signInResponse = await fetch('https://notifysync.simailadjalim.fr/user', {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.state.username,
                password: this.state.password
            }),
        });
        const signInJson = await signInResponse.json();
        if (signInJson.status == "ok"){
            const loginResponse = await fetch('https://notifysync.simailadjalim.fr/user', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                }),
            });
            const loginJson = await loginResponse.json(); 

        }
    }

    updateUsername(event: any) {
        this.setState({ username: event.target.value });
    }

    updatePassword(event: any) {
        this.setState({ password: event.target.value });
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text>Sign Up</Text>
                <TextInput placeholder="Pseudo" value={this.state.username} onChange={this.updateUsername} />
                <TextInput placeholder="Mot de Passe" value={this.state.password} onChange={this.updatePassword} />
                <Button title="Sign Up" onPress={this.signUpFunction} />
            </View>
        );
    }
}