import React from 'react';
import '../../App.css';
import {Card } from 'antd';

const FruitCard = (props) => {
    let { data } = props;
    // console.log('data ', data)
    return (
        <div style={{textAlign: 'center', display: 'flex', justifyContent: 'center', 'marginTop': '10%' }}>
        <Card bordered={false} style={{ width: 400, 'borderRadius': '10%', opacity: 0.5, 'color': 'grey'}}>

            <div className="card">
                <div className="img-div">
                    <img src={data.image} alt={data.name} />
                </div>
                <div className="desc">
                    <p>Name: {data.name}</p>
                    <p>Weight: {data.weight} {data.unitOfMeasurement}</p>
                </div>
            </div>
        </Card>
        </div>
    )
}
export default FruitCard;