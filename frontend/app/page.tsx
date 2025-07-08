"use client"
import React from "react"
import Nav from "../widgets/navbar"
import Prdtcard from "../widgets/prdt_card"
import {

    Grid,
    Box,
    Container
} from "@mui/material"

const styles = {
    cardGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        gap: '10px',
        padding: '5px'
    }
};

export default function Page() {
  return (
    <div>
        <Nav >
        </Nav>
        <Box margin="30px 5px">

        <div style={styles.cardGrid}>
        <Prdtcard 
        desc="Twenty One Pilots Burrito"
        cal="1050 cal"
        img="https://th.bing.com/th/id/OIP.s3dCXQBtluawLjmjFUaq_QHaE8?pid=ImgDet&rs=1"
        />
      <Prdtcard
        desc=""
        cal="590 cal"
        img="https://th.bing.com/th/id/OIP.7WRBSTwImA0itBARFvr6oQHaHa?pid=ImgDet&rs=1"
        />
      <Prdtcard
        desc="Twenty One Pilots Burrito"
        cal="1850 cal"
        img="https://th.bing.com/th/id/OIP.s3dCXQBtluawLjmjFUaq_QHaE8?pid=ImgDet&rs=1"
        />
      <Prdtcard
        desc="Twenty One Pilots Burrito"
        cal="150 cal"
        img="https://th.bing.com/th/id/OIP.s3dCXQBtluawLjmjFUaq_QHaE8?pid=ImgDet&rs=1"
        />
        </div>
        </Box>
    </div>
  )
}