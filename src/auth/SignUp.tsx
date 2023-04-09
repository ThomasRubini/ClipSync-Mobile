import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { accessibilityProps } from 'react-native-paper/lib/typescript/src/components/MaterialCommunityIcon';
import { setUser } from '../redux/actions';


export default class SignUp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.signUpFunction = this.signUpFunction.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

    async signUpFunction() {
        const signUpResponse = await fetch(
            'https://notifysync.simailadjalim.fr/user?username=' + this.state.username + '&password=' + this.state.password,
            { method: 'PUT' }
        );
        const signUpJson = await signUpResponse.json();
        if (signUpJson.status === "ok") {
            const signInResponse = await fetch(
                'https://notifysync.simailadjalim.fr/user?username=' + this.state.username + '&password=' + this.state.password,
                { method: 'POST' }
            );
            const signInJson = await signInResponse.json();
            if (signInJson.status === "ok") {
                this.props.store.dispatch(setUser(signInJson.token, this.state.username));
            } else console.log(signInJson);
        } else console.log(signUpJson);
    }

    updateUsername(username: string) {
        this.setState({ username: username });
    }

    updatePassword(password: any) {
        this.setState({ password: password });
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 20 }}>Créer un compte</Text>
                <TextInput placeholder="Nom d'utilisateur" value={this.state.username} onChangeText={this.updateUsername} />
                <TextInput placeholder="Mot de Passe" value={this.state.password} onChangeText={this.updatePassword} />
                <Button title="S'enregistrer" onPress={this.signUpFunction} />
            </View>
        );
    }
}