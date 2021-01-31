import React, { useState, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import menuList from '../../config/menu';
import MScrollbar from '../MScrollbar';
import styles from './index.less';

const MMenu: React.FC = () => {
  const [isUp, setIsUp] = useState<boolean>(false);
  const [isMediaUp, setIsMediaUp] = useState<boolean>(false);
  const [isApplyUp, setisApplyIsUp] = useState<boolean>(false);
  const [isAdvancedUp, setIsAdvancedUp] = useState<boolean>(false);
  const [mediaKey, setMediaKey] = useState<string>();
  const [applyKey, setApplyKey] = useState<string>();
  const [advancedKey, setAdvancedKey] = useState<string>();

  const menuRef: any = useRef();

  const onTitleClick = (key: string) => {
    setIsUp(!isUp);
    switch (key) {
      case 'media':
        setIsMediaUp(!isMediaUp);
        setMediaKey(key);
        break;
      case 'frame':
        setisApplyIsUp(!isApplyUp);
        setApplyKey(key);
        break;
      case 'advanced':
        setIsAdvancedUp(!isAdvancedUp);
        setAdvancedKey(key);
        break;

      default:
        break;
    }
  };

  return (
    <div className={styles.menu}>
      <div className={styles.menuHeader}>
        <div className={styles.title}>FRONTEND</div>
      </div>
      <div className={styles.menuContainer}>
        <MScrollbar>
          {
            menuList.map(i => {
              return (
                <div key={i.key} className={styles.menuList}>
                  <div className={styles.menuTitle}>
                    <div className={styles.title} onClick={() => onTitleClick(i.key)}>
                      {i.title}
                      {
                        (isMediaUp && i.key === mediaKey) || (isApplyUp && i.key === applyKey) || (isAdvancedUp && i.key === advancedKey)
                          ? <CaretDownOutlined className={styles.Icon} />
                          : <CaretUpOutlined className={styles.Icon} />
                      }
                    </div>
                    <div
                      className={(isMediaUp && i.key === mediaKey) || (isApplyUp && i.key === applyKey) || (isAdvancedUp && i.key === advancedKey)
                        ? styles.close : styles.itemList}
                      ref={menuRef}
                    >
                      {i.children.map(i => {
                        return (
                          <div key={i.key} className={styles.menuItem}>
                            <NavLink activeClassName={styles.active} className={styles.link} to={i.path}>{i.title}</NavLink>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </div>
              )
            })
          }
        </MScrollbar>
      </div>
    </div>
  )
}

export default MMenu;