import axios from 'axios';
import React from 'react';
import { ScrollView, Text, Button } from 'react-native';
import ClipList from './ClipList';
import AClipView from './AClipView';

export default class ClipViewRemote extends AClipView {
    constructor(props: any) {
        super(props);
    }

    async getClips() {
        const { data, status } = await axios.get("http://notifysync.simailadjalim.fr/clipboard?token=FFmkeNAxguFM5My52PhhzlOB_1ZwDr0ureD2kzuewMlhmJ6Ia6YkhcdZd1Nw4SXdLu9Ji0gzVYCfGCcgB8v8zQ");
        return Object.values(data['clipboard']);
    }

    async componentDidMount() {
        let clips;
        clips = await this.getClips();
        this.setState({clips: clips});
    }

    render(): JSX.Element {
        let title = "Remote Clipboard";
        let notTitle = "Local Clipboard";
        return <ScrollView>
            <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 20 }}>{title}</Text>
            <ClipList type={this.props.type} clips={this.state.clips} />
            <Button title="Refresh" onPress={() => this.componentDidMount()} />
            {this.getSignOutBtn()}
        </ScrollView>;
    }
}