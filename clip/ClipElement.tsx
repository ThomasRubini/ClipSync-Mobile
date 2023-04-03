import React from 'react';
import { View, Text } from 'react-native';

export default class ClipElement extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return <View>
            <Text>{this.props.title}</Text>
        </View>;
    }
}