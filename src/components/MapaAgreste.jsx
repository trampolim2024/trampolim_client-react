import React, { useRef } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import agresteGeoJson from '../../utils/Agreste.json'; // Ajuste o caminho conforme necessário

// Registrando o mapa personalizado
echarts.registerMap('local', agresteGeoJson);

const MapaAgreste = () => {
  const chartRef = useRef(null);

  const options = {
    tooltip: {},
    legend: {},
    geo: {
      map: 'local',
      roam: false,
      selectedMode: 'single',
      emphasis: {
        label: {
          show: false,
        },
      },
      select: {
        label: false,
        itemStyle: {
          areaColor: '#fb923c',
        },
      },
      itemStyle: {
        normal: {
          areaColor: '#3A6ABE',
          borderColor: '#EEE',
        },
        emphasis: {
          areaColor: '#F79B4B',
        },
      },
    },
  };

  const onChartClick = (params) => {
    // Substitua pelo comportamento desejado ao clicar em uma área do mapa
    window.location.href = `/ideias/${params.name}`;
  };

  return (
    <ReactECharts
      ref={chartRef}
      option={options}
      style={{ width: '700px', height: '700px' }}
      onEvents={{
        click: onChartClick,
      }}
    />
  );
};

export default MapaAgreste;
