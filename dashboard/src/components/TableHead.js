import React from 'react';
import { handleSort } from '../utilsFunc/utils';
function TableHead({classname, headName, keyName , sortConfig, setSortConfing, data, setData }) {
    return ( 
        <th scope="col" className={classname}
            onClick={() => handleSort(keyName, sortConfig, setSortConfing, data, setData)} >   
            <div className='d-flex justify-content-between'>
                <p className='title-smaller m-0'>{headName}</p>
                {
                    sortConfig.key === keyName ? <span className=''>
                        {
                            sortConfig.direction === 'asc' ? <i class="fa fa-arrow-up align-self-center" aria-hidden="true"></i> : 
                            (sortConfig.direction === 'desc' ? <i class="fa fa-arrow-down align-self-center" aria-hidden="true"></i> : null)
                        }
                        </span> : null
                }
            </div>
        </th>
     );
}

export default TableHead;