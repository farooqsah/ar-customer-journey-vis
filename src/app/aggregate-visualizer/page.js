'use client';

import React, { useState } from 'react';
import { Chart } from 'react-google-charts';
import Layout from '../components/Layout';
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
} from '@mui/material';
import { useRouter } from 'next/navigation';

export const STEPS = {
  ABANDON: 'Abandon',
  ADS: 'Ads',
  LX_MP: 'LX/MP',
  WWW: 'WWW',
  PARTNERS: 'Partners',
  XSOL: 'XSOL',
  API: 'API',
  SFUQ: 'SFUQ',
  SFQ: 'SFQ',
  LFQ: 'LFQ',
  DEX: 'DEX',
  SUIP: 'SUIP',
  AHL_SF: 'AHL SF',
  APL_SF: 'APL SF',
  DEX_LANDED: 'DEX LANDED',
  DEX_COMPLETED: 'DEX COMPLETED',
  ENROLLED: 'ENROLLED',
  OFFLINE_PHONE: 'Offline/Phone',
  SALES_ACTIVE: 'Sales Active',
  INACTIVE: 'Inactive',
  CONTACTED: 'Contacted',
  FUNDED: 'Funded',
  DELINQUENT: 'Delinquent',
  DROPPED: 'Dropped',
  GRADUATE: 'Graduate',
  FIRST_DRAFT: 'First Draft',
  MONTHS3: '3 Months',
  MONTHS6: '6 Months',
  ACCEPTED: 'Accepted',
  REJECTED: 'Rejected',
};

// const {
//   ABANDON,
//   ADS,
//   LX_MP,
//   WWW,
//   PARTNERS,
//   XSOL,
//   API,
//   SFUQ,
//   SFQ,
//   LFQ,
//   DEX,
//   DEX_LANDED,
//   DEX_COMPLETED,
//   ACCEPTED,
//   REJECTED,
// } = STEPS;

// export const data = [
//   ['From', 'To', 'Weight'],
//   [ADS, LX_MP, 1000],
//   [ADS, WWW, 1000],
//   [PARTNERS, LX_MP, 1000],
//   [PARTNERS, API, 1000],
//   [LX_MP, XSOL, 200],
//   [LX_MP, SFQ, 500],
//   [LX_MP, LFQ, 300],
//   [LX_MP, SFUQ, 100],
//   [LX_MP, ABANDON, 1100],
//   [WWW, LX_MP, 300],
//   [WWW, ABANDON, 700],
//   [SFUQ, ABANDON, 100],
//   [SFQ, DEX, 400],
//   [SFQ, ABANDON, 100],
//   [LFQ, DEX, 800],
//   [LFQ, ABANDON, 300],
//   [XSOL, ABANDON, 200],
//   [API, ACCEPTED, 800],
//   [API, REJECTED, 200],
//   [REJECTED, ABANDON, 200],
//   [ACCEPTED, LFQ, 800],
//   [DEX, DEX_LANDED, 1000],
//   [DEX, ABANDON, 200],
//   [DEX_LANDED, DEX_COMPLETED, 800],
//   [DEX_LANDED, ABANDON, 200],
// ];

export const data = [
  ['From', 'To', 'Percentage'],
  ['Ads', 'www', 1],
  ['Ads', 'LX', 92],
  ['Ads', 'MP', 7],
  ['Partners', 'www', 5],
  ['Partners', 'API', 60],
  ['Partners', 'LX', 30],
  ['Partners', 'MP', 5],
  ['Organic', 'www', 100],
  ['www', 'LX', 80],
  ['www', 'MP', 10],
  ['www', 'Dashboard', 10],
  ['API', 'MP', 10],
  ['API', 'DEX DR', 20],
  ['API', 'DC DR', 20],
  ['API', 'XSOL', 0],
  ['LX', 'DC DR', 45],
  ['LX', 'DEX DR', 35],
  ['LX', 'XSOL', 20],
  ['MP', 'DC DR', 30],
  ['MP', 'DEX DR', 30],
  ['MP', 'DEX HL', 10],
  ['MP', 'DEX PL', 10],
  ['MP', 'XSOL', 20],
  ['DEX DR', 'DC DR', 20],
  ['DEX DR', 'Enrolled', 10],
  ['DEX DR', 'Zero value', 10],
  ['DC DR', 'Contacted', 40],
  ['DC DR', 'Zero value', 60],
  ['Contacted', 'Enrolled', 25],
  ['Contacted', 'Zero value', 75],
  ['Enrolled', '1st Draft', 88],
  ['Enrolled', 'Zero value', 12],
  ['1st Draft', 'M3 Retention', 92],
  ['1st Draft', 'Zero value', 8],
  ['M3 Retention', 'M6 Retention', 90],
  ['M3 Retention', 'Zero value', 10],
  ['M6 Retention', 'Graduate', 80],
  ['M6 Retention', 'Zero value', 20],
];

const AggregateVisualizer = () => {
  const router = useRouter();
  const [colorMode, setColorMode] = useState('gradient');

  const options = {
    sankey: {
      link: {
        colorMode: colorMode,
        interactivity: true,
      },
      node: {
        interactivity: true,
      },
    },
  };

  const handleColorModeChange = (event) => {
    setColorMode(event.target.value);
  };

  const handleDoubleClick = () => {
    router.push('/visitor-session');
  };

  return (
    <Layout>
      <Box margin="0 10px">
        <FormControl component="fieldset">
          <RadioGroup
            row
            aria-label="colorMode"
            name="colorMode"
            value={colorMode}
            onChange={handleColorModeChange}
          >
            <FormControlLabel
              value="gradient"
              control={<Radio />}
              label="Gradient"
            />
            <FormControlLabel
              value="source"
              control={<Radio />}
              label="Source"
            />
            <FormControlLabel
              value="target"
              control={<Radio />}
              label="Target"
            />
            <FormControlLabel value="none" control={<Radio />} label="None" />
          </RadioGroup>
        </FormControl>
        <div onDoubleClick={handleDoubleClick}>
          <Chart
            chartType="Sankey"
            width="100%"
            height="680px"
            data={data}
            options={options}
          />
        </div>
      </Box>
    </Layout>
  );
};

export default AggregateVisualizer;
