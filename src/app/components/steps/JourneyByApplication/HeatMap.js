import {
  Adaptor,
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-heatmap';
import { registerLicense } from '@syncfusion/ej2-base';

// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1JpR2dGfV5ycEVHal1WTndcUj0eQnxTdEFiWX1bcXdUQWFZUUF/Xg==');


const HeatMap = ({ heatmapData }) => {
    const tooltipTemplate = (args) =>  {
    args.content = [
      args.xLabel + ' : ' +
      (args.value)[1].bubbleData +
      '<br/>' +
      '# occurences : ' +
      (args.value)[0].bubbleData
    ];
  }

 
  return (
    <>

       <HeatMapComponent
      titleSettings={{
        text: 'Customer Journey - Achieve/Freedom',
        textStyle: {
          size: '15px',
          fontWeight: '500',
          fontStyle: 'Normal',
          fontFamily: 'Segoe UI',
        },
      }}
      xAxis={{
        labels: [
          'Source',
          'Brand',
          'Info',
          'PreQual',
          'XSOL',
          'DR - DEX',
          'DR - DC',
          'DR - Service',
          'PL - DEX',
          'PL - LC',
          'PL - Service',
          'HL - DEX',
          'HL - MA',
          'HL - Service',
        ],
      }}
      yAxis={{
        labels: ['-1', '0', '', '5', '4', '3', '2', '1'],
      }}
      paletteSettings={{
        palette: [
          { color: '#FF0000' },
          { color: '#FFFF00' },
          { color: '#008000' },
        ],
        type: 'Gradient',
      }}
      legendSettings={{
        visible: true,
      }}
      cellSettings={{
        border: {
          width: 1,
        },
        tileType: 'Bubble',
        bubbleType: 'SizeAndColor',
      }}
      tooltipRender={tooltipTemplate}
      dataSource={heatmapData}
      dataSourceSettings={{
        isJsonData: true,
        adaptorType: 'Table',
        xDataMapping: 'Area',
      }}
    >
      <Inject services={[Legend, Adaptor, Tooltip]} />
    </HeatMapComponent>
    </>
 
  );
};

export default HeatMap;
