import React from 'react'; //
import { useDispatch, useSelector } from "react-redux";
import { changeAvailabilityProduct, deleteProduct } from "../reducers/productsReducer";
import { Link } from 'react-router-dom';
import { Avatar, Box, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material';

// Иконки
import LockIcon from '@mui/icons-material/Lock';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import LockOpenIcon from '@mui/icons-material/LockOpen';

export default function ProductsList() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);


    return (
        <Box component='section' style={{margin: 15}}>
            <h2 style={{color: 'GrayText'}}>Продукты:</h2>
            <Box sx={{display: 'flex', flexWrap: 'wrap'}}>
                {products.map(product => (
                    <Card key={product.id} sx={{ maxWidth: 345, margin: 2}}>

                        <CardHeader
                            avatar={<Avatar sx={{ bgcolor: 'coral' }}>{product.available ? <LockOpenIcon /> : <LockIcon />}</Avatar>}
                            title={product.name}
                            subheader={product.description}
                        />

                        <CardContent>
                            <span style={{color: product.available ? 'green' : 'red'}}>{product.available ? 'доступно' : 'не доступно'}</span>
                            <br/>
                            <span style={{color: 'blue'}}>Цена: {product.price}</span>
                        </CardContent>

                        <CardActions>
                            <Button variant='contained' onClick={e => dispatch(deleteProduct(product.id))} size='small'>
                                <DeleteIcon />
                            </Button>
                            <Button variant='outlined'  onClick={e => dispatch(changeAvailabilityProduct(product.id))} size='small'>
                                <LockIcon />
                            </Button>
                            <Link to={`/edit/${product.id}`}>
                                <Button variant='contained' size='small'>
                                    <EditIcon />
                                </Button>
                            </Link>

                        </CardActions>

                    </Card>
                ))}
            </Box>
        </Box>
    );
};
