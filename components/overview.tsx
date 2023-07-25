"use client"

import { ResponsiveContainer, BarChart, XAxis,YAxis,Bar } from "recharts"

interface OverviewProps{
    data: any[]
}

const Overview: React.FC<OverviewProps> = ({
    data
}) => {
  return (
    <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
            <XAxis stroke= "#888888" dataKey="name" fontSize={12} tickLine={false} axisLine={false} />
            <YAxis stroke= "#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value)=>`$${value}`} />
            <Bar dataKey="total" fill="#3498db" radius={[4,4,0,0]} />
        </BarChart>
    </ResponsiveContainer>
  )
}

export default Overview

