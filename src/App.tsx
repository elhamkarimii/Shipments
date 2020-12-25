import React, { FormEventHandler, useEffect, useState } from 'react';
import './App.css';
import axios from 'axios'
import Cards from './components/Cards';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import CardInfo from './components/CardInfo';
import styled from "styled-components";
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';

const NextPage = styled.button`
  position:absolute;
  right: 12px;
  font-size: 20px;
`
const PreviousPage = styled.button`
  position:absolute;
  left: 12px;
  font-size: 20px;
`
const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

function App() {
  const [data, setData] = useState([])
  const [value, setValue] = useState<number>(1)
  const classes = useStyles();

  useEffect(() => {
    axios.get(`http://localhost:3000/shipments?_start=${(value - 1) * 20}&_limit=20`)
      .then(res => setData(res.data))
  }, [value]);

  function handlePageIndex(event: React.ChangeEvent<unknown>, value: number) {
    setValue(value)
  }
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          {/* <NextPage onClick={() => handlePageIndex(+1)} >next</NextPage>
          <PreviousPage onClick={() => handlePageIndex(-1)}>previous</PreviousPage> */}
          <Cards data={data} />
          <Pagination count={10} page={value} onChange={handlePageIndex} />
        </Route>
        <Route path="/products/:id?">
          <CardInfo data={data} />
        </Route>
      </Switch>
    </Router>
  )
}

export default App;
