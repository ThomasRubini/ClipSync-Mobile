import { View, Text } from 'react-native';
import AClipElement from './AClipElement';

export default class ClipElementLocal extends AClipElement {

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return <View style={{flex:1,margin:10,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{fontSize:20,}}>{this.props.content}</Text>
        </View>;
    }
}