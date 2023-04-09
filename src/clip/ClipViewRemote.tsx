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
        const { data, status } = await axios.get("http://notifysync.simailadjalim.fr/clipboard?token=" + this.props.store.getState().persistedUserReducer.token);
        return Object.values(data['clipboard']);
    }

    async componentDidMount() {
        let clips;
        clips = await this.getClips();
        this.setState({clips: clips});
    }

    render(): JSX.Element {
        let title = "Remote Clipboard";
        return <ScrollView>
            <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 20 }}>{title}</Text>
            <ClipList type={this.props.type} clips={this.state.clips} />
            <Button title="Refresh" onPress={() => this.componentDidMount()} />
            {this.getSignOutBtn()}
        </ScrollView>;
    }
}