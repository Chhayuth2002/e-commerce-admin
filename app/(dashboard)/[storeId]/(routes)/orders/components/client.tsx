"use client";

import { Heading } from "@/components/ui/head";
import { Separator } from "@/components/ui/separator";
import { OrderColumns, columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";


interface OrderClientProps{
    data: OrderColumns[]
}

export const OrderClient: React.FC<OrderClientProps> = ({
    data
}) =>{
    return (
        <>
            <Heading title={`Orders (${data.length})`} description="Manage orders for you store"/>
            <Separator/>
            <DataTable columns={columns} data={data} searchKey="products"/>
        </>
    )
}