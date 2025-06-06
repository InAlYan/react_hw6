import React from 'react';
import ProductForm from "./ProductForm";
import ProductsList from "./ProductsList";
import { Divider } from '@mui/material';


export default function MainPage() {
    return (
        <div>
            <ProductForm />
            <Divider />
            <ProductsList />
        </div>
    );
};

