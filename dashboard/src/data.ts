export type Farm = {
  farmName: string;
  buildings: Building[];
};

export type Building = {
  buildingName: string;
  plots: Plot[];
};

export type Plot = {
  plotName: string;
  plants: Plant[];
};

export type Plant = {
  plantName: string;
};

export default [
  {
    farmName: 'Farm 1',
    buildings: [
      {
        buildingName: 'Building 1',
        plots: [
          {
            plotName: 'Plot A1',
            plants: [
              {
                plantName: '001',
              },
              {
                plantName: '002',
              },
              {
                plantName: '003',
              },
            ],
          },
          {
            plotName: 'Plot A2',
            plants: [],
          },
          {
            plotName: 'Plot A3',
            plants: [],
          },
          {
            plotName: 'Plot B1',
            plants: [],
          },
          {
            plotName: 'Plot B2',
            plants: [],
          },
          {
            plotName: 'Plot B3',
            plants: [],
          },
          {
            plotName: 'Plot C1',
            plants: [],
          },
          {
            plotName: 'Plot C2',
            plants: [],
          },
          {
            plotName: 'Plot C3',
            plants: [],
          },
        ],
      },
      {
        buildingName: 'Building 2',
        plots: [],
      },
      {
        buildingName: 'Building 3',
        plots: [],
      },
      {
        buildingName: 'Building 4',
        plots: [],
      },
    ],
  },
  {
    farmName: 'Farm 2',
    buildings: [
      {
        buildingName: 'Main Greenhouse',
        plots: [],
      },
    ],
  },
];
