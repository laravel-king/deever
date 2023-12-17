"use client"
import Image from 'next/image'
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ResponsiveLine} from "@nivo/line";

export default function Home() {
  return (
      <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
        <div className="grid lg:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Checking Account</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Balance: $5,000.00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Savings Account</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Balance: $10,000.00</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Investment Account</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Balance: $15,000.00</p>
            </CardContent>
          </Card>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Transaction History</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>12/01/2023</TableCell>
                  <TableCell>Deposit</TableCell>
                  <TableCell>$500.00</TableCell>
                  <TableCell>$5,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12/02/2023</TableCell>
                  <TableCell>Withdrawal</TableCell>
                  <TableCell>-$200.00</TableCell>
                  <TableCell>$5,300.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>12/03/2023</TableCell>
                  <TableCell>Deposit</TableCell>
                  <TableCell>$1,000.00</TableCell>
                  <TableCell>$6,300.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Account Activity</CardTitle>
          </CardHeader>
          <CardContent className="grid grid-cols-1 md:grid-cols-2">
            <LineChart className="w-full aspect-[4/3]" />
            <LineChart className="w-full aspect-[4/3]" />
          </CardContent>
        </Card>
      </main>
  )
}



function LineChart(props) {
  return (
      <div {...props}>
        <ResponsiveLine
            data={[
              {
                id: "C",
                data: [
                  {
                    x: 1,
                    y: 283,
                  },
                  {
                    x: 2,
                    y: 250,
                  },
                  {
                    x: 3,
                    y: 152,
                  },
                  {
                    x: 4,
                    y: 294,
                  },
                  {
                    x: 5,
                    y: 211,
                  },
                  {
                    x: 6,
                    y: 172,
                  },
                  {
                    x: 7,
                    y: 24,
                  },
                  {
                    x: 8,
                    y: 25,
                  },
                  {
                    x: 9,
                    y: 76,
                  },
                  {
                    x: 10,
                    y: 5,
                  },
                ],
              },
              {
                id: "B",
                data: [
                  {
                    x: 1,
                    y: 43,
                  },
                  {
                    x: 2,
                    y: 237,
                  },
                  {
                    x: 3,
                    y: 21,
                  },
                  {
                    x: 4,
                    y: 35,
                  },
                  {
                    x: 5,
                    y: 26,
                  },
                  {
                    x: 6,
                    y: 154,
                  },
                  {
                    x: 7,
                    y: 181,
                  },
                  {
                    x: 8,
                    y: 65,
                  },
                  {
                    x: 9,
                    y: 261,
                  },
                  {
                    x: 10,
                    y: 199,
                  },
                ],
              },
              {
                id: "A",
                data: [
                  {
                    x: 1,
                    y: 240,
                  },
                  {
                    x: 2,
                    y: 228,
                  },
                  {
                    x: 3,
                    y: 77,
                  },
                  {
                    x: 4,
                    y: 178,
                  },
                  {
                    x: 5,
                    y: 196,
                  },
                  {
                    x: 6,
                    y: 204,
                  },
                  {
                    x: 7,
                    y: 153,
                  },
                  {
                    x: 8,
                    y: 289,
                  },
                  {
                    x: 9,
                    y: 250,
                  },
                  {
                    x: 10,
                    y: 274,
                  },
                ],
              },
            ]}
            enableCrosshair={false}
            margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
            xScale={{ type: "point" }}
            yScale={{
              type: "linear",
              min: 0,
              max: "auto",
            }}
            axisTop={null}
            axisRight={null}
            axisBottom={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "X",
              legendOffset: 45,
              legendPosition: "middle",
            }}
            axisLeft={{
              tickSize: 5,
              tickPadding: 5,
              tickRotation: 0,
              legend: "Y",
              legendOffset: -45,
              legendPosition: "middle",
            }}
            colors={{ scheme: "paired" }}
            pointSize={5}
            pointColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            pointBorderWidth={2}
            pointBorderColor={{
              from: "color",
              modifiers: [["darker", 0.2]],
            }}
            pointLabelYOffset={-12}
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
                symbolSize: 14,
                symbolShape: "circle",
              },
            ]}
            theme={{
              tooltip: {
                container: {
                  fontSize: "12px",
                },
              },
            }}
            role="application"
        />
      </div>
  )
}
