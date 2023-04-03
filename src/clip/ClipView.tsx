import React from 'react';
import { ScrollView, Text } from 'react-native';
import ClipList from './ClipList';

export default class ClipView extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    render(): JSX.Element {
        return <ScrollView>
            <Text style={{fontWeight:'bold',fontSize:30, margin:20}}>Local Clipboard</Text>
            <ClipList clips={[{"title":"abcd"}, {"title": "j'aime manger mon caca"}]} />
        </ScrollView>;
    }
}