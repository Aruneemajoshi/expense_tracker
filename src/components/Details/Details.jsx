import React from 'react';
import {Card , CardHeader , CardContent , Typography} from '@material-ui/core';
import { Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';
import useTransactions from '../../useTransactions';



import useStyles from './index';

const Details = ({title})=>
{
    const classes =useStyles();
  const{total , chartData} = useTransactions(title);


  return (
    <Card className={title === 'Income' ? classes.income:classes.expense}>
        <CardHeader title={title}/>
        <CardContent>
            <Typography varient="h5">Rs{total}</Typography>
            <Doughnut data={chartData}/>
        </CardContent>
    </Card>
  );
}

export default Details

