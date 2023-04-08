import axios from 'axios';
import React from 'react';
import { View, Text, Button, TextInput } from 'react-native';



export default class SignUp extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clips: [],
            username: '',
            password: ''
        }
        this.updateUsername = this.updateUsername.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.signIn = this.signIn.bind(this);
    }

    async signIn() {
        const { data, status } = await axios.put("http://notifysync.simailadjalim.fr/user",
            { email: this.state.username, password: this.state.password });
        if (status === 200) {
            const { data, status } = await axios.post("http://notifysync.simailadjalim.fr/user",
            { email: this.state.username, password: this.state.password });
            this.props.navigation.navigate('ClipList');
        }
    }

    updateUsername(event: any){
        this.setState({username: event.target.value});
    }

    updatePassword(event: any){
        this.setState({password: event.target.value});
    }

    render(): React.ReactNode {
        return (
            <View>
                <Text>Sign Up</Text>
                <TextInput placeholder="Pseudo" value={this.state.username} onChange={this.updateUsername}/>
                <TextInput placeholder="Mot de Passe" value={this.state.password} onChange={this.updatePassword}/>
                <Button title="Sign Up" onPress={this.signIn} />
            </View>
        );
    }
}