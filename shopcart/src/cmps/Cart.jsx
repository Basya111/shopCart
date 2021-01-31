import { useCallback, useEffect, useState } from 'react'
// import { loadMyCart} from '..store/actions/shopActions'
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      maxWidth: 750,
      margin: 'auto'
    },
  });

export function Cart (){
    const classes = useStyles();
    const { cartProducts } = useSelector(state => state.shopModule)
    // const dispatch = useDispatch()

    // useEffect(() => {
    //     dispatch(loadMyCart())
    // }, [])

  
    if(!cartProducts) return <div>Loading...</div>
    console.log('cartProducts', cartProducts);
    return (
        <TableContainer component={Paper} >
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="right">Img</TableCell>
                <TableCell align="right">Amount</TableCell>
              
              </TableRow>
            </TableHead>
            <TableBody>
              {cartProducts.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell align="right">{item.name}</TableCell>
                  <TableCell align="right">{item.price}</TableCell>
                  <TableCell align="right"><img src={item.imgUrl} style={{width: '100px'}}/></TableCell>
                  <TableCell align="right">{item.amount}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );
}

