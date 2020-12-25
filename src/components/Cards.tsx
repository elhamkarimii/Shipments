import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Wrapper = styled.div`
    display: flex;
    column-count: 3;
    flex-wrap: wrap;
    justify-content: space-between;
`
const CardWrapper = styled.div`
    width: 300px;
    height: 300px;
    border: 1px solid #000;
    margin-top: 25px;
    text-align: center;
`
const SearchBox = styled.input`
    margin: 0 auto;
    display: block;
    margin-top: 20px;
    height: 30px;
    width: 300px;
    font-size: 23px;
`
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
interface TargetValue {
    value: string;
}
interface Event{
    target: TargetValue;
}
function Cards({ data }: Data) {
    console.log(data);
        
    const [value, setValue] = useState<string>("")
    function handleSearchInput({target}: Event) {
        setValue(target.value)
    }

    const filteredData = useMemo(() => data.filter(item => item.id.toLowerCase().includes(value.toLowerCase()))
    , [value, data])

    return (
        <>
            <SearchBox autoFocus={true} placeholder="search by id..." type="text" value={value} onChange={handleSearchInput} />
            <Wrapper>
                {filteredData.map(item =>
                    <Link to={`/products/${item.id}`}>
                        <CardWrapper key={item.id}>
                            <p>{item.name}</p>
                            <p>{item.id}</p>
                        </CardWrapper>
                    </Link>
                )}
            </Wrapper>
        </>
    );
}

export default Cards;
