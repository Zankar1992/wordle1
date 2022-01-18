import React from 'react'

import RowCompleted from './RowCompleted';
import RowEmpty from './RowEmpty';

const Wordle = () => {
  return (
    <div>
      <RowCompleted word='milan' solution='komal'/>
      <RowCompleted word='' solution=''/>
      <RowCompleted word='' solution=''/>
      <RowEmpty />
      <RowEmpty />
      <RowEmpty />
    </div>
  )
}

export default Wordle;
