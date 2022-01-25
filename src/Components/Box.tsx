import React from 'react'
import { BoxStatus } from './types';

import styles from './box.module.scss';
import classNames from 'classnames/bind';    

const classes = classNames.bind(styles);   // bind inbuilt method che 
//class base component na data pass karva mate

// interface stracture che je app ma contract define kare che classes ne define karva mate
interface BoxProps {
  value: string;
  status: BoxStatus;
}

const Box = ({ value, status }: BoxProps) => {
  const boxStatus = classes({
    correct: status === 'correct',
    present: status === 'present',
    absent: status === 'absent',
    empty: status === 'empty',
    edit: status === 'edit',
  })
  return (
    <div className={boxStatus}>
      {value}
    </div>
  )
}
export default Box;
