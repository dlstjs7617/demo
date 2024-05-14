import { Heading, Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react/dist";
import React from 'react';

const Header = () => {
    return (
        <>
        <Heading>
            검색 서비스
        </Heading>
        <Breadcrumb>
            <BreadcrumbItem>
                <BreadcrumbLink href='/demo'>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
                <BreadcrumbLink href='/demo/video'>Video</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href='/demo'>Book</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        </>
    );
};

export default Header;