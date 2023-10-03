import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const MainContainer = styled(Link)`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    border: 1px solid #fff;
    height: 100%;
    width: 100%;
    border-radius: 5px;
    text-decoration: none;
    color: #fff;

    :hover{
        border-color: red;
        cursor: pointer;

    }
    
    img{
        width: 100%;
        height: 80%;
    }

    .infoContainer{
        width: 90%;
        display: flex;
        justify-content: center;
        height: 27%;
        font-size: 2vh;
        flex-direction: column;
    }


`