import React from 'react';

function Progress() {
  return (
    <div className="circle-wrap">
      <div className="circle">
        <div className="mask full">
          <div className="fill" />
        </div>
        <div className="mask half">
          <div className="fill" />
        </div>
        <div className="inside-circle" />
      </div>
    </div>
  );
}

export default Progress;
