import React from 'react';
import { ScrollView } from 'react-native';
import ClipElement from './ClipElement';

export default class ClipList extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
    }

    createClipElement(title: string): JSX.Element {
        return <ClipElement title={title} />;
    }

    render(): JSX.Element {
        return <ScrollView>
            {this.props.clips.map((entry: any) => this.createClipElement(entry.title))}
        </ScrollView>;
    }
}