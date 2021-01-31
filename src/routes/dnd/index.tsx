import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import Container from './container';

import styles from './index.less';

interface SelfState {
  name: string;
}

interface SelfProps {
  age: number;
}

class ReactDnd extends PureComponent<SelfProps, SelfState> {
  constructor(props: SelfProps) {
    super(props);
    this.state = {
      name: '',
    };
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <Header title={'REACTDND'}>
            search
          </Header>
        </div>
        <div className={styles.dndContent}>
          <div className={styles.left}>
            <Container />
          </div>
          <div className={styles.right}>
            right
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default ReactDnd;
