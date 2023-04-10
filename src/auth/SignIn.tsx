import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { setUser } from '../redux/actions';

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
        const data = new FormData();
        data.append("username", this.state.username);
        data.append("password", this.state.password);
        const signInResponse = await fetch(
            'https://notifysync.simailadjalim.fr/user',
            {
                method: 'POST',
                body: data
            }
        );
        const signInJson = await signInResponse.json();
        if (signInJson.status === "ok") {
            this.props.store.dispatch(setUser(signInJson.token));
        } else console.log(signInJson);
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
                <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 20 }}>Connexion</Text>
                <TextInput placeholder="Nom d'utilisateur" value={this.state.username} onChange={this.updateUsername} />
                <TextInput placeholder="Mot de Passe" value={this.state.password} onChange={this.updatePassword} />
                <Button title="Se connecter" onPress={this.signInFunction} />
            </View>
        );
    }
}