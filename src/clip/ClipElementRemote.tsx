import { View, Text } from 'react-native';
import AClipElement from './AClipElement';

export default class ClipElementRemote extends AClipElement {

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return <View style={{flex:1,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flex:1,margin:10,flexDirection:'column'}}>
                <Text style={{fontSize:20,}}>{this.props.content}</Text>
                <Text style={{fontSize:10,}}>{this.props.deviceName}</Text>
                <Text style={{fontSize:10,}}>{this.props.timestamp}</Text>
            </View>
        </View>;
    }
}