import React from 'react';


const Things = ({ match }) => (<div>
    <h1>Things</h1>
    <h3>(match.params.ThingsId)</h3>
</div>);

export default Things;