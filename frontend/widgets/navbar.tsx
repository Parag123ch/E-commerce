"use client"
import React from 'react'
import  {styled } from "@mui/material/styles"
import {
    Button,
    Container,
    Typography,
    Box
} from '@mui/material'

import {
    ShoppingCart,
    Person,
} from "@mui/icons-material"

// Outer container for full width
const NavbarContainer = styled(Box)({
  width: "100%",
  backgroundColor: "#39fd00",
  padding: "12px"
});

// Inner container with border
const NavbarInner = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
 // White border inside
  borderRadius: "8px", // Optional: rounded corners
  padding: "5px 15px", // Padding inside the border
  maxWidth: "1400px",
  margin: "0 auto"
});

const ButtonGroup = styled(Box)({
  display: "flex",
  gap: "12px", // Increased gap between buttons
  alignItems: "center"
});

export default function Nav(){
    return (
        <NavbarContainer>
            <NavbarInner>
                <Typography 
                    color='#ffff' 
                    sx={{ 
                        fontSize: "1.5rem", 
                        fontWeight: "bold",
                        minWidth: "200px"
                    }}
                >
                    LOGO
                </Typography>
                
                <ButtonGroup>
                    <Button 
                        variant="outlined" 
                        sx={{ 
                            color: '#ffff', 
                            borderColor: '#ffff',
                            borderWidth: '2px',
                            '&:hover': {
                                borderColor: '#ffff',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            },
                            minWidth: '50px',
                            height: '45px'
                        }}
                    >
                        <ShoppingCart />
                    </Button>
                    <Button 
                        variant="outlined" 
                        sx={{ 
                            color: '#ffff', 
                            borderColor: '#ffff',
                            borderWidth: '2px',
                            '&:hover': {
                                borderColor: '#ffff',
                                backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            },
                            minWidth: '50px',
                            height: '45px'
                        }}
                    >
                        <Person />
                    </Button>
                </ButtonGroup>
            </NavbarInner>
        </NavbarContainer>
    )
}