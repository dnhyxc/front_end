import React from 'react';
import Header from '../../components/Header';
import styles from './index.less';


const Home: React.FC = () => {
  return (
    <div className={styles.contentWrapper}>
      <Header title='HOME'>
        <div>
          header
        </div>
      </Header>
      <div className={styles.content}>content</div>
    </div>
  )
}

export default Home;
