import React from 'react';
import Context from '../store/context';
import Item from "./item";

export default () => (
    <section id="grid_container">

        <Context.Consumer>
            {context => (
                context.state.data.map((el, index) => (
                    <div key={index} className="grid_item">
                        <Item {...el} />
                    </div>
                ))
            )}
        </Context.Consumer>
    </section>
)