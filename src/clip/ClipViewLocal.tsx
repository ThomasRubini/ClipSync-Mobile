import axios from 'axios';
import React from 'react';
import { ScrollView, Text, Button, Clipboard } from 'react-native';
import ClipList from './ClipList';
import AClipView from './AClipView';
import { addToLocal as addToLocalStorage } from '../redux/actions';


export default class ClipViewLocal extends AClipView {

    constructor(props: any) {
        super(props);
        this.state = {
            localClips : []
        };
        this.getClips();
        this.props.store.subscribe(() => {
            this.setState({localClips : this.props.store.getState().persistedUserReducer.clips });
        });
    }

    getClips() {
        const clips = this.props.store.getState().persistedUserReducer.clips;
        this.setState({localClips: clips});
    }

    async addToLocal(){
        console.log("should add clip");
        this.props.store.dispatch(addToLocalStorage(await Clipboard.getString()));
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
            <Button title="Coller depuis le presse papier" onPress={() => {this.addToLocal}} />
            <ClipList store={this.props.store} type={this.props.type} clips={this.state.clips} />
            {this.getSignOutBtn()}
        </ScrollView>;
    }
}