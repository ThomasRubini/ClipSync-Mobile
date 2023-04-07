import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import ClipList from './ClipList';


export default abstract class AClipView extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clips: []
        }
    }

    abstract getClips(): any;

    abstract componentDidMount(): any;
}