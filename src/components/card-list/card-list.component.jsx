import { Component } from 'react';
import "./card-list.styles.css";


import CardConatiner from '../card-container/card-container.component';

class CardList extends Component {

    render() {
        const { monsters } = this.props;

        return (
            <div className='card-list'>
                {monsters.map((monster) =>
                    <CardConatiner monster={monster} />
                )}
            </div>
        )
    }
}

export default CardList;