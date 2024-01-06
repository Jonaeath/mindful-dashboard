import React, { useContext } from 'react';
import { searchContext } from '../../Context/SearchProvider/SearchProvider';

const DisplaySearchItem = () => {
    const {auth, setAuth} = useContext(searchContext)

    return (
        <div>
            <h1>
                {
                    auth?.result.length < 1 
                    ? "No data Found"
                    : `Found ${auth?.result.length}`
                }
            </h1>
        </div>
    );
};

export default DisplaySearchItem;