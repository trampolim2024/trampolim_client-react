import React, { useRef, useState } from 'react';
import ReactECharts from 'echarts-for-react';
import * as echarts from 'echarts';
import agresteGeoJson from '../../utils/Agreste.json'; // Ajuste o caminho conforme necessário
import cityData from '../../utils/cityData'; // Importação dos dados das cidades
import Modal from 'react-modal'; // Certifique-se de instalar o react-modal
import { MdClose } from 'react-icons/md';

// Registrando o mapa personalizado
echarts.registerMap('local', agresteGeoJson);

const MapaAgreste = () => {
  const chartRef = useRef(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState(null);

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
    const cityInfo = cityData[params.name];
    if (cityInfo) {
      setSelectedCity(cityInfo);
      setModalIsOpen(true);
    }
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedCity(null);
  };

  return (
    <div>
      <ReactECharts
        ref={chartRef}
        option={options}
        style={{ width: '700px', height: '700px' }}
        onEvents={{
          click: onChartClick,
        }}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="City Info Modal"
        className=""
      >
        {selectedCity && (
          <div className="background-white h-full rounded-2xl shadow-md">
            <div className="flex items-center justify-between px-20 py-10">
              <h1 className="text-orange text-5xl font-bold">{selectedCity.name}</h1>
              <button onClick={closeModal} className="bg-transparent outline-none border-none">
                <MdClose className="text-orange" size={32} />
              </button>
            </div>
            <div className='flex items-center justify-around mt-10'>
              <img src={selectedCity.img} alt={selectedCity.name} className="w-[650px] rounded-md" />
              <div className='flex flex-col gap-5 justify-center items-center w-[40vw]'>
                <h3 className='text-3xl font-bold text-blue'>Sobre a cidade</h3>
                <p className='text-base text-orange'>Reprehenderit id est tempor velit esse voluptate aute magna dolore laborum reprehenderit ut velit Lorem. Consequat culpa sint irure deserunt occaecat elit cillum est. Ad veniam aute adipisicing velit aute incididunt. Ex nulla in consectetur et labore consequat sit nulla. Et ut officia esse nostrud anim fugiat quis nulla reprehenderit incididunt ullamco. Deserunt ut dolore officia magna adipisicing minim et veniam. Ad esse ad non nisi irure.</p>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default MapaAgreste;
