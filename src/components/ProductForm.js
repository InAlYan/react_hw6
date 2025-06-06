// Компонент для ввода нового и редактирования существующего продуктов

import React from 'react';
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, updateProduct } from "../reducers/productsReducer";
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Button, Checkbox, FormControlLabel, TextField } from '@mui/material';


export default function ProductForm() {

    const dispatch = useDispatch();
    const products = useSelector(state => state.products);

    // Для программного перехода на маршрут '/' после сохранения или редактирования продукта
    const navigate = useNavigate();
    const navigateToRoot = () => {navigate('/')};

    const {productId} = useParams();

    // Если продукт новый или уже существующий
    let product = undefined;
    if (productId) product = products.find(product => product.id === parseInt(productId));

    const [name, setName] = useState(product ? product.name : '');
    const handleSetName = e => setName(e.target.value);

    const [description, setDescription] = useState(product ? product.description : '');
    const handleSetDescription = e => setDescription(e.target.value);

    const [price, setPrice] = useState(product ? product.price : 0);
    const handleSetPrice = e => setPrice(e.target.value);

    const [availability, setAvailability] = useState(product? product.available : true);
    const handleSetAvailability = e => setAvailability(!availability);

    const handleProduct = e => {
        // Не задано имя или описание или цена, тогда выходим
        if (!name || !description || !price) return;

        const processedProduct = {
                id: product ? product.id: products.length > 0 ? products[products.length - 1].id + 1 : 1,
                name: name,
                description: description,
                price: price,
                available: availability
        };

        // Редактируется существующий продукт
        if (product) {
            dispatch(updateProduct(processedProduct));
            // Для программного перехода на маршрут '/' после редактирования продукта
            navigateToRoot();
        }
        // Создается новый продукт
        else {
            dispatch(addProduct(processedProduct));
        };

        setName('');
        setDescription('');
        setPrice(0);
        setAvailability(true);
    };

    return (
        <Box component='section' sx={{ '& > :not(style)': { m: 2, width: '25ch' } }}>
            <h2 style={{color: 'GrayText'}}>{product ? 'Редактировать продукт:' : 'Добавить новый продукт:'}</h2>
            <TextField label='наименование продукта' variant='outlined' value={name} onChange={handleSetName} />
            <TextField label='описание продукта' variant='outlined' value={description} onChange={handleSetDescription} />
            <TextField type='number' label='цена продукта' variant='outlined' value={price} onChange={handleSetPrice} />
            <FormControlLabel control={<Checkbox checked={availability} onChange={handleSetAvailability} />} label='Доступно' />
            <Button variant='contained' onClick={handleProduct}>Сохранить</Button>
        </Box>
    );
};
