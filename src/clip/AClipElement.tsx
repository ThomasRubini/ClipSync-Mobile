import React from 'react';
import { Clipboard } from 'react-native';
//import Toast from 'react-native-simple-toast';

export default class AClipElement extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    onCopy() {
        Clipboard.setString(this.props.content);
        //Toast.show('Put "' + this.props.content + '" in clipboard', Toast.SHORT);
    }

}