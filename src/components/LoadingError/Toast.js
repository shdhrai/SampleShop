import React from 'react';
import {ToastContainer} from 'react-toastify';

const Toast=()=>{
  return(
    <div>
      <ToastContainer
        position="top-right"
        hide ProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
      />
      {/*Same as*/}
      <ToastContainer/>
    </div>
  );
};

export default Toast;
                           