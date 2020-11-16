import React, { Component } from 'react';
import FruitCard from '../fruitCard';
import '../../App.css';
import { Button, Input, Tooltip } from 'antd';
import API from '../../API';
import { SearchOutlined } from '@ant-design/icons';


const { Search } = Input;

class FruitPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            searched: false
        }
    }

    search = async (value) => {
        try {
            if (!value) {
                this.handleError();
                return
            }
            const response = await API.get(`/fruits/${value}`)
            if (response.status === 200) {
                let fruitObj = response.data.data;
                this.setState({ data: [fruitObj], searched: true });
            } else {
                this.handleError();
            }
        } catch (err) {
            console.log(err)
            this.handleError();
        }
    }



    getAllFruits = async () => {
        try {
            const response = await API.get('/fruits');
            if (response.status === 200) {
                let allFruits = response.data.data
                this.setState({ data: allFruits, searched: true })
                // console.log(this.state.data)
            } else {
                this.handleError()
            }
        } catch (err) {
            console.log(err)
            this.handleError()
        }
    }

    handleError = () => {
        this.setState({
            data: [],
            searched: true
        });
    }

    render() {
        let { data, searched } = this.state;
        // console.log('this.state ', this.state);
        return (
            <div>
                <div style={{ textAlign: 'center', 'marginTop': '1%', 'fontSize': '30px' }}>
                    <h1 style={{ 'color': 'white' }}>Fruit Glossary</h1>
                </div>


                <div className='mainContainer'>
                    <div className='searchContainer'>
                        <div className='searchBar'>
                            <Search 
                                placeholder="Search for either: apple, banana, cherry, mango, strawberry, or watermelon"
                                enterButton
                                size="large"
                                onSearch={value => this.search(value)}
                                allowClear
                            />
                        </div>
                        <div className='searchButton'>
                            <Tooltip title="search">
                                <Button type="primary" onClick={this.getAllFruits}icon={<SearchOutlined />}>Load all fruits!</Button>
                            </Tooltip>
                        </div>
                    </div>
                    {searched && data.length < 1 ? (

                        <div className="fruitContainer">
                            <h2 style={{ color: 'white', fontSize: '40px' }}>No fruits available</h2>
                        </div>

                    ) : (
                            <div className="fruitContainer">
                                {data.map((fruitObj) => {
                                    return (
                                        <FruitCard key={fruitObj.name} data={fruitObj} />
                                    )
                                })}
                            </div>
                        )}
                </div>
            </div>

        )
    }
}
export default FruitPage;