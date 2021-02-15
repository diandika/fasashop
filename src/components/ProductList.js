import React, {Component} from 'react';
import './ProductList.css';
import poppin from './img/poppin.png';
import afterglow from './img/afterglow.svg';
import pastel from './img/pastel.svg';
import rose from './img/rose.svg';
import hhw from './img/hhw.svg';
import {Link} from "react-router-dom";

class ProductList extends Component{
    render() {
        return(
            <div className="products container">
                <h3>Produk</h3>
                <div className="row">
                    <div className="col-pr-lg col-pr-md col-pr-sm col-pr-xl">
                        <div className="product-item">
                            <div className="image">
                                <Link to="/p"><img className="product-img" src={poppin} alt="poppin" /></Link>
                            </div>
                            <div className="product-name text-wrap">
                                <span className="name-title">Poppin'party</span>
                            </div>
                            <div className="product-price">
                                <span className="price">Rp 120.000</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-pr-lg col-pr-md col-pr-sm col-pr-xl">
                        <div className="product-item">
                            <div className="image">
                                <img className="product-img" src={afterglow} alt="afglow" />
                            </div>
                            <div className="product-name text-wrap">
                                <span className="name-title">Afterglow</span>
                            </div>
                            <div className="product-price">
                                <span className="price">Rp 120.000</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-pr-lg col-pr-md col-pr-sm col-pr-xl">
                        <div className="product-item">
                            <div className="image">
                                <img className="product-img" src={pastel} alt="pasupare" />
                            </div>
                            <div className="product-name ">
                                <span className="name-title">Pastel*Palettes</span>
                            </div>
                            <div className="product-price">
                                <span className="price">Rp 120.000</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-pr-lg col-pr-md col-pr-sm col-pr-xl">
                        <div className="product-item">
                            <div className="image">
                                <img className="product-img" src={rose} alt="rose" />
                            </div>
                            <div className="product-name ">
                                <span className="name-title">Roselia</span>
                            </div>
                            <div className="product-price">
                                <span className="price">Rp 120.000</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-pr-lg col-pr-md col-pr-sm col-pr-xl">
                        <div className="product-item">
                            <div className="image">
                                <img className="product-img" src={hhw} alt="hhw" />
                            </div>
                            <div className="product-name ">
                                <span className="name-title">Hello, Happy World!</span>
                            </div>
                            <div className="product-price">
                                <span className="price">Rp 120.000</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductList;