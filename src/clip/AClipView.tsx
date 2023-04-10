import React from 'react';
import { Button, Text } from 'react-native';
import { clearUser } from '../redux/actions';

export default abstract class AClipView extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            clips: []
        }
    }

    getSignOutBtn() {
        return <Button title="Sign out" onPress={() => {
            this.props.store.dispatch(clearUser());
        }} />
    }

    abstract getClips(): any;

    abstract componentDidMount(): any;
}