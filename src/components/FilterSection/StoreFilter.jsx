"use client"
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";

export default function StoreFilter({stores}) {
    return (
        <>
            <Card className="bg-primary-blue text-white mt-5 p-7 rounded-sm w-60 border-0">
                <p className="uppercase">Stores</p>
                {stores.map(function (store, index) {
                    return (
                        <div key={index} className="flex items-center mt-6">
                            <Checkbox
                                name="filters"
                                value={store.id}
                            />
                            <p className="text-[#7C87AB] text-[14px] mx-2 uppercase">{store.name}</p>
                        </div>
                    )
                })}
            </Card>
        </>
    )
}