"use client"
import {Card} from "@/components/ui/card";
import {Checkbox} from "@/components/ui/checkbox";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function StoreFilter({stores}) {

  const searchParams = useSearchParams();
  const router = useRouter();

  const selectedStores = searchParams.get('stores')?.split(',') || [];


  function filterStores(toggle, storeId) {
    const existingSearchParams = new URLSearchParams(searchParams);
    // Actualizează URL-ul bazat pe starea curentă a checkbox-urilor
    const updatedStores = toggle ? [...selectedStores, storeId] : selectedStores.filter((id) => Number(id) !== storeId);

    existingSearchParams.set('stores', updatedStores.join(','));

    router.push(`?${existingSearchParams}`, {
      scroll: false
    })
  }

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
                                onCheckedChange={toggle => filterStores(toggle, store.id)}
                                checked={!!selectedStores.find(selectedStore => Number(selectedStore) === store.id)}
                            />
                            <p className="text-[#7C87AB] text-[14px] mx-2 uppercase">{store.name}</p>
                        </div>
                    )
                })}
            </Card>
        </>
    )
}
