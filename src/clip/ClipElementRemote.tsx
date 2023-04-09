import { View, Text } from 'react-native';
import IconVector from 'react-native-vector-icons/FontAwesome5';
import AClipElement from './AClipElement';

export default class ClipElementRemote extends AClipElement {

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        const date= new Date(this.props.timestamp*1000);
        console.log(this.props.timestamp*1000);
        return <View style={{flex:1,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <View style={{flex:1,margin:10,flexDirection:'column'}}>
                <Text style={{fontSize:20,}}>{this.props.content.length >28 ?this.props.content.slice(0,24)+"...":this.props.content}</Text>
                <Text style={{fontSize:10,}}>{this.props.deviceName}</Text>
                <Text style={{fontSize:10,}}>{date.getHours() + ":" + date.getMinutes() + ", "+ date.toDateString()}</Text>
            </View>
            <IconVector name="clipboard" size={40} onPress={() => this.onCopy()} />
        </View>;
    }
}