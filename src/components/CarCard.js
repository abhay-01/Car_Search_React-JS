import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AcademicCapIcon} from '@heroicons/react/outline';
import { FilterIcon } from '@heroicons/react/outline';
import { faCar, faG } from '@fortawesome/free-solid-svg-icons';
import { faGauge, faGear, faHeart} from '@fortawesome/free-solid-svg-icons';




const FullWidthContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const CardContainer = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
  max-width: 900px;
  margin-top: 20px;
  border-radius: 25px;
  text-align: center;
  background-color: #F0FFFF;
  shadow: 0 0 70px black;
    box-shadow: 0 0 20px #0077b6;
`;

const CardImage = styled.img`
 width: 100%;
  height: 270px;
  border-radius: 15px;
`;

const CardTitle = styled.h2`
  font-size: 1.6rem;
  margin-left: 10px;
  font-family: 'Roboto', sans-serif;
  
`;

const CardPrice = styled.p`
  font-size:1.9rem;
  margin-top:5px;
`;

const TypeText = styled.p`
margin-left: 8px;
margin-bottom:18px;
`;

const Separator = styled.hr`
  border: 0;
  border-top: 1px solid lightblue;
  margin: 10px 0;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
    margin-top: -23px;
`;

const HeartButton = styled.button`
  margin-right: 10px;
  background-color: lightblue; /* Set background color to light blue */
  border: none; /* Remove button border */
  border-radius: 6px;
  color: lightblue;
  font-size: 1.2rem;
  padding: 8px;
  margin-left: 17px;

`;

const RentNowButton = styled.button`
  background-color: lightblue; 
  border: none; 
  border-radius: 6px;
  color: white; 
  text-style: bold;
  font-size: 1.2rem;
  padding: 8px;


`;
const Footer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-top: -23px;
margin-top: 10px;

`

const CarCard = ({ car }) => (
  <FullWidthContainer>
    <CardContainer>
      <CardImage src={car.image} alt={car.name} />
      <div style = {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
       
        
      }}>
      <CardTitle>{car.name}</CardTitle>
      <p style={{
        marginRight: '10px',
        border: '3px dotted lightblue',
        borderRadius: '25px',
        paddingLeft: '10px',
        paddingRight: '10px',
      }}>{car.year}</p>
      </div>

      <div style = {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '-18px',
      }}>

      <div style = {{
        display: 'flex',
        margin: '5px',
        alignItems: 'center',
      }}>
      <AcademicCapIcon icon="academic-cap" style = {{
        width: '30px',
        height: '25px',
        color: '#0077b6',

          }}/>

      
      <text>{car.capacity} People</text>
                  </div>

                  <div style = {{
                    display: 'flex',
                    marginRight: '28px',
                    alignItems: 'center',
                  
                  }}>
                  <FilterIcon style={{
                    width: '30px',
                    height: '20px',
                    color: '0077b6',
                  }}/>
                  <TypeText>{car.type}</TypeText>

                  </div>

                  </div>

                  <div style = {{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: '-18px',
      }}>
        
      <div style = {{
        display: 'flex',
        margin: '5px',
        alignItems: 'center',
      }}>
      <FontAwesomeIcon icon={faGauge} style={{
        width: '30px',
        height: '20px',
        color: '0077b6',
      
      }} />
      

      
      <text>{car.milage}</text>
                  </div>

                  <div style = {{
                    display: 'flex',
                    margin: '5px',
                    alignItems: 'center',
                    marginRight: '18px',
                  
                  }}>
                  <FontAwesomeIcon icon = {faGear} style ={{
                    width: '30px',
                    height: '20px',
                    color: '0077b6',
                  
                  }}/>
                  <TypeText>{car.gear}</TypeText>

                  </div>

                  </div>
                  <Separator />
                  <Footer>
                  <div style = {{
        display: 'flex',
                  }}>
      <CardPrice>{car.price}</CardPrice>
      <text style = {{
        marginTop: '14px',
        marginLeft: '10px',
        fontSize: '1.2rem',
      }}>/month</text>
      </div>

      <ButtonGroup>
      <HeartButton>
        <FontAwesomeIcon icon={faHeart} style ={{
            color:'blue',
            backgroundColor: 'lightblue',
        }} />
      </HeartButton>
      <RentNowButton>Rent Now</RentNowButton>
    </ButtonGroup>
    </Footer>
    </CardContainer>
  </FullWidthContainer>
);

export default CarCard;
