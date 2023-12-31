"use client"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {ResponsiveLine} from "@nivo/line";
import {Badge} from "@/components/ui/badge";


export default function Home() {
    return (
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
            <h1 className="font-semibold text-lg">Accounts Overview</h1>
            <div className="grid lg:grid-cols-3 gap-4">
                <Card className="relative overflow-hidden text-white bg-gradient-to-r from-orange-600 to-orange-500 shadow-none">
                    <CardHeader>
                        <CardTitle>New Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>New: +12%</p>
                        <HeartBeatIcon className="w-24 h-24 absolute top-2 right-0 opacity-30 text-green-50" />
                        <Badge variant="secondary" className="mt-3">
                <span className="mr-1">
                  +22% compared to last month
                </span>
                            <TrendingUpIcon className="text-green-500 w-4 h-4" />
                        </Badge>
                    </CardContent>
                </Card>
                <Card className="relative overflow-hidden text-white bg-gradient-to-r from-blue-500 to-blue-600 shadow-none">
                    <CardHeader>
                        <CardTitle>Savings Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Balance: $10,000.00</p>
                        <SavingIcon className="w-24 h-24 absolute top-2 right-0 opacity-30 text-green-50" />
                        <Badge variant="secondary" className="mt-3">
                <span className="mr-1">
                  290 new saving accounts
                </span>
                            <TrendingUpIcon className="text-green-500 w-4 h-4" />
                        </Badge>
                    </CardContent>
                </Card>
                <Card className="relative overflow-hidden text-white bg-gradient-to-r to-green-600 from-green-500 via-green-600/80 shadow-none">
                    <CardHeader>
                        <CardTitle>Investment Account</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Balance: $15,000.00</p>
                        <DollarIcon className="w-24 h-24 absolute top-2 right-0 opacity-30 text-green-50" />
                        <Badge variant="secondary" className="mt-3">
                <span className="mr-1">
                  43 new projects
                </span>
                            <TrendingUpIcon className="text-green-500 w-4 h-4" />
                        </Badge>
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
                    <LineChart1 className="w-full aspect-[4/3]" />
                    <LineChart2 className="w-full aspect-[4/3]" />
                </CardContent>
            </Card>
        </main>
    )
}


function LineChart1(props) {
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



function LineChart2(props) {
    return (
        <div {...props}>
            <ResponsiveLine
                data={[
                    {
                        id: "C",
                        data: [
                            {
                                x: 1,
                                y: 203,
                            },
                            {
                                x: 2,
                                y: 250,
                            },
                            {
                                x: 3,
                                y: 162,
                            },
                            {
                                x: 4,
                                y: 194,
                            },
                            {
                                x: 5,
                                y: 211,
                            },
                            {
                                x: 6,
                                y: 142,
                            },
                            {
                                x: 7,
                                y: 34,
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


function HeartBeatIcon({props, className}) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-dollar ${className}` } width="24"
             height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
             strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M3 12h4.5l1.5 -6l4 12l2 -9l1.5 3h4.5"/>
        </svg>
    )
}

function DollarIcon({props, className}) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-currency-dollar ${className}` } width="24"
             height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
             strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M16.7 8a3 3 0 0 0 -2.7 -2h-4a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-4a3 3 0 0 1 -2.7 -2"/>
            <path d="M12 3v3m0 12v3"/>
        </svg>
    )
}


function SavingIcon({props, className}) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" className={`icon icon-tabler icon-tabler-pig-money ${className}` } width="24" height="24"
             viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round"
             strokeLinejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M15 11v.01"/>
            <path d="M5.173 8.378a3 3 0 1 1 4.656 -1.377"/>
            <path
                d="M16 4v3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342c-.336 .95 -.907 1.8 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l0 -.027a6 6 0 0 1 4 -10.473h2.5l4.5 -3h0z"/>
        </svg>
    )
}

function TrendingUpIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
            <polyline points="16 7 22 7 22 13" />
        </svg>
    )
}