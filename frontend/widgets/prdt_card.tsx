"use client"
import React from "react";
import { styled } from "@mui/material/styles";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Typography,
  Box,
} from "@mui/material";

export interface Data {
  img: string;
  desc: string;
  cal: string;
}

// Simplified card container - no nested roots
const StyledCard = styled(Card)({
  width: "100%",
  maxWidth: "320px",
  height: "400px", // Fixed height for consistency
  display: "flex",
  flexDirection: "column",
  margin: "0 auto", // Center the card
  position: "relative",
  overflow: "hidden"
});

const StyledCardMedia = styled(CardMedia)({
  height: "180px",
  position: "relative"
});

const ChipContainer = styled(Box)({
  position: "absolute",
  top: "8px",
  left: "8px",
  zIndex: 1
});

const StyledChip = styled(Chip)({
  backgroundColor: "#ff4444",
  color: "#ffffff",
  fontSize: "0.7rem",
  height: "24px"
});

const StyledCardContent = styled(CardContent)({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px",
  flex: 1, // Take remaining space
  gap: "8px"
});

const StyledCardActions = styled(CardActions)({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
  padding: "16px",
  paddingTop: "0",
  marginTop: "auto" // Push to bottom
});

const AddToCartButton = styled(Button)({
  width: "100%",
  backgroundColor: "#39fd00",
  color: "#ffffff",
  fontWeight: "bold",
  padding: "10px 0",
  "&:hover": {
    backgroundColor: "#2ed000"
  }
});

const BuyNowButton = styled(Button)({
  width: "100%",
  borderColor: "#39fd00",
  color: "#39fd00",
  fontWeight: "bold",
  padding: "10px 0",
  "&:hover": {
    borderColor: "#2ed000",
    backgroundColor: "rgba(57, 253, 0, 0.1)"
  }
});

export default function Prdtcard({ desc, cal, img }: Data) {
  return (
    <StyledCard>
      <Box sx={{ position: "relative" }}>
        <StyledCardMedia
          image={img}
          title={desc}
        />
        <ChipContainer>
          <StyledChip label="TOODAYS SPECCCAIL" />
        </ChipContainer>
      </Box>
      
      <StyledCardContent>
        <Typography 
          variant="body1" 
          color="textPrimary" 
          component="h3"
          sx={{ 
            fontWeight: "bold",
            lineHeight: 1.2,
            fontSize: "1rem"
          }}
        >
          {desc}
        </Typography>
        <Typography 
          variant="body2" 
          color="textSecondary" 
          component="p"
          sx={{ fontSize: "0.9rem" }}
        >
          {cal}
        </Typography>
      </StyledCardContent>
      
      <StyledCardActions>
        <AddToCartButton variant="contained" size="medium">
          ADD TO CART
        </AddToCartButton>
        <BuyNowButton variant="outlined" size="medium">
          BUY NOW
        </BuyNowButton>
      </StyledCardActions>
    </StyledCard>
  );
}