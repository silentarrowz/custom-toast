import React, { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { useToast } from "../../hooks/useToast";
import { Button } from "antd";
import {
  CheckCircleFilled,
  CloseCircleFilled,
  WarningFilled,
  InfoCircleFilled,
  CloseOutlined
} from '@ant-design/icons'
import './Toast.css';

const types = {
  success: <CheckCircleFilled style={{color:'green'}}  />,    
  error: <CloseCircleFilled style={{color:'red'}} />,    
  warning: <WarningFilled style={{color:'orange'}} />,   
  info: <InfoCircleFilled style={{color:'#add8e6'}}/>,   
};

const Toast = ({ message, type, id }) => {
  const [dismissed, setDismissed] = useState(false);
  console.log('type in toast : ', type)
  const toast = useToast();
  const timerId = useRef(null);
  const icon = types[type];

  useEffect(()=>{
    timerId.current = setTimeout(()=>{
      handleDismiss();
    },4000)

    return () => {
      clearTimeout(timerId.current)
    }
  },[])

 
  const handleDismiss = ()=> {
    setDismissed(true);
    toast.remove(id);
  }
  return (
   <div 
   className={`flex gap-2 align-middle justify-between h-14 p-2 pt-4 shadow-lg rounded-md toast ${dismissed?'toast-dismissed':''}`}
   >
    <span>{icon}</span>
    <p className="toast-message">{message}</p>
    <Button shape="circle" type="text" 
      icon={<CloseOutlined style={{fontSize:'10px', }} />} 
      onClick={handleDismiss} className="dismiss-button">       
    </Button>
   </div>
  );
};

Toast.defaultProps = {
  type: "success",
  message: "Add a meaningful toast message here.",
  id:2342
};

Toast.propTypes = {
  type: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Toast;
