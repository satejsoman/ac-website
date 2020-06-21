import React from 'react';
import { Table, Badge } from 'react-bootstrap';


export const Details = ({viztype, geography}) => {
    var unit = (geography === "IN") ? "state" : "district"
    
    if (viztype === "statusmap") {
        return (<div>
        <p>
        An adaptive control policy sorts geographic units into different policy regimes based on a certain trigger. In the map displayed, each {unit} is colored according to a policy regime based on its <b>reproductive rate</b> (<i>R<sub>t</sub></i>): the number of additional cases in a community that a single person creates. 
        </p>
        <p>
            In the policy presented, we restrict movement in each {unit} based on the following criteria:
            <br></br>
            <Table>
            <thead>
                <tr style={{"text-align": "center"}}> <th>Policy Regime</th> <th>Trigger</th> <th>Description</th> </tr>
                <tr> <td><Badge pill size="lg" variant="danger">  CRITICAL </Badge></td>  <td><i>R<sub>t</sub></i> &ge; 2 </td></tr>
                <tr> <td><Badge pill size="lg" variant="warning">  MODERATE </Badge></td> <td><i>1 &le; R<sub>t</sub></i> &lt; 2 </td> </tr>
                <tr> <td><Badge pill size="lg" variant="success"> IMPROVING </Badge></td> <td><i>R<sub>t</sub></i> &lt; 1</td> </tr>
            </thead>
            </Table>
        </p>
        </div>
        )
    } else {
        return (<p>blah</p>)
    }
}

// export default Description;