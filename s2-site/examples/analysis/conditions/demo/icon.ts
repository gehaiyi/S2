import { PivotSheet } from '@antv/s2';
import '@antv/s2/dist/s2.min.css';

fetch(
  'https://gw.alipayobjects.com/os/bmw-prod/d62448ea-1f58-4498-8f76-b025dd53e570.json',
)
  .then((res) => res.json())
  .then((data) => {
    const container = document.getElementById('container');
    const s2DataConfig = {
      fields: {
        rows: ['province', 'city'],
        columns: ['type'],
        values: ['price', 'cost'],
      },
      meta: [
        {
          field: 'province',
          name: '省份',
        },
        {
          field: 'city',
          name: '城市',
        },
        {
          field: 'type',
          name: '商品类别',
        },
        {
          field: 'price',
          name: '价格',
        },
        {
          field: 'cost',
          name: '成本',
        },
      ],
      data,
    };

    const s2Options = {
      width: 600,
      height: 480,
      interaction: {
        hoverHighlight: false,
      },
      conditions: {
        icon: [
          {
            field: 'price',
            position: 'right',
            mapping(fieldValue, data) {
              return {
                // icon 用于指定图标条件格式所使用的 icon 类型
                icon: 'CellUp',
                fill: '#30BF78',
              };
            },
          },
          {
            field: 'cost',
            position: 'left',
            mapping(fieldValue, data) {
              return {
                icon: 'CellDown',
                fill: '#F4664A',
              };
            },
          },
        ],
      },
    };
    const s2 = new PivotSheet(container, s2DataConfig, s2Options);

    s2.render();
  });