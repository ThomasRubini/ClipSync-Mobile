import {View, Text, Button} from 'react-native';
import IconVector from 'react-native-vector-icons/FontAwesome5';
import AClipElement from './AClipElement';
import Toast from 'react-native-simple-toast';

export default class ClipElementLocal extends AClipElement {
  constructor(props: any) {
    super(props);
  }

  async sendToRemote() {
    const data = new FormData();
    data.append(
      'token',
      this.props.store.getState().persistedUserReducer.token,
    );
    data.append('content', this.props.content);
    data.append('deviceName', 'TODOChangeThisMobileDevice');
    const sendToRemoteResponse = await fetch(
      'https://notifysync.simailadjalim.fr/clipboard',
      {
        method: 'PUT',
        body: data,
      },
    );
    const response = await sendToRemoteResponse.json();
    Toast.show(this.props.content + 'was sent to the server', Toast.SHORT);
  }

  render(): JSX.Element {
    return (
      <View
        style={{
          flex: 1,
          margin: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20}}>{this.props.content.length >28 ?this.props.content.slice(0,24)+"...":this.props.content }</Text>
        <IconVector name="sendTo" size={40} onPress={() => this.sendToRemote()} />
        <IconVector name="clipboard" size={40} onPress={() => this.onCopy()} />
      </View>
    );
  }
}
