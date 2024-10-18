import { Box, useTheme } from "@mui/material";
import { ResponsiveLine } from "@nivo/line";
import Head from './../../Components/Head';
const data = [
  {
    id: "japan",
    color: "hsl(25, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 260,
      },
      {
        x: "helicopter",
        y: 131,
      },
      {
        x: "boat",
        y: 71,
      },
      {
        x: "train",
        y: 214,
      },
      {
        x: "subway",
        y: 243,
      },
      {
        x: "bus",
        y: 109,
      },
      {
        x: "car",
        y: 153,
      },
      {
        x: "moto",
        y: 33,
      },
      {
        x: "bicycle",
        y: 83,
      },
      {
        x: "horse",
        y: 180,
      },
      {
        x: "skateboard",
        y: 290,
      },
      {
        x: "others",
        y: 53,
      },
    ],
  },
  {
    id: "france",
    color: "hsl(198, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 274,
      },
      {
        x: "helicopter",
        y: 34,
      },
      {
        x: "boat",
        y: 154,
      },
      {
        x: "train",
        y: 166,
      },
      {
        x: "subway",
        y: 228,
      },
      {
        x: "bus",
        y: 274,
      },
      {
        x: "car",
        y: 150,
      },
      {
        x: "moto",
        y: 95,
      },
      {
        x: "bicycle",
        y: 50,
      },
      {
        x: "horse",
        y: 232,
      },
      {
        x: "skateboard",
        y: 120,
      },
      {
        x: "others",
        y: 37,
      },
    ],
  },
  {
    id: "norway",
    color: "hsl(88, 70%, 50%)",
    data: [
      {
        x: "plane",
        y: 130,
      },
      {
        x: "helicopter",
        y: 147,
      },
      {
        x: "train",
        y: 178,
      },
      {
        x: "subway",
        y: 269,
      },
      {
        x: "bus",
        y: 74,
      },
      {
        x: "car",
        y: 174,
      },
      {
        x: "moto",
        y: 150,
      },
      {
        x: "bicycle",
        y: 54,
      },
      {
        x: "horse",
        y: 173,
      },
      {
        x: "skateboard",
        y: 7,
      },
      {
        x: "others",
        y: 298,
      },
    ],
  },
];
// var => give a value to it when invokde the design
export default function LineChart({ isDashboard = false }) {
  const theme = useTheme();
  return (
   <>
   <Head title={"Line"} subtitle={"Simple Line Chart"} />
    <Box sx={{ height: isDashboard ? "280px" : "75vh" }}>
      <ResponsiveLine
        data={data}
        theme={{
          text: {
            fontSize: 11,
            fill: "theme.palette.text.primary",
            outlineWidth: 0,
            outlineColor: "transparent",
          },
          axis: {
            domain: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
            },
            legend: {
              text: {
                fontSize: 12,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.divider,
                strokeWidth: 1,
              },
              text: {
                fontSize: 11,
                fill: theme.palette.text.secondary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          grid: {
            line: {
              stroke: theme.palette.divider,
              strokeWidth: 0,
            },
          },
          legends: {
            title: {
              text: {
                fontSize: 11,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
            text: {
              fontSize: 11,
              fill: theme.palette.text.primary,
              outlineWidth: 0,
              outlineColor: "transparent",
            },
            ticks: {
              line: {},
              text: {
                fontSize: 10,
                fill: theme.palette.text.primary,
                outlineWidth: 0,
                outlineColor: "transparent",
              },
            },
          },
          annotations: {
            text: {
              fontSize: 13,
              fill: theme.palette.text.primary,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            link: {
              stroke: "#000000",
              strokeWidth: 1,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            outline: {
              stroke: "#000000",
              strokeWidth: 2,
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
            symbol: {
              fill: "#000000",
              outlineWidth: 2,
              outlineColor: "#ffffff",
              outlineOpacity: 1,
            },
          },
          tooltip: {
            wrapper: {},
            container: {
              background: theme.palette.background.default,
              color: theme.palette.text.primary,
              fontSize: 12,
            },
            basic: {},
            chip: {},
            table: {},
            tableCell: {},
            tableCellValue: {},
          },
        }}
        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
          reverse: false,
        }}
        yFormat=" >-.2f"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? "" : "transportation",
          legendOffset: 40,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: isDashboard ? "" : "count",
          legendOffset: -45,
          legendPosition: "middle",
          truncateTickAt: 0,
        }}
        pointSize={10}
        pointColor={{ theme: "background" }}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabel="data.yFormatted"
        pointLabelYOffset={-12}
        enableTouchCrosshair={true}
        useMesh={true}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            justify: false,
            translateX: 100,
            translateY: 0,
            itemsSpacing: 0,
            itemDirection: "left-to-right",
            itemWidth: 80,
            itemHeight: 20,
            itemOpacity: 0.75,
            symbolSize: 12,
            symbolShape: "circle",
            symbolBorderColor: "rgba(0, 0, 0, .5)",
            effects: [
              {
                on: "hover",
                style: {
                  itemBackground: "rgba(0, 0, 0, .03)",
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </Box>
   </>
  );
}
