import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Item extends PureComponent {
  render() {
    return (
        <div className="item_container" key={this.props.id}>
            <div className="item_image_block full_width">
              <img className="item_image" src={this.props.image.path} alt={this.props.image.alt}/>       
            </div>
            <div className="item_product_block full_width">
              <div className={`item_product_label  ${(this.props.productLabel).length ? 'background-coloured' : ''}`}>{this.props.productLabel}</div>
            </div>
            <div className="item_title_block full_width">
              <div className="item_title">{this.props.title}</div>
            </div>
            <div className="item_description_block full_width">
              <div className="item_description">{this.props.description}</div>
            </div>
            <div className="item_price_block full_width">
              <div className="item_priceLabel inline">{this.props.priceLabel}</div>
              <div className="item_price inline">{this.props.currency}{(this.props.price).toFixed(2)}</div>
            </div>
            <div className="item_cta_block full_width">
              <a href={this.props.ctaLink} >
                <div className="item_cta">
                  {this.props.cta}
                </div>
              </a>
            </div>
        </div>
    );
  }
}

Item.propTypes = {
  cta: PropTypes.string,
  ctaLink: PropTypes.string,
  currency: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.object,
  price: PropTypes.number,
  priceLabel: PropTypes.string,
  productLabel: PropTypes.string,
  title: PropTypes.string,
};

Item.defaultProps = {
  cta: '',
  ctaLink: '',
  currency: '£',
  description: '',
  image: { path: '', alt: ''},
  price: 0,
  priceLabel: '',
  productLabel: '',
  title: '',
};

export default Item;

