export type Farm = {
  id: number;
  farmName: string;
  buildings: Building[];
};

export type Building = {
  id: number;
  buildingName: string;
  plots: Plot[];
};

export type Plot = {
  id: number;
  plotName: string;
  plants: Plant[];
};

export type Plant = {
  id: number;
  plantName: string;
};

export default [
  {
    id: 0,
    farmName: 'Farm 1',
    buildings: [
      {
        id: 0,
        buildingName: 'Building 1',
        plots: [
          {
            id: 0,
            plotName: 'Plot A1',
            plants: [
              {
                id: 0,
                plantName: '001',
              },
              {
                id: 1,
                plantName: '002',
              },
              {
                id: 2,
                plantName: '003',
              },
            ],
          },
          {
            id: 1,
            plotName: 'Plot A2',
            plants: [],
          },
          {
            id: 2,
            plotName: 'Plot A3',
            plants: [],
          },
          {
            id: 3,
            plotName: 'Plot B1',
            plants: [],
          },
          {
            id: 4,
            plotName: 'Plot B2',
            plants: [],
          },
          {
            id: 5,
            plotName: 'Plot B3',
            plants: [],
          },
          {
            id: 6,
            plotName: 'Plot C1',
            plants: [],
          },
          {
            id: 7,
            plotName: 'Plot C2',
            plants: [],
          },
          {
            id: 8,
            plotName: 'Plot C3',
            plants: [],
          },
        ],
      },
      {
        id: 1,
        buildingName: 'Building 2',
        plots: [],
      },
      {
        id: 2,
        buildingName: 'Building 3',
        plots: [],
      },
      {
        id: 3,
        buildingName: 'Building 4',
        plots: [],
      },
    ],
  },
  {
    id: 1,
    farmName: 'Farm 2',
    buildings: [
      {
        id: 4,
        buildingName: 'Main Greenhouse',
        plots: [],
      },
    ],
  },
];
