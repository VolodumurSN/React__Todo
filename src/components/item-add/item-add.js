import React from 'react';

import './item-add.css';

const ItemAdd = ({ onAdd }) => {
    return (

        <div className="add-group">

            <button type="button"
                    className="btn btn-outline-secondary btn-sm"
                    onClick={ () => onAdd('Hello App') }>

                <i className="fa fa-plus" />
            </button>

        </div>


    );
};

export default ItemAdd;
