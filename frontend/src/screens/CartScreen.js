import React, {useEffect} from 'react' // useEffect는 왜 {} 안에 넣는거지?
import {Link, useParams} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Row, Col, ListGroup, Image, Form, Button, Card} from 'react-bootstrap'
import {Message} from '../components/Message'
import {addToCart} from '../actions/cartActions'


function CartScreen({ match, Location, history}) {
    const productId = useParams.id
    const qty = Location.search

    console.log('qty:', qty)

    return (
        <div>
            Cart
        </div>
    )
}
export default CartScreen
