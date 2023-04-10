import React from 'react';
import {ScrollView} from 'react-native';
import ClipElementLocal from './ClipElementLocal';
import ClipElementRemote from './ClipElementRemote';

export default class ClipList extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }

  createClipElementLocal(content: string): JSX.Element {
    return <ClipElementLocal store={this.props.store} content={content} />;
  }

  createClipElementRemote(
    content: string,
    deviceName: string,
    timestamp: number,
  ): JSX.Element {
    return (
      <ClipElementRemote
        store={this.props.store}
        content={content}
        deviceName={deviceName}
        timestamp={timestamp}
      />
    );
  }

  render(): JSX.Element {
    let clips;
    if (this.props.type === 'local') {
      clips = this.props.clips.map((entry: any) =>
        this.createClipElementLocal(entry.content),
      );
    } else {
      clips = this.props.clips.map((entry: any) =>
        this.createClipElementRemote(
          entry.content,
          entry.deviceName,
          entry.timestamp,
        ),
      );
    }
    return <ScrollView>{clips}</ScrollView>;
  }
}
