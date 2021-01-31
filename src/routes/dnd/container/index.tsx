import React, { useCallback, useState } from 'react';
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Motion from '../motion';
import styles from './index.less';

const Container: React.FC = () => {
  const [hideSourceOnDrag, setHideSourceOnDrag] = useState(true)
  const toggle = useCallback(() => setHideSourceOnDrag(!hideSourceOnDrag), [
    hideSourceOnDrag,
  ])
  return (
    <DndProvider backend={HTML5Backend}>
      <div className={styles.dndContainer}>
        <Motion hideSourceOnDrag={hideSourceOnDrag} />
        <div>
          <label htmlFor={styles.hideSourceOnDrag}>
            <input
              id="hideSourceOnDrag"
              type="checkbox"
              checked={hideSourceOnDrag}
              onChange={toggle}
            />
            <small>Hide the source item while dragging</small>
          </label>
        </div>
      </div>
    </DndProvider>
  )
}

export default Container;
