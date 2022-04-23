import React from 'react';
import FeaturedRepcipes from './repcipes/feature';
import OutstandingFood from './repcipes/outstanding';
import TopFood from './repcipes/top';
 
function Home (){
    return (
        <div className="Home">
            <>
                <OutstandingFood/>
                <TopFood/>
                <FeaturedRepcipes/>
            </>
        </div>
    );
}
 
export default Home;