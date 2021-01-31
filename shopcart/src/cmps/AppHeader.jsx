import React, {useEffect, useState} from 'react'
import { NavLink } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector } from 'react-redux'
import { eventBusService } from '../services/eventBusService'

export const AppHeader = () => {

    const [count, setCount] = useState(null)

    useEffect(() => {
        eventBusService.on('add-to-cart', getCount)
    }, [])

    const getCount = (count) => {
        setCount(count)
    }

    const { cartProducts } = useSelector(state => state.shopModule)
        return <nav className="app-header flex" >
            <ul className="flex space-between">
                <li><NavLink to="/"><HomeIcon/></NavLink></li>      
                <li><NavLink to="">About Us</NavLink></li>
                <li><NavLink to="">Contact Us</NavLink></li>
            </ul>
            <div className="cart">
            <span>{count}</span>
            <NavLink to="/cart"><ShoppingCartIcon/></NavLink> 
            </div>
        </nav>;
}