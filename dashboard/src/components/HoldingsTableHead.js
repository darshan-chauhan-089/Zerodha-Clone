import React from 'react';
function HoldingsTableHead({classname, headName, keyName, handleSortFnc , sortConfigObj}) {
    return ( 
        <th scope="col" className={classname}
            onClick={() => handleSortFnc(keyName)}>   
            <div className='d-flex justify-content-between'>
                <p className='title-smaller m-0'>{headName}</p>
                {
                    sortConfigObj.key === keyName ? <span className=''>
                        {
                            sortConfigObj.direction === 'asc' ? <i class="fa fa-arrow-up align-self-center" aria-hidden="true"></i> : 
                            (sortConfigObj.direction === 'desc' ? <i class="fa fa-arrow-down align-self-center" aria-hidden="true"></i> : null)
                        }
                        </span> : null
                }
            </div>
        </th>
     );
}

export default HoldingsTableHead;