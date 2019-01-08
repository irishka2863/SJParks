import React from 'react';
import Graph from './Graph';
import Post from './Historypost';
import Button from '../UI/Generic/Button';

class Updates extends React.Component {
    constructor() {
        super();
        this.state = {
            history: [
                {_id: '825y78',
                name: 'Jeff Tomson',
                date: '11/28/18',
                time: '11:20',
                parkIDs: ['ROthgSE', 'ROzdfSE', 'ROSzdE', 'ROzddSE', 'DFzndgROSE', 'ROzdfSE'],
                message: 'Bramhall Park and Rose Garden, \nDear resident, we recommend not visiting Rose Garden or Bramhall Park due to a fire in the Almaden area. We will update you as soon as it is safe to visit the park.'
                },
                {_id: '825y78',
                name: 'Jeff Tomson',
                date: '11/28/18',
                time: '11:20',
                parkIDs: ['ROthgSE', 'ROzdfSE', 'ROSzdE', 'ROzddSE', 'DFzndgROSE', 'ROzdfSE'],
                message: 'Bramhall Park and Rose Garden, \nDear resident, we recommend not visiting Rose Garden or Bramhall Park due to a fire in the Almaden area. We will update you as soon as it is safe to visit the park.'
                },
            ]
        };
    }

    render() {
        return (
        <div>
            <div>
                <Graph />
                <Button to='/api/message' name='New Text Update' />
            </div>
            {this.state.history.map(post => (
                <Post key={post._id} post={post} />
            ))}
        </div>
        );
    }
}
export default Updates;
