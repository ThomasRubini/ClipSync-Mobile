import axios from 'axios';
import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import ClipList from './ClipList';
import AClipView from './AClipView';


export default class ClipViewLocal extends AClipView {

    constructor(props: any) {
        super(props);
    }

    getClips() {
        return [{ content: "test" }, { content: "test2" }];
    }

    componentDidMount() {
        let clips;
        clips = this.getClips();
        this.setState({clips: clips});
    }

    render(): JSX.Element {
        let title = "Local Clipboard";
        let notTitle = "Remote Clipboard";
        return <ScrollView>
            <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 20 }}>{title}</Text>
            <ClipList type={this.props.type} clips={this.state.clips} />
            {this.getSignOutBtn()}
        </ScrollView>;
    }
}