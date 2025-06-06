import React, {useEffect} from 'react' // useEffect는 왜 {} 안에 넣는거지?
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {Message} from '../components/Message'
import {addToCart} from '../actions/cartActions'


function CartScreen({ match, Location, history}) {
    const productId = useParams.id
    const qty = Location.search ? Number(Location.search.split('=')[1]) :  1

    const dispatch = useDispatch()

    const cart = useSelector(state => state.cart)
    const { cartItems } = cart
    console.log('cartItems: ', cartItems)

    useEffect(() => {
        if(productId){
            dispatch(addToCart(productId, qty))
        }
    }, [dispatch, productId, qty])
    return (
        <div>
            <Col md={8}>
                <h1>Shopping Cart</h1>
                {cartItems.length === 0}
            </Col>
            <Col md={4}>
            
            </Col>
        </div>
    )
}
export default CartScreen
