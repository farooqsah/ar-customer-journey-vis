import {
  Adaptor,
  HeatMapComponent,
  Inject,
  Legend,
  Tooltip,
} from '@syncfusion/ej2-react-heatmap';
import { registerLicense } from '@syncfusion/ej2-base';
 import MAP_LEGEND from './mapLegend'
// Registering Syncfusion license key
registerLicense('Ngo9BigBOggjHTQxAR8/V1NDaF5cWWtCf1JpR2dGfV5ycEVHal1WTndcUj0eQnxTdEFiWX1bcXdUQWFZUUF/Xg==');


const HeatMap = ({ heatmapData }) => {
    const tooltipTemplate = (args) =>  {
   
    const content = args.xLabel + ' : ' + (MAP_LEGEND[ args.xLabel + '_' + args.yLabel] || '') 
      + '<br/>' +
      '# occurences : ' +
      (args.value)[0].bubbleData
    args.content = [ content ];
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
        labels: ['Source', 'Brand', 'Info', 'PreQual', 'XSOL',	'DR_DEX','DR_DC','DR_Service','PL_DEX','PL_LC','PL_Service','HL_DEX','HL_MA','HL_Service']
      }}
      yAxis={{
        labels: ['00', '0', '', '5', '4','3','2','1']
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
