import { Box, Image } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';

const BookDetail = () => {
    const [params] = useSearchParams();
    console.log(params.get("title"));

    console.log("params : " + params);  
    const {isbn} = useParams();

    console.log("isbn : " + isbn);
    
    return (
    <div>
    </div>
    );
}

export default BookDetail;