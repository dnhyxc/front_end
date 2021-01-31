import React from 'react';
import { Input } from 'antd';
import { config } from '../../config/constants';
import Header from '../../components/Header';
import styles from './index.less';

const Redux: React.FC = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
        {
          config.map(i => {
            return (
              <div key={i.key} className={styles.info}>
                <span className={styles.text}>{i.info}</span>
                <Input className={styles.input} placeholder={i.placeholder} />
              </div>
            )
          })
        }
      </div>
      <div className={styles.right}>
        <Header>
          <div>REDUX</div>
        </Header>
      </div>
    </div>
  )
};

export default Redux;
