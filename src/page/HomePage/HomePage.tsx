import * as React from 'react';

import { inject, observer } from 'mobx-react';

import { AppState } from '../../store/AppState';

class HomePage extends React.Component<any, any> {
  render() {
    return <h1>Hello Window: width {this.props.winWidth}, height {this.props.winHeight}</h1>
  }
}

export default inject(({ ui }: AppState) => {
  return {
    winWidth: ui.winWidth,
    winHeight: ui.winHeight
  };
})(observer(HomePage));
