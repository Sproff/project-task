import { useEffect, useState } from "react";
import { useStoreState } from "./storage";
import { TStoreState } from "@/types/storeState";

type TOmitFunctionKeys<T> = Omit<
	T,
	{ [K in keyof T]: T[K] extends () => void ? K : never }[keyof T]
>;

export const useHydratedStoreState = <
	T extends keyof TOmitFunctionKeys<TStoreState>,
>(
	key: T
): TOmitFunctionKeys<TStoreState>[T] => {
	const [store, setStore] = useState<any>();
	const storeState = useStoreState((state) => state[key]);

	useEffect(() => {
		setStore(storeState);
	}, [storeState]);
	return store;
};
