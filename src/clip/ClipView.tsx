import axios from 'axios';
import React from 'react';
import { ScrollView, Text } from 'react-native';
import ClipList from './ClipList';

type Clip = {
    content: string;
    token: string;
    deviceName: string;
    id: number;
    timestamp: number;
};

async function getLocalClips() {
    return [{ content: "test" }, { content: "test2" }];
}

async function getRemoteClips() {
    const { data, status } = await axios.get("http://notifysync.simailadjalim.fr/clipboard?token=FFmkeNAxguFM5My52PhhzlOB_1ZwDr0ureD2kzuewMlhmJ6Ia6YkhcdZd1Nw4SXdLu9Ji0gzVYCfGCcgB8v8zQ");
    return Object.values(data['clipboard']);
}

export default class ClipView extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clips: []
        }
    }

    async componentDidMount() {
        let clips;
        if (this.props.type === "local") clips = await getLocalClips();
        else clips = await getRemoteClips();
        this.setState({clips: clips});
    }

    render(): JSX.Element {
        return <ScrollView>
            <Text style={{ fontWeight: 'bold', fontSize: 30, margin: 20 }}>{this.props.type[0].toUpperCase() + this.props.type.slice(1) + " Clipboard"}</Text>
            <ClipList type={this.props.type} clips={this.state.clips} />
        </ScrollView>;
    }
}