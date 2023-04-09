import { View, Text, Button } from 'react-native';
import IconVector from 'react-native-vector-icons/FontAwesome5';
import AClipElement from './AClipElement';

export default class ClipElementLocal extends AClipElement {

    constructor(props: any) {
        super(props);
    }

    async sendToRemote() {
        const data = new FormData();
        data.append("token", this.props.store.getState().userReducer.token);
        data.append("content", this.props.content);
        data.append("deviceName", "TODOChangeThisMobileDevice");
        const sendToRemoteResponse = await fetch(
            'https://notifysync.simailadjalim.fr/clipboard',
            {
                method: 'PUT',
                body: data
            }
        );
        const response = await sendToRemoteResponse.json();
        console.log(response);
    }

    render(): JSX.Element {
        return <View style={{ flex: 1, margin: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <Text style={{ fontSize: 20, }}>{this.props.content}</Text>
            <Button title="Send to remote" onPress={() => this.sendToRemote()} />
            <IconVector name="clipboard" size={40} onPress={() => this.onCopy()} />
        </View>;
    }
}