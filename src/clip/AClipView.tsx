import React from 'react';
import { Button } from 'react-native';
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
            console.log("logout");
            this.props.store.dispatch(clearUser());
        }} />
    }

    abstract getClips(): any;

    abstract componentDidMount(): any;
}