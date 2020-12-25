import React from 'react';
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

interface Services {
    type: string
}
interface Cargo {
    type: string,
    description: string,
    volume: string
}
interface ItemOfData {
    id: string,
    name: string,
    cargo: Cargo[],
    mode: string,
    type: String,
    destination: string,
    origin: string,
    services: Services[],
    total: string,
    status: string,
    userId: string
}
interface Data {
    data: ItemOfData[]
}
interface Id {
    id: string
}
const Wrapper = styled.div`
    margin: 0 auto;
    margin-top: 30px;
    padding: 30px;
    border: 1px solid #000;
    width: 500px;
    height: 450px;
    position: relative;
`
const BackButton = styled.button`
    position: absolute;
    bottom: 20px;
    font-size: 15px;
`
function CardInfo({ data }: Data) {
    let { id } = useParams<Id>();
    const items = data.find(item => item.id === id)

    return (
        <Wrapper>
            <>
                {items !== undefined && <div>
                    <p>{items.name}</p>
                    <p>{items.id}</p>
                    <p>{items.mode}</p>
                    <p>{items.type}</p>
                    <p>{items.destination}</p>
                    <p>{items.status}</p>
                    <p>{items.origin}</p>
                    <p>{items.userId}</p>
                </div>}
            </>
            <Link to="/">
                <BackButton>BACK!</BackButton>
            </Link>
        </Wrapper>
    );
}

export default CardInfo;
