import React from 'react'

function Overview() {
    return (
        <>
            <div className="row">
                <div class="side2"><h3>Overview</h3></div>
                <div className="main">
                    <h3 style={{marginLeft:70,marginBottom:40,marginTop:0}}>Automibile Overview</h3>
                    <div className='boxes'>
                        <div className='counttag'>
                            <label >Automobile Tags Count</label><br ></br>
                            <label className='count'>3</label>
                        </div>
                        <div className='counttag'>
                            <label >All Tags Count</label><br ></br>
                            <label className='count'>5</label>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Overview
